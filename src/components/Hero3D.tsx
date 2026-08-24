import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Hero3D() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    const geo = new THREE.IcosahedronGeometry(1.6, 1)
    const solidMat = new THREE.MeshBasicMaterial({ color: 0x0a0a0b, transparent: true, opacity: 0.6 })
    const solid = new THREE.Mesh(geo, solidMat)
    scene.add(solid)

    const wireGeo = new THREE.WireframeGeometry(geo)
    const wireMat = new THREE.LineBasicMaterial({ color: 0xe8ff5e, transparent: true, opacity: 0.7 })
    const wireframe = new THREE.LineSegments(wireGeo, wireMat)
    scene.add(wireframe)

    const glowGeo = new THREE.IcosahedronGeometry(1.85, 1)
    const glowWireGeo = new THREE.WireframeGeometry(glowGeo)
    const glowMat = new THREE.LineBasicMaterial({ color: 0xe8ff5e, transparent: true, opacity: 0.15 })
    const glow = new THREE.LineSegments(glowWireGeo, glowMat)
    scene.add(glow)

    const particleCount = 120
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      const r = 2.5 + Math.random() * 2
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)
    }
    const pGeo = new THREE.BufferGeometry()
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const pMat = new THREE.PointsMaterial({ color: 0xe8ff5e, size: 0.03, transparent: true, opacity: 0.5 })
    const particles = new THREE.Points(pGeo, pMat)
    scene.add(particles)

    let scrollY = 0
    let targetScrollY = 0
    const onMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = (e.clientY / window.innerHeight) * 2 - 1
      scene.rotation.y = x * 0.3
      scene.rotation.x = y * 0.2
    }
    const onScroll = () => { targetScrollY = window.scrollY }
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('scroll', onScroll, { passive: true })

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    let raf = 0
    const animate = () => {
      raf = requestAnimationFrame(animate)
      scrollY += (targetScrollY - scrollY) * 0.08
      const sf = scrollY * 0.002

      solid.rotation.y = sf + performance.now() * 0.0001
      solid.rotation.x = sf * 0.5
      wireframe.rotation.y = sf + performance.now() * 0.0001
      wireframe.rotation.x = sf * 0.5
      glow.rotation.y = -sf * 0.7 + performance.now() * 0.00005
      glow.rotation.x = sf * 0.3

      const scale = 1 + Math.sin(sf * 2) * 0.08
      solid.scale.setScalar(scale)
      wireframe.scale.setScalar(scale)
      glow.scale.setScalar(scale * 1.05)

      particles.rotation.y = performance.now() * 0.00008
      particles.rotation.x = sf * 0.2

      const heroOpacity = Math.max(0, 1 - scrollY / 600)
      solidMat.opacity = 0.6 * heroOpacity
      wireMat.opacity = 0.7 * heroOpacity
      glowMat.opacity = 0.15 * heroOpacity
      pMat.opacity = 0.5 * heroOpacity

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      geo.dispose(); wireGeo.dispose(); glowGeo.dispose(); glowWireGeo.dispose(); pGeo.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div ref={mountRef} style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      zIndex: 1, pointerEvents: 'none',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }} />
  )
}

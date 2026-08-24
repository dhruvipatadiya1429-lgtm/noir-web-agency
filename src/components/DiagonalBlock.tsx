export default function DiagonalBlock() {
  return (
    <div className="relative w-full overflow-hidden leading-[0]" aria-hidden="true">
      {/* Solid charcoal block with a single diagonal cut */}
      <div
        className="bg-signature w-full"
        style={{
          height: 'clamp(80px, 14vw, 180px)',
          clipPath: 'polygon(0 0, 100% 0, 100% 30%, 0 100%)',
        }}
      />
    </div>
  );
}

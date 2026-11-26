// The 21-ray sun from the BFK logo, drawn as a fine outline for decoration.
const rays = Array.from({ length: 21 }, (_, i) => {
  const a = (i * 2 * Math.PI) / 21 - Math.PI / 2;
  const w = Math.PI / 42;
  const p = (r: number, t: number) => `${(100 + r * Math.cos(t)).toFixed(2)} ${(100 + r * Math.sin(t)).toFixed(2)}`;
  return `M${p(46, a - w)} L${p(96, a)} L${p(46, a + w)}`;
}).join(' ');

export default function Sun({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" aria-hidden="true" focusable="false">
      <circle cx="100" cy="100" r="38" />
      <path d={rays} />
    </svg>
  );
}

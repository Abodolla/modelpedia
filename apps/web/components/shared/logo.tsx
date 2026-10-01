export function Logo({
  className,
  size,
  src = "/autorply-logo.png",
}: {
  className?: string;
  size?: number;
  color?: string;
  src?: string;
}) {
  return (
    <img
      src={src}
      alt="Autorply"
      className={className}
      width={size}
      height={size}
    />
  );
}

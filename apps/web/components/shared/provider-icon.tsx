export function ProviderIcon({
  provider,
  size = 16,
}: {
  provider: { icon?: string } | null | undefined;
  size?: number;
}) {
  if (!provider?.icon) return null;

  return (
    <span
      className="text-muted-foreground shrink-0 [&>svg]:block [&>svg]:h-full [&>svg]:w-full"
      style={{ width: size, height: size }}
      dangerouslySetInnerHTML={{ __html: provider.icon }}
    />
  );
}

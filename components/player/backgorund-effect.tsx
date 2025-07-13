export function BackgroundEffect() {
  return (
    <div className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,var(--color-jax-teal),transparent_50%)] transition-all duration-700 group-hover:bg-[radial-gradient(circle_at_30%_40%,var(--color-jax-teal),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,var(--color-jax-gold),transparent_50%)] transition-all duration-700 group-hover:bg-[radial-gradient(circle_at_70%_30%,var(--color-jax-gold),transparent_70%)]" />
    </div>
  );
}

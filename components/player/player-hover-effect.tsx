export function PlayerHoverEffect() {
  return (
    <>
      <div className="absolute inset-0 z-20 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[100%]" />
      <div className="absolute inset-0 z-20 translate-y-[-100%] bg-gradient-to-b from-transparent via-jax-teal/3 to-transparent transition-transform duration-1500 ease-out group-hover:translate-y-[100%]" />
    </>
  );
}

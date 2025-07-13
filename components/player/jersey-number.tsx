export function JerseyNumber({ number }: { number: number }) {
  return (
    <div className="absolute top-1 right-2 font-black text-2xl text-white/5 transition-all duration-500 group-hover:text-white/15 md:top-2 md:right-2 md:text-4xl">
      {number}
    </div>
  );
}

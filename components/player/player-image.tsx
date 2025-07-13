import Image from 'next/image';

export function PlayerImage({
  src,
  alt,
}: {
  src: string | undefined;
  alt: string;
}) {
  return (
    <div className="relative z-10 flex-shrink-0">
      <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-jax-brown bg-gradient-to-br from-white/10 to-white/5 p-1 transition-all duration-300 group-hover:border-jax-teal group-hover:shadow-jax-teal/30 group-hover:shadow-lg md:h-20 md:w-20">
        <Image
          alt={`${alt}`}
          className="h-full w-full rounded-full object-cover transition-all duration-300 group-hover:brightness-110"
          fill
          sizes="(max-width: 768px) 96px, 128px"
          src={src ?? '/placeholder.png'}
        />
      </div>
    </div>
  );
}

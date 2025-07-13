import Link from 'next/link';
import { getNextPosition, getPreviousPosition } from '@/helpers/postions';
import type { PlayerPosition } from '@/types/player';

export function NavButtons({
  currentPosition,
}: {
  currentPosition: PlayerPosition;
}) {
  const previousPosition = getPreviousPosition(currentPosition);
  const nextPosition = getNextPosition(currentPosition);
  return (
    <div className="flex justify-between gap-4 justify-self-end">
      {previousPosition ? (
        <Link href={`/${previousPosition}`}>
          <button
            className="rounded-full bg-jax-teal px-4 py-2 text-white hover:cursor-pointer hover:bg-jax-teal/80"
            type="button"
          >
            Previous
          </button>
        </Link>
      ) : (
        <div className="w-10" />
      )}
      {nextPosition ? (
        <Link href={`/${nextPosition}`}>
          <button
            className="rounded-full bg-jax-teal px-4 py-2 text-white hover:cursor-pointer hover:bg-jax-teal/80"
            type="button"
          >
            Next
          </button>
        </Link>
      ) : (
        <div className="w-10" />
      )}
    </div>
  );
}

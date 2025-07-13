import { dateFromTimestamp } from '@/lib/date-from-timestamp';

export function Age({
  birthdayTimestamp,
}: {
  birthdayTimestamp: number | undefined;
}) {
  if (!birthdayTimestamp) {
    return (
      <span className="rounded-full bg-gradient-to-r from-gray-700 to-gray-600 px-3 py-1 font-black text-white text-xs shadow-md">
        ?
      </span>
    );
  }
  const birthday = dateFromTimestamp(birthdayTimestamp);
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - birthday.getTime());
  const diffYears = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 365));
  return (
    <span className="rounded-full bg-gradient-to-r from-gray-700 to-gray-600 px-3 py-1 font-black text-white text-xs shadow-md">
      {diffYears}
    </span>
  );
}

import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/QB');
  return null;
}

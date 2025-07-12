import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/DB');
  return null;
}

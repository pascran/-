'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const path = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
          {path === '/' ? '🐧🐧' : 'bot penguin'}
        </li>
        <li>
          <Link href="/about-penguin">About Penguin</Link>
        </li>
      </ul>
    </nav>
  );
}

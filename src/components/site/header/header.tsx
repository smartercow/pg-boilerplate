import { Button } from '@components/ui/core/button';
import Link from 'next/link';
import RightContentHeader from './rightcontent-header';

export default function Header(): JSX.Element {
  return (
    <header className='min-w-full'>
      <nav className='extent flex items-center justify-between gap-4 py-2'>
        <div>
          <h2 className='text-lg font-bold'>LOGO</h2>
        </div>
        <ul className='flex items-center justify-between gap-4 pt-2 text-sm font-medium'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='#'>Link1</Link>
          </li>
          <li>
            <Link href='#'>Link2</Link>
          </li>
          <li>
            <Link href='#'>Link3</Link>
          </li>
        </ul>
        <RightContentHeader />
      </nav>
    </header>
  );
}

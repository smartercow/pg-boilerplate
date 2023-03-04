export default function Footer(): JSX.Element {
  return (
    <footer className='min-w-full'>
      <div className='extent'>
        <div className='flex flex-col justify-center gap-1 xs:flex-row'>
          <p className='text-xs'>&copy; {new Date().getFullYear()} PG.</p>
          <p className='text-xs'>All Rights Reversed.</p>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';

export default function HomePage() {
  return (
    <section className='grid min-h-[70vh] place-items-center'>
      <div className='w-fit space-y-4 text-center'>
        <h2 className='text-2xl font-semibold'>2023 PG boilerplate</h2>
        <Link
          href='https://github.com/smartercow/'
          target='_blank'
          className='text-primary hover:underline'
        >
          @smartercow
        </Link>
      </div>
    </section>
  );
}

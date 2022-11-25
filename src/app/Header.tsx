import { Logo } from '@/components/Logo';

import { SearchForm } from '@/app/SearchForm';

export function Header() {
  return (
    <div className='flex w-full flex-col items-center gap-8 bg-white-1 py-20'>
      <Logo />
      <SearchForm />
    </div>
  );
}

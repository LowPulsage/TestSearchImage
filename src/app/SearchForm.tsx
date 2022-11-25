import { FormEvent, useRef } from 'react';

import { IconButton } from '@/components/buttons/IconButton';
import { Input } from '@/components/Input';

import { useSearch } from '@/context/search';

import SearchIcon from '~/svg/Search.svg';

export function SearchForm() {
  const { setText } = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setText(inputRef.current?.value ?? "");
  }

  return (
    <form className='flex flex-row gap-4' onSubmit={onSubmit}>
      <Input ref={inputRef} className='w-[240px] sm:w-[300px] md:w-[45vw] lg:w-[480px]' placeholder='Search...' />
      <IconButton>
        <SearchIcon className='mx-auto h-5 w-5' />
      </IconButton>
    </form>
  );
}

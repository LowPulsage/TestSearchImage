import { BiLoader } from 'react-icons/bi';

export function Loader() {
  return (
    <div className='py-10'>
      <BiLoader className='mx-auto h-10 w-10 animate-spin' />
    </div>
  );
}

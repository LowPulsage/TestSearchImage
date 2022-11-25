import ClassifyIcon from '~/svg/Classify.svg';

export function Logo() {
  return (
    <div className='flex w-full flex-row items-center justify-center gap-4'>
      <ClassifyIcon className='h-11 w-11' />
      <h1 className=' text-4 font-bold text-primary-1'>Classify</h1>
    </div>
  );
}

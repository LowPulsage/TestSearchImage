import { HtmlHTMLAttributes } from 'react';

import clsxm from '@/lib/clsxm';


interface Props extends HtmlHTMLAttributes<HTMLButtonElement>{
  isLoading?: boolean;
  disabled?: boolean;
}

export function Button({ isLoading, children, disabled, className, ...props }: Props) {
  return (
    <button 
      disabled={disabled ?? isLoading} 
      className={clsxm('rounded-md bg-primary-1', className)} 
      {...props}
    >
      {isLoading ? 'loading' : children}
    </button>
  )
}
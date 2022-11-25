import { forwardRef, HtmlHTMLAttributes } from 'react';

import clsxm from '@/lib/clsxm';

interface Props extends HtmlHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={clsxm('h-12 rounded-full bg-white-10 py-3 px-6', className)}
      {...props}
    />
  );
})

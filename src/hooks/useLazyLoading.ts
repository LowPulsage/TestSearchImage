import { useEffect, useState } from 'react';

import { useDebounceCallback } from '@/hooks/useDebounceCallback';

export function useLazyLoading<T extends HTMLElement>(
  offset: number,
  next: VoidFunction | null
) {
  const [ref, setRef] = useState<T | null>(null);

  const handleScrollEnd = useDebounceCallback(() => {
    const { scrollY, innerHeight } = window;
    const { offsetTop, clientHeight } = ref!;

    const bottomScrollPosition = scrollY + innerHeight;
    const maxBottomScroll = offsetTop + clientHeight - offset;

    if (bottomScrollPosition > maxBottomScroll) {
      next?.();
    }
  });

  useEffect(() => {
    if (ref) {
      window.addEventListener('scroll', handleScrollEnd);
      return () => {
        window.removeEventListener('scroll', handleScrollEnd);
      };
    }
  }, [ref]);

  return setRef;
}

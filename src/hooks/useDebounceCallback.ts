import { useCallback, useEffect, useRef } from 'react';

import { useSyncRef } from '@/hooks/useSyncRef';


export function useDebounceCallback<Args extends unknown[]>(
    callback?: (...args: Args) => void,
    delay = 400
) {
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const callbackRef = useSyncRef(callback);

    function clear() {
        clearTimeout(timerRef.current!);
    }

    useEffect(() => clear, []);

    return useCallback((...args: Args) => {
        clear();
        timerRef.current = setTimeout(() => callbackRef.current?.(...args), delay);
    }, [delay]);
}

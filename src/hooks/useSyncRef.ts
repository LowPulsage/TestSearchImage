import { useRef } from 'react';

export function useSyncRef<T>(value: T) {
    const ref = useRef(value);
    ref.current = value;

    return ref;
}

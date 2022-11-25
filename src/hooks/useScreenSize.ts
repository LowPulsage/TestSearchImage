import { useEffect, useState } from "react";

import { useDebounceCallback } from "@/hooks/useDebounceCallback";

export function useScreenSize(){
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const onResize = useDebounceCallback(() => {
    const { innerHeight, innerWidth } = window;
    setHeight(innerHeight);
    setWidth(innerWidth);
  })

  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    }
  }, [])

  return { width, height }
}
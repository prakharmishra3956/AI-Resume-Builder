import React, { useEffect, useState } from "react";

export default function useDimensions<T extends HTMLElement>(
  containerRef: React.RefObject<T | null>,
) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const currentRef = containerRef.current;

    function getDimensions() {
      return {
        width: currentRef?.offsetWidth || 0,
        height: currentRef?.offsetHeight || 0,
      };
    }

    if (!currentRef) return;

    const resizeObserver = new ResizeObserver(() => {
      setDimensions(getDimensions());
    });

    resizeObserver.observe(currentRef);
    setDimensions(getDimensions());

    return () => {
      resizeObserver.disconnect();
    };
  }, [containerRef]);

  return dimensions;
}

import { createRef, useEffect, useState } from "react";

function useInteractiveContainer() {
  const [isHover, setIsHover] = useState(false);
  const containerRef = createRef<HTMLDivElement>();
  const linkRef = createRef<HTMLAnchorElement>();

  function handleClick(event: any) {
    if (event.target.tagName === 'A') return;
    linkRef.current!.click();
  }

  function handleHover(event: any, newIsHover: boolean) {
    event.preventDefault();

    // Handle hovering over other links inside the item
    if (event.target.tagName === 'A' && event.target !== linkRef.current) {
      setIsHover(false);
      linkRef.current!.blur();
      event.target.focus();
      return
    }
    if (isHover === newIsHover) return;

    if (newIsHover) {
      document.body.style.cursor = 'pointer';
      linkRef.current!.focus({preventScroll: true});
    } else {
      document.body.style.cursor = 'unset';
      linkRef.current!.blur();
    }

    setIsHover(newIsHover);
  }

  useEffect(() => {
    if (isHover) {
      containerRef.current!.classList.add('active')
    } else {
      containerRef.current!.classList.remove('active')
    }
  }, [isHover, containerRef])

  return {
    containerRef,
    linkRef,
    handleClick,
    handleHover,
  }
}

export default useInteractiveContainer;

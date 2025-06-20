'use client';
import { useEffect } from 'react';
import { useModalStore } from '../store/modalStore';

export default function Overlay() {
  const isSearchOpen = useModalStore((state) => state.isSearchOpen);
  const isHamOpen = useModalStore((state) => state.isHamOpen);
  const isEnquireOpen = useModalStore((state) => state.isEnquireOpen);
  const closeAll = useModalStore((state) => state.closeAll);

  const isAnyOpen = isSearchOpen || isHamOpen || isEnquireOpen;

  useEffect(() => {
    if (isAnyOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => document.body.classList.remove('overflow-hidden');
  }, [isAnyOpen]);

  return (
    <div
      className={`overlay ${isAnyOpen ? 'is-open' : ''}`}
      onClick={closeAll}
    />
  );
}
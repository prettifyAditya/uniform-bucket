'use client';
import { useEffect } from 'react';
import { useModalStore } from '../store/modalStore';

export default function Overlay() {
  const isSearchOpen = useModalStore((state) => state.isSearchOpen);
  const isHamOpen = useModalStore((state) => state.isHamOpen);
  const isEnquireOpen = useModalStore((state) => state.isEnquireOpen);
  const isVideoOpen = useModalStore((state) => state.isVideoOpen);
  const isLoginOpen = useModalStore((state) => state.isLoginOpen);
  const isSignUpOpen = useModalStore((state) => state.isSignUpOpen);
  const closeAll = useModalStore((state) => state.closeAll);

  const isAnyOpen = isSearchOpen || isHamOpen || isEnquireOpen || isVideoOpen || isLoginOpen || isSignUpOpen;

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
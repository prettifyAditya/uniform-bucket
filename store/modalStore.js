import { create } from 'zustand';

export const useModalStore = create((set) => {
  const closeAll = () =>
    set({
      isSearchOpen: false,
      isHamOpen: false,
      isEnquireOpen: false,
      isVideoOpen: false,
      isLoginOpen: false,
      isSignUpOpen: false,
    });

  return {
    isSearchOpen: false,
    isHamOpen: false,
    isEnquireOpen: false,
    isVideoOpen: false,
    isLoginOpen: false,
    isSignUpOpen: false,

    openSearch: () => {
      closeAll();
      set({ isSearchOpen: true });
    },
    closeSearch: () => set({ isSearchOpen: false }),

    openHam: () => {
      closeAll();
      set({ isHamOpen: true });
    },
    closeHam: () => set({ isHamOpen: false }),

    openEnquire: () => {
      closeAll();
      set({ isEnquireOpen: true });
    },
    closeEnquire: () => set({ isEnquireOpen: false }),

    openVideo: () => {
      closeAll();
      set({ isVideoOpen: true });
    },
    closeVideo: () => set({ isVideoOpen: false }),

    openLogin: () => {
      closeAll();
      set({ isLoginOpen: true });
    },
    closeLogin: () => set({ isLoginOpen: false }),

    openSignUp: () => {
      closeAll();
      set({ isSignUpOpen: true });
    },
    closeSignUp: () => set({ isSignUpOpen: false }),

    closeAll,
  };
});

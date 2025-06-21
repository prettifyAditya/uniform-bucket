import { create } from 'zustand';

export const useModalStore = create((set) => ({
  isSearchOpen: false,
  openSearch: () => set({ isSearchOpen: true }),
  closeSearch: () => set({ isSearchOpen: false }),

  isHamOpen: false,
  openHam: () => set({ isHamOpen: true }),
  closeHam: () => set({ isHamOpen: false }),

  isEnquireOpen: false,
  openEnquire: () => set({ isEnquireOpen: true }),
  closeEnquire: () => set({ isEnquireOpen: false }),

  isVideoOpen: false,
  openVideo: () => set({ isVideoOpen: true }),
  closeVideo: () => set({ isVideoOpen: false }),

  isLoginOpen: false,
  openLogin: () => set({ isLoginOpen: true }),
  closeLogin: () => set({ isLoginOpen: false }),

  closeAll: () =>
    set({
      isSearchOpen: false,
      isHamOpen: false,
      isEnquireOpen: false,
      isVideoOpen: false,
      isLoginOpen: false,
    }),
}));
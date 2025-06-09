import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

export const useStore = create(
  devtools(
    persist((set) => ({
      loggedUser: null,
      setLoginUser: (user) => set({ loggedUser: user }),
      setLogoutUser: () => set({ loggedUser: null }),
    }))
  )
);

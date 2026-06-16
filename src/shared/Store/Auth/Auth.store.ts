import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { UsersEntity } from "../../Entities";

interface AuthState {
  user: UsersEntity | null;
  accessToken: string | null;
  refreshToken: string | null;

  setAuth: (
    user: UsersEntity,
    accessToken: string,
    refreshToken: string,
  ) => void;

  clearAuth: () => void;
}

export const AuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      refreshToken: null,

      setAuth: (user, accessToken, refreshToken) => {
        set({
          user,
          accessToken,
          refreshToken,
        });
      },

      clearAuth: () => {
        set({
          user: null,
          accessToken: null,
          refreshToken: null,
        });
      },
    }),
    {
      name: "auth-storage",

      storage: createJSONStorage(() => localStorage),
    },
  ),
);

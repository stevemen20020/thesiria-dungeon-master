import { useNavigate } from "react-router-dom";
import { AuthStore } from "../Store/Auth/Auth.store";
import { PlayableCharacterStore } from "../Store/PlayableCharacter/PlayableCharacter.store";

export const useAuthStore = () => {
  const navigate = useNavigate();

  const user = AuthStore((s) => s.user);
  const accessToken = AuthStore((s) => s.accessToken);
  const refreshToken = AuthStore((s) => s.refreshToken);

  const setAuth = AuthStore((s) => s.setAuth);
  const clearAuth = AuthStore((s) => s.clearAuth);

  const logOut = () => {
    AuthStore.getState().clearAuth();
    PlayableCharacterStore.getState().clearCharacterData();

    navigate("/login");
  };

  return {
    user,
    accessToken,
    refreshToken,
    setAuth,
    clearAuth,
    logOut,
  };
};

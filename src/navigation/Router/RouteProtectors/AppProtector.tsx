import { Outlet, Navigate } from "react-router-dom";
import { useAuthStore } from "../../../shared/Hooks/useAuthStore";


export const AppProtector = () => {
  const { accessToken } = useAuthStore()

  if(!accessToken) return <Navigate to={'/login'}/>
  else return <Outlet/>
}

import { Outlet, Navigate } from "react-router-dom";
import { useAuthStore } from "../../../shared/Hooks/useAuthStore";


export const AuthProtector = () => {
  const { accessToken } = useAuthStore()

  if(accessToken) return <Navigate to={'/'}/>
  else return <Outlet/>
}

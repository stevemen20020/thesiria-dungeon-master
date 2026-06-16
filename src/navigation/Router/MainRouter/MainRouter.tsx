import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AuthProtector } from "../RouteProtectors/AuthProtector";
import AuthPage from "../../Pages/AuthPage/AuthPage";
import NotFound from "../../Pages/NotFound/NotFound";
import { AppProtector } from "../RouteProtectors/AppProtector";
import AppRouter from "../AppRouter/AppRouter";

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AuthProtector/>}>
          <Route path="/login" element={<AuthPage />} />
        </Route>

        <Route element={<AppProtector/>}>
          <Route path="/*" element={<AppRouter />} />
        </Route>
        
        <Route path="/404" element={<NotFound />} />

        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;

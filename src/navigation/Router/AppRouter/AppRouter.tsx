import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import NotFound from "../../Pages/NotFound/NotFound";
import SideBarLayout from "../../../core/Layouts/SideBarLayout/SideBarLayout";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<SideBarLayout/>}>
          <Route path="/map" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;

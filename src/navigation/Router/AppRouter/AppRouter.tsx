import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import NotFound from "../../Pages/NotFound/NotFound";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/map" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

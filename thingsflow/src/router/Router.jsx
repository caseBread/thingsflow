import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasicLayout from "../components/BasicLayout";
import Issue from "../pages/Issue";
import Main from "../pages/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/issue" element={<Issue />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;

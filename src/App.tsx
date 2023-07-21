import MainPage from "./pages/MainPage";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import CreatePage from "./pages/CreatePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

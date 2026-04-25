import { Routes, Route } from "react-router-dom";
import Blogs from "./pages/blogs/Blogs";
import Home from "./pages/home/Home";
import Header from "./pages/components/header/Header";

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </>
  );
}

export default App;

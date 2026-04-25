import { Routes, Route } from "react-router-dom";
import Blogs from "./pages/blogs/Blogs";
import Home from "./pages/home/Home";
import Header from "./pages/components/header/Header";
import Footer from "./pages/components/footer/Footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

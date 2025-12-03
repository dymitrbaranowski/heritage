import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "@/components/layout/SharedLayout";
import { Home } from "@/pages/home/Home";
import { About } from "@/pages/about/About";
import { Gallery } from "@/pages/gallery/Gallery";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
      </Route>
    </Routes>
  );
}

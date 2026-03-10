import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Biography from "./pages/Biography";
import Books from "./pages/Books";
import Artworks from "./pages/Artworks";

export default function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/artworks" replace />} />
        <Route path="artworks" element={<Artworks />} />
        <Route path="books" element={<Books />} />
        <Route path="biography" element={<Biography />} />
      </Route>
    </Routes>
  );
}
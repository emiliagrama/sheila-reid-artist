import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer"
import ScrollToTop from "./ScrollToTop";
import BackToTopButton from "./BackToTopButton";

export default function Layout() {
  return (
    <div className="siteShell">
      <ScrollToTop />
      <Navbar />
      <main className="siteMain">
        <Outlet />
      </main>
       <Footer />
       <BackToTopButton />
    </div>
  );
}
import Navbar from "@/components/nav";
import { Outlet, Route, Routes } from "react-router-dom";
import { Footer, FooterMobile } from "./components/footer";
import { MainPage } from "./pages";
import AboutPage from "./pages/about";
import OfficePage from "./pages/office";
import SpacesPage from "./pages/spaces";
import ContactUsPage from "./pages/contact-us";
import PricingPage from "./pages/pricing";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="about/*" element={<AboutPage />} />
        <Route path="pricing/*" element={<PricingPage />} />
        <Route path="offices/*" element={<OfficePage />} />
        <Route path="spaces/*" element={<SpacesPage />} />
        <Route path="contact-us/*" element={<ContactUsPage />} />
      </Routes>
      <Footer />
      <FooterMobile />
    </>
  );
}

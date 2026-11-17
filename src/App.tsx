import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useActiveSection, useTheme } from "./hooks";
import { navItems } from "./data";
import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import Sidebar from "./components/Sidebar";
import FloatingNav from "./components/FloatingNav";
import Footer from "./components/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Resume from "./components/sections/Resume";
import Portfolio from "./components/sections/Portfolio";
import Services from "./components/sections/Services";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import BlogSection from "./components/sections/Blog";
import BlogPage from "./Blog-pages/Blogpage";
import BlogDetail from "./Blog-pages/BlogDetail";

const sectionIds = navItems.map((n) => n.id);

export default function App() {
  const { theme, toggle } = useTheme();
  const active = useActiveSection(sectionIds);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="bg-app text-main">
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      <CustomCursor />
      <ScrollProgress />

      <Sidebar active={active} theme={theme} toggleTheme={toggle} />
      <FloatingNav active={active} />

      <BrowserRouter>
        <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="lg:ml-72"
      >
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Skills />
                  <Resume />
                  <Portfolio />
                  <Services />
                  <BlogSection />
                  <Testimonials />
                  <Contact />
                  <Footer />
                </>
              }
            />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
          </Routes>
      </motion.main>
      </BrowserRouter>
    </div>
  );
}

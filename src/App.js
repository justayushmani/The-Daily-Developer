
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Sidebar from './components/Sidebar';
import ClassifiedsSection from './components/ClassifiedsSection';
import GitHubHeatmapSection from './components/GitHubHeatmapSection';
import LocalHeadlines from './components/LocalHeadlines';
import LettersAndWanted from './components/LettersAndWanted';
import Footer from './components/Footer';
import Capture from './components/capture';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-black origin-left z-50"
        style={{ scaleX }}
      />
      <div className="bg-white text-black font-serif min-h-screen">
        <Header />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Main content */}
            <div className="flex-1 min-w-0">
              <Routes>
                <Route
                  path="/"
                  element={
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: 0.3
                          }
                        }
                      }}
                    >
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 50 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                      >
                        <HeroSection />
                      </motion.div>
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 50 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                      >
                        <ClassifiedsSection />
                      </motion.div>
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 50 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                      >
                        <GitHubHeatmapSection username="justayushmani" />
                      </motion.div>
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 50 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                      >
                        <LocalHeadlines />
                      </motion.div>
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 50 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                      >
                        <Capture />
                      </motion.div>
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 50 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                      >
                        <LettersAndWanted />
                      </motion.div>
                    </motion.div>
                  }
                />
              </Routes>
            </div>
            {/* Right: Sidebar */}
            <aside className="w-full lg:w-72 shrink-0 lg:sticky lg:top-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Sidebar />
              </motion.div>
            </aside>
          </div>
        </main>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Footer />
        </motion.div>
      </div>
    </Router>
  );
}
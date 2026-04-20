
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

export default function App() {
  return (
    <Router>
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
                    <>
                      <HeroSection />
                      <ClassifiedsSection />
                      <GitHubHeatmapSection username="justayushmani" />
                      <LocalHeadlines />
                      <Capture />
                      <LettersAndWanted />
                    </>
                  }
                />
              </Routes>
            </div>
            {/* Right: Sidebar */}
            <aside className="w-full lg:w-72 shrink-0 lg:sticky lg:top-6">
              <Sidebar />
            </aside>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
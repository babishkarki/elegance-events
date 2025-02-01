import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

const Home = lazy(() => import('./components/Home/Home'));
const NotFound = lazy(() => import('./components/NotFound/NotFound'));
function App() {
  return (
    <Router>
      <Navbar />
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </Router>
  );
}

export default App;
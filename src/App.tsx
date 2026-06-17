import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

// Placeholder Pages
const Home = React.lazy(() => import('./pages/Home'));
const Product = React.lazy(() => import('./pages/Product'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Insights = React.lazy(() => import('./pages/Insights'));
const Waitlist = React.lazy(() => import('./pages/Waitlist'));

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <React.Suspense fallback={<div className="container section">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/waitlist" element={<Waitlist />} />
              <Route path="*" element={<div className="container section"><h2>404 - Not Found</h2></div>} />
            </Routes>
          </React.Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

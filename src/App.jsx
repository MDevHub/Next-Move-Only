import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import PreNavBar from './Components/Layout/PreNavBar';
import NavBar from './Components/Layout/NavBar';
import Footer from './Components/Layout/Footer';
import Home from './Components/Pages/Home';


function App() {
  return (
    <Router>
		  <div className="flex flex-col min-h-screen">
        <PreNavBar />
        <NavBar />
          
          <main className="flex-grow mt-[]"> {/* Add top margin to offset fixed navbar */}
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>

          </main>

        <Footer />
      </div>
    </Router>
  )
}


export default App

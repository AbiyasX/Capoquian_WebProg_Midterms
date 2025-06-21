import './App.css';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { useState } from 'react';

// Page components
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Article from './pages/Article';
import Login from './pages/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const products = [
    {
      id: "1",
      product_Name: "White High Top Shoes",
      price: "P5,999",
      body: "Created for the hardwood but taken to the streets, the '80s b-ball icon returns with crisp leather and retro colours. The classic hoops design channels '80s vintage back onto the streets while the padded, high-top collar adds an old-school look rooted in comfort.",
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5b0981ff-45f8-40c3-9372-32430a62aaea/W+NIKE+DUNK+HIGH.png"
    },
    {
      id: "2",
      product_Name: "Air Jordan 1 High OG 'Rare Air'",
      price: "P9,895",
      body: "The Air Jordan 1 Retro High remakes the classic sneaker, giving you a fresh look with a familiar feel. Premium materials with new colours and textures give modern expression to an all-time favourite.",
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/476771a5-d33d-4a13-a16b-804b1d650e67/AIR+JORDAN+1+RETRO+HIGH+OG.png"

    },
    {
      id: "3",
      product_Name: "Nike Zoom Mercurial Superfly 9 Elite 'Marcus Rashford'",
      price: "₱16,695",
      body: "Instantly tilt the pitch in Marcus Rashford's version of the Superfly 9 Elite. We added a Zoom Air unit, made specifically for football, to help you feel the speed, making the critical plays with velocity and pace. And Marcus inspired the bold design with a message of empowerment. If I were ever to design a boot, it had to mean something, he says. With tonal, gradient colours and graphics, this version reflects Marcus's desire to help you discover and amplify your inner voice of self-confidence.",
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8e644f9b-4db8-4d24-91d3-1edf45ae1e3c/ZOOM+SUPERFLY+9+ELITE+MR+FG.png"

    }
  ];

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg'/>
          {isLoggedIn ? (
            <>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/contact?name=Zahir">Contact</NavLink>
              <button onClick={() => setIsLoggedIn(false)} className="logout-button">Logout</button>
            </>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </nav>

        <Routes>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/" element={isLoggedIn ? <Home products={products} /> : <Navigate to="/login" />} />
          <Route path="/about" element={isLoggedIn ? <About /> : <Navigate to="/login" />} />
          <Route path="/contact" element={isLoggedIn ? <Contact /> : <Navigate to="/login" />} />
          <Route path="/products/:urlId" element={isLoggedIn ? <Article products={products} /> : <Navigate to="/login" />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

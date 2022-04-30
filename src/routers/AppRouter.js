import '../App.css';
import '../styles/styles.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavs from '../pages/PageFavs';
import PageSingleMovie from '../pages/PageSingleMovie';
import Header from '../components/Header';
import Footer from '../components/Footer';

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />New
         <main>
           <Routes>
            <Route path='/' element={<PageHome />} />
            <Route path='/about' element={<PageAbout />} />
            <Route path='/favs' element={<PageFavs />} />
            <Route path='/movie' element={<PageSingleMovie />} />
           </Routes>
         </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;

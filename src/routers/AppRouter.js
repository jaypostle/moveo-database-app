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
    <BrowserRouter  basename="/moveo-database-app">
      <div className="wrapper">
        <Header />
         <main>
           <Routes>
             {/* default sort is popular */}
              <Route path='/' element={<PageHome sort="popular"/>}/>
              {/* pass props for sort */}
              <Route path='/sort/popular' element={<PageHome sort="popular" />}/>
              <Route path='/sort/top-rated' element={<PageHome sort="top_rated"/>}/>
              <Route path='/sort/now-playing' element={<PageHome sort="now_playing" />}/>
              <Route path='/sort/upcoming' element={<PageHome  sort="upcoming"/>}/>
              <Route path='/movie/:id' element={<PageSingleMovie />}/>
              <Route path='/about' element={<PageAbout />} />
              <Route path='/favs' element={<PageFavs />} />
           </Routes>
         </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Favourites from './pages/favourites/Favourites';
import Playlists from './pages/playlists/Playlists';
import Search from './pages/search/Search';
import Sidebar from './components/sidebar/Sidebar'
import Banner from './components/banner/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
  <div className='app'>
       <BrowserRouter>
         <Sidebar></Sidebar>
         <div className='appContent'>
           <Banner></Banner>
           <Routes>
           {
            ["/", "/:playlistIndex"].map((path, index) => {
              return( <Route key={index} path={path} element={<Home></Home>}></Route>);
            })
           }
           <Route path='search' element={<Search></Search>}></Route>
           <Route path='favourites' element={<Favourites></Favourites>}></Route>
           <Route path='playlists' element={<Playlists></Playlists>}></Route>
          </Routes>
          </div>
       </BrowserRouter>
  </div>
  );
}

export default App;

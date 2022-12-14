import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Favourites } from './pages/Favourites';
import { Navigation } from './components/Navigation';
const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favourites' element={<Favourites />} />
      </Routes></>
  )
}

export default App

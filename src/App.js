
import './App.css';
import { Search } from './pages/Search';
import { Route, Routes } from 'react-router-dom'
import { Layout } from './Layout';
import { Index } from './pages/Index'
import { Library } from './pages/Library';
import { Bookshelf } from './pages/Bookshelf';
import { GlobalProvider } from './context/Globalstate';
function App() {
  return (
    <GlobalProvider>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Index/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/library' element={<Library/>} />
        <Route path='/bookshelf' element={<Bookshelf/>} />
      </Route>
    </Routes>
    </GlobalProvider>
  );
}

export default App;

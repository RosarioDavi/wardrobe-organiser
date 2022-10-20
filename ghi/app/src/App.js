import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import ShoeList from './ShoeList';
import AddShoeForm from './AddShoeForm';
import Nav from './Nav';
import HatsList from './HatsList';
import CreateHatForm from './AddHatForm';


function App() {

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="home">
            <Route index element={<MainPage />} />
          </Route>
          <Route>
            <Route path="shoes" element={<ShoeList />} />
          </Route>
          <Route path="shoes">
            <Route path="new" element={<AddShoeForm />} />
          </Route>
          <Route>
            <Route path="hats" element={<HatsList/>} />
          </Route>
          <Route path = "hats">
            <Route path="new" element={<CreateHatForm/>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

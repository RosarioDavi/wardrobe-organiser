import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import ShoeList from './ShoeList';
import AddShoeForm from './AddShoeForm';
import Nav from './Nav';

function App(props) {
  if (props.shoes === undefined) {
    return null;
  }
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="home">
            <Route index element={<MainPage />} />
          </Route>
          <Route>
            <Route path="shoes" element={<ShoeList shoes={props.shoes} />} />
          </Route>
          <Route path="shoes">
            <Route path="new" element={<AddShoeForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

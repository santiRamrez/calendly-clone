import './App.css';
/*The pages of the SPA*/
import Company from './pages/company'
import Person from './pages/person'
import Home from './pages/home'
import NotFound from './pages/404'

/* Components */
import  CustomUser  from './components/CustomUser';

/*React Router DOM methods*/
import { Routes, Route,  Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/user" element={<Person/>}>
            <Route path="custom-user" element={<CustomUser/>} />
          </Route>
          <Route path="/company" element={<Company/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

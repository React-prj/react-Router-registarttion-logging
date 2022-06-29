import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginComponent from './components/Login.js'
import RegisterComponent from './components/Registration.js'
import Home from './components//Home.js'
import Account from './components/Account'
import Protected from './components/Protected';


import HomeReceipe from './Pages/recipe-app/Home/Home.js';
import Create from './Pages/recipe-app/create/Create.js'
import Receipe from './Pages/recipe-app/Receipe/Receipe.js';
import Search from './Pages/recipe-app/Search/Search.js'




import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/NavBar';
import { AuthContextProvider } from './components/Context/AuthContext';


function App() {
  return (
    <div>
      <AuthContextProvider >
        <Router>
          {/* rendering the navbar outside the routing context. 
    The Router isn't aware of what routes the links are attempting to 
    link to that it is managing.Move it inside the routing context so 
    the Router is aware and can manage routing correctly*/}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route
              path='/account'
              element={
                <Protected>
                  <Account />
                </Protected>
              }
            />

            {/* receipe routes  */}
            <Route path="/account/home" element={<Protected><HomeReceipe /></Protected>} />
            <Route path="/account/create" element={<Protected><Create /></Protected>} />
            <Route path="/account/search" element={<Protected><Search /></Protected>} />
            {/*  <Switch> will start looking for a matching e.gonly match /about and not /:user */}
            {/* this route param can be extracted and should match  */}
            <Route path="/recipes/:id" element={<Protected><Receipe /></Protected>}>
            </Route>
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;


import Home from './pages';
import AnnualReport from './pages/annual';
import About from './pages/about';
import Blogs from './pages/blogs';
import React from "react";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import Navbar from './components/Navbar';


function App() {

  let routes = useRoutes([                               //console shows how to implement routes
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/annual', element: <AnnualReport /> },
    { path: "/Blogs", element: <Blogs /> },
    // ...
  ]);
  return routes;
}

const AppWrapper = () => {
  return (
    <Router>
      <Navbar />
      <App />
    </Router>
  );
};

export default AppWrapper;
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import PostPage from './pages/PostPage';
import SubmittedForm from './pages/SubmittedForm';

export default function App(){
  return(
    <Router>
      <nav className="navbar navbar-expand-sm bg-light">
        <ul className="navbar-nav">
          <li className="nav-item ms-3">
            <Link to="/"> home </Link>
          </li>
          <li className="nav-item ms-3">
            <Link to="/about"> About </Link>
          </li>
          <li className="nav-item ms-3">
            <Link to="/contact"> Contact Us </Link>
          </li>
          <li className="nav-item ms-3">
            <Link to="/posts"> Posts </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/form-submitted" element={<SubmittedForm/>}/>
        <Route path="/posts" element={<PostPage/>}/>
      </Routes>
    </Router>
  )
}

// anything in routes changes
// anything not in routes stays on the page
// first create 'a' like anchor, link using url route, for the navbar item
// generally same path in route unless dynamic link

// In React Router v6, the element prop is not automatically passed to the component as props. Instead, it is used to define what should be rendered directly, without the use of the children prop or nested components. It is an alternative to the children prop used in previous versions of React Router.
// when the URL matches "/form-submitted", React Router will render the SubmittedForm component directly.





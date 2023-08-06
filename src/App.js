import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Posts from "./components/Posts";
import LoginForm from "./components/LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./forms.css";
import SignupForm from "./components/SignupForm";
import { Link, useLocation } from "react-router-dom";
import backgroundImage from './assets/pngwing1.png'; // Replace with the actual path to your image

function App() {
  const location = useLocation();

  return (
    <div className="App" >
      {location.pathname !== "/" ? (
        <div className="back-button">
          <Link to="/" className="btn btn-outline-secondary">
            Back
          </Link>
        </div>
      ) : null}

    <header className="App-header" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center',   }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/form" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container" >

      <div className="jumbotron text-center">
        <h1 className="display-4">Welcome to Our Website</h1>
        <p className="lead">Your go-to platform for all things amazing!</p>
        <hr className="my-4" />
        <p>Explore and engage with our awesome content.</p>
        <div className="btn-group" role="group" aria-label="Call to Action">
          <Link to="/login">
            <button className="btn btn-primary btn-lg">Login</button>
          </Link>
          <Link to="/signup">
            <button className="btn btn-success btn-lg">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

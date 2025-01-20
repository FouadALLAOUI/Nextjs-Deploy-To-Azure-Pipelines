import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Home Page</h1>
      <nav>
        <ul>
          <li><Link to="/app-one">App One</Link></li>
          <li><Link to="/app-two">App Two</Link></li>
          <li><Link to="/app-three">App Three</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home; 
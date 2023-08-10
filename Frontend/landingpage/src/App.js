// First app.js
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Landing() {
  return <h1>Landing Page</h1>;
}

function Home() {
  return <h1>Home Page</h1>;
}

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <a href="http://localhost:4000">Go to Second App</a>
      </div>
    </Router>
  );
}

export default App;

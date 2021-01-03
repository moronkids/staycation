import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import landingPage from "pages/LandingPages"
const App = () => {
  return (
    <div>
      <Router>
      <Route path="/" component={landingPage}></Route>
      </Router>
    </div>
  );
};

export default App;
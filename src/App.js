import "./App.css";
import React, { Component } from "react";
// import NavHeader from './components/NavHeader.js/NavHeader';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import News from "./components/News/News";

class App extends Component {
  pageSize = 11;
  render() {
    return (
      <div>
        {/* <NavHeader/> */}
        {/* <News pageSize={this.pageSize} country='us' category='general'/> */}
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="general"
                  pageSize={this.pageSize}
                  country="us"
                  category="general"
                />
              }
            />
            <Route
              path="business"
              element={
                <News
                  key="business"
                  pageSize={this.pageSize}
                  country="us"
                  category="bussiness"
                />
              }
            />
            <Route
              path="entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={this.pageSize}
                  country="us"
                  category="entertainment"
                />
              }
            />
            <Route
              path="general"
              element={
                <News
                  key="general"
                  pageSize={this.pageSize}
                  country="us"
                  category="health"
                />
              }
            />
            <Route
              path="health"
              element={
                <News
                  key="health"
                  pageSize={this.pageSize}
                  country="us"
                  category="general"
                />
              }
            />
            <Route
              path="science"
              element={
                <News
                  key="science"
                  pageSize={this.pageSize}
                  country="us"
                  category="science"
                />
              }
            />
            <Route
              path="sports"
              element={
                <News
                  key="sports"
                  pageSize={this.pageSize}
                  country="us"
                  category="sports"
                />
              }
            />
            <Route
              path="technology"
              element={
                <News
                  key="technology"
                  pageSize={this.pageSize}
                  country="us"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;

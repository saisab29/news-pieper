import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,


} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {


  render() {
    return (
      <div>
        <Router>
          <Navbar />




          <Routes>
            <Route exact path="/" element={<News pageSize={9} apiKey={this.apiKey} key="general" country="in" category="general" />} />
            <Route exact path="/newsapp" element={<News pageSize={9} apiKey={this.apiKey} key="general" country="in" category="general" />} />
            <Route exact path="/sports" element={<News pageSize={9} apiKey={this.apiKey} key="sports" country="in" category="sports" />} />
            <Route exact path="/science" element={<News pageSize={9} apiKey={this.apiKey} key="science" country="in" category="science" />} />
            <Route exact path="/entertainment" element={<News pageSize={9} apiKey={this.apiKey} key="entertainment" country="in" category="entertainment" />} />
            <Route exact path="/business" element={<News pageSize={9} apiKey={this.apiKey} key="business" country="in" category="business" />} />
            <Route exact path="/technology" element={<News pageSize={9} apiKey={this.apiKey} key="technology" country="in" category="technology" />} />
            <Route exact path="/health" element={<News pageSize={9} apiKey={this.apiKey} key="health" country="in" category="health" />} />
          </Routes>
        </Router>



      </div>
    )
  }
}



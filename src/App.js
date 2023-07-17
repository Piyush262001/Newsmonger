import './App.css';
import React, { Component } from 'react';
import News from './Components/News';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: 'in'
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(event) {
    this.setState({ selectedValue: event.target.value });
  }
  render() {
    return (
<BrowserRouter>
       <div>
<Navbar onSelect={this.handleSelect}/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/general' element={<News key="general" pageSize={6} country={this.state.selectedValue} category={'general'}/>}/>
          <Route exact path='/business' element={<News key="business" pageSize={6} country={this.state.selectedValue} category={'business'}/>}/>
          <Route exact path='/entertainment' element={<News key="entertainment" pageSize={6} country={this.state.selectedValue} category={'entertainment'}/>}/>
          <Route path='/sports' element={<News key="sports" pageSize={6} country={this.state.selectedValue} category={'sports'}/>}/>
          <Route path='/health' element={<News key="health" pageSize={6} country={this.state.selectedValue} category={'health'}/>}/>
          <Route path='/science' element={<News key="science" pageSize={6} country={this.state.selectedValue} category={'science'}/>}/>
          <Route path='/technology' element={<News key="technology" pageSize={6} country={this.state.selectedValue} category={'technology'}/>}/>   
        
        </Routes>
      </div>
</BrowserRouter>
      
    )
  }
}


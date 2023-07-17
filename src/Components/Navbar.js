//import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }
  
  handleSelectChange(event) {
    // Call the onSelect function passed as a prop with the selected value
    this.props.onSelect(event);
    //const selectedValue = event.target.value;
    //const queryParams = new URLSearchParams(this.props.location.search);
    //queryParams.set('selectedValue', selectedValue);
    //this.props.history.push({
    //  search: queryParams.toString()
    //});
  }
  render() {
    
    return (
      <nav className="navbar sticky fixed-top navbar-expand-lg navbar-dark bg-dark" id='navbar'>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NewsMonger</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/*<li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
    </li>*/}
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link></li>
                <li className="nav-item">  
                <Link className="nav-link" to="/general">General</Link></li>
                <li className="nav-item">
                <Link className="nav-link" to="/business">Business</Link></li>
                <li className="nav-item">
                <Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                <li className="nav-item">
                <Link className="nav-link" to="/health">Health</Link></li>
                <li className="nav-item">
                <Link className="nav-link" to="/science">Science</Link></li>
                <li className="nav-item">
                <Link className="nav-link" to="/sports">Sports</Link></li>
                <li className="nav-item">
                <Link className="nav-link" to="/technology">Technology</Link>
              </li>
            </ul>
            <div className="btn-group">
          <Link to="/"><select className="select"value={this.props.selectedValue} onChange={this.handleSelectChange}>
          <option value="in">India</option>
          <option value="us">USA</option>
          <option value="cn">China</option>
          <option value="value3">Value 3</option>
        </select></Link>
</div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
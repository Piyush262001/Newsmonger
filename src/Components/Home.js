
import React from 'react';
import {Link} from 'react-router-dom'
import './Home.css';

function Home() {
  return (
    <div className='home'>

      <div className="home-image">
        
        <h1 className="home-title">NewsMonger</h1>
        <h2 className="home-subtitle">Your one stop news destination</h2>
      </div>
      <div className="home-cards-container">
        <Link to="/general"><div className="home-card">
          <img src="https://th.bing.com/th/id/OIG.WzFdqXBWDXNddyTyWt8V?pid=ImgGn" alt="Img not loaded" width="300px" height="200px" />
          <h3>GENERAL</h3>
        </div></Link>
        <Link to="/general"><div className="home-card">
        <img src="https://th.bing.com/th/id/OIG.vW338GQ0.9ZRp3zUEts1?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Img not loaded" width="300px" height="200px" />
        <h3>BUSINESS</h3>
        </div></Link>
        <Link to="/general"><div className="home-card">
        <img src="https://th.bing.com/th/id/OIG.AgKiSyPiy.KNWMZfoMYQ?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Img not loaded" width="300px" height="200px" />
        <h3>ENTERTAINMENT</h3>
        </div></Link>
        <Link to="/general"><div className="home-card">
        <img src="https://th.bing.com/th/id/OIG..CKgisQz5exOH9SYEX89?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Img not loaded" width="300px" height="200px" />
        <h3>HEALTH</h3>
        </div></Link>
        <Link to="/general"><div className="home-card">
        <img src="https://th.bing.com/th/id/OIG.8wvhMDUtIvHmqsyoXEz4?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Img not loaded" width="300px" height="200px" />
        <h3>SCIENCE</h3>
        </div></Link>
        <Link to="/general"><div className="home-card">
        <img src="https://th.bing.com/th/id/OIG.ZH0VvNo4EVdFj13iLVwN?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Img not loaded" width="300px" height="200px" />
        <h3>SPORTS</h3>
        </div></Link>
        <Link to="/general"><div className="home-card">
        <img src="https://th.bing.com/th/id/OIG.zLNYvOAHllTQ6inndrHK?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Img not loaded" width="300px" height="200px" />
        <h3>TECHNOLOGY</h3>
        </div></Link>
      </div>
      <footer></footer>
    </div>
  );
}

export default Home;




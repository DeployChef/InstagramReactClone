import React from 'react';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="app">
      
      <div className="app__header">
        <img alt="InstagramClone"
         class="app__headerImage" 
         src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"/>
      </div>

      <h1>Hello World 🚀🚀🚀</h1>

      <Post imageUrl="https://lh3.googleusercontent.com/proxy/IXUw177pmDkIgfXXjZRy1LCBIntOruHEc5H1xm3wXZGcgKzWOf1F5U4sgNBKDwm0phYpQpq6757tCoqHB4Vl0ulXMZd3fI2NeS930V7KsBl6jXk"
            username="UpNova"
            caption="WoW Awesome"/>
      <Post imageUrl="https://img-a.udemycdn.com/course/240x135/2180720_aa12_2.jpg"
            username="DeployChef"
            caption="I did an Instagram clone on React.js"/>
    </div>
  );
}

export default App;

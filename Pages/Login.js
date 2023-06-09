import React from 'react'
import './App.css';
import logo1 from "./logo1.png";

const Login=()=>{
    return(
        <div>
            <div>
                <img src={logo1} alt="Logo 2 Image" height="100"/>
            </div> 
            <form action="">
                <div> 
                    <input type="text" name="name" id="name" placeholder="NAME"/> 
                </div>
                <br></br>
                <div> 
                    <input type="text" name="email" id="email" placeholder="EMAIL"/> 
                </div>
                <br></br> 
                <div> 
                    <input type="text" name="phonenumber" id="phonenumber" placeholder="PHONE NUMBER"/> 
                </div>
                <br></br>
                <div> 
                    <input type="text" name="passw" id="passw" placeholder="PASSWORD"/> 
                </div>  
                <div>
                    <input type="checkbox" name="TandC" id="TandC" value="yes"/>
                    <p>By ticking this checkbox, you hereby understand and agree with Hyder Properties T's & C's and Privacy Policy</p>
                </div>
                <button type="submit" class="btn">Create Account</button>
                <div>
                    <p>ALREADY HAVE AN ACCOUNT? </p>
                    <a href=''>LOGIN</a>
                </div>
            </form>
        </div>
    )
}
export default Login

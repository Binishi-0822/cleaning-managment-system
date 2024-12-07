import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { registerUser } from "../services/authApi";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate()


  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Correct Pass')

    try{
        if(username != null && password != null && confirmPassword != null){
            
            if(password === confirmPassword){
                console.log('Correct Pass')
                const data = {
                    username: username,
                    password: password,
                    role: "user"
                }
                const response = await registerUser(data);
                if(response.status === 201){
                    navigate("/login")
                }
                else{
                    console.log("Error crating user")
                }
            }else{
                console.log("Incorrect Password");
            }
        }
    }catch(error){
        console.log(error)
    }
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center justify-content bg-gradient-to-b from-teal-600 from-50% to-gray-100 to-50% space-y-6">
      <Box className="flex flex-col items-center justify-center w-2/3 !h-4/6">
            <Grid container size={6}>
                <Grid size={12} className="flex flex-col pb-4 justify-center items-center text-center">
                    <h2 className="text-3xl font-bold text-white">Cleaning Management System</h2>
                </Grid>
    
                <Grid size={12} className="border shadow p-6 w-80 bg-white ">
                    <Grid className="flex flex-col pb-4 justify-center items-center"><h2 className="text-2xl font-bold  text-center">SIGN UP</h2></Grid>
                    <form onSubmit={handleSubmit}>
                        <Grid size={12} className="mb-4">
                            <label htmlFor="username" className="block text-gray-700">
                                Username
                            </label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border"
                                placeholder="Enter Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </Grid>

                        <Grid  size={12} className="mb-4">
                            <label htmlFor="password" className="block text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                className="w-full px-3 py-2 border"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Grid>

                        <Grid  size={12} className="mb-4">
                            <label htmlFor="password" className="block text-gray-700">
                            Confirm Password
                            </label>
                            <input
                                type="password"
                                className="w-full px-3 py-2 border"
                                placeholder="Enter Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </Grid>

                        <Grid size={12} className="mb-4 flex items-center justify-between">
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="form-checkbox" />
                                <span className="ml-2 text-gray-700">Remember me</span>
                            </label>
                            <a href="#" className="text-teal-600">Forgot Password?</a>
                        </Grid>
                        <Grid size={12} className="pb-4 pt-4"><span>Already Have an Account</span><Link to='/login'><span className=" text-teal-600"> SignIn</span></Link></Grid>

                        <Grid size={12} className="mb-4">
                            <button type="submit" className="w-full bg-teal-600 text-white py-2" onClick={handleSubmit}>
                                Sign Up
                            </button>
                        </Grid>
                    </form>
                </Grid>

          </Grid>     
      </Box>
    </div>
  );
};

export default SignUp;

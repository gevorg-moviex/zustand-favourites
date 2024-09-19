import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleGetInfo(e){
        e.preventDefault()
        const info = JSON.parse(localStorage.getItem("info") || [])

        const user = info.filter(user => user.userEmail === email && user.userPassword === password )
        
        console.log(user);
        
        if (user.length > 0){
            navigate("/mardatar")
        }else{
            alert("sxal");
        }
    }
    
    return (
        <div className="p-4 flex justify-center ">
            <form onSubmit={handleGetInfo}>
                <div className="flex flex-col justify-center items-center gap-5 border border-black border-solid p-3 w-80">
                    <h1 className="text-2xl font-bold">Login</h1>
                    <div className="flex flex-col gap-3 w-4/5">
                        <label htmlFor="email">Email</label>
                        <input autoComplete="current-password" type="text" id="email" placeholder="Enter your email..." onChange={e => setEmail(e.target.value)} className="border border-solid border-black h-8 px-2" />
                    </div>
                    <div className="flex flex-col gap-3 w-4/5">
                        <label htmlFor="password">Password</label>
                        <input autoComplete="current-password" type="password" id="password" placeholder="Enter your password..." onChange={e => setPassword(e.target.value)} className="border border-solid border-black h-8 px-2" />
                    </div>
                    <button type="submit" className="w-28 bg-slate-600 text-white py-2">Log in</button>
                    <p className="text-sm">Don`t have an account? <b className="cursor-pointer hover:border-b-2 border-blue-500 pb-[2px]"><Link to="/register">Register</Link></b></p>
                </div>
            </form>
        </div>
    );
}
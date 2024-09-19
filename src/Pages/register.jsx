import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const obj = {
        userName: name,
        userSurname: surname,
        userEmail: email,
        userPassword: password,
    };

    const navigate = useNavigate();
    function saveInfo() {
        const infoArray = JSON.parse(localStorage.getItem("info")) || [];
    
        if (name && surname && email && password) {
            const newUser = {
                userName: name,
                userSurname: surname,
                userEmail: email,
                userPassword: password,
            };
    
            infoArray.push(newUser);
    
            localStorage.setItem("info", JSON.stringify(infoArray));
        } else {
            console.log("Please fill all fields.");
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        saveInfo(); 
        navigate('/login');
    };

    return (
        <div className="p-4 flex justify-center ">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col justify-center items-center gap-5 border border-black border-solid p-3 w-80">
                    <h1 className="text-2xl font-bold">Register</h1>
                    <div className="flex flex-col gap-3 w-4/5">
                        <label htmlFor="name">Name</label>
                        <input autoComplete="current-password" type="text" id="name" placeholder="Enter your name..." onChange={e => setName(e.target.value)} className="border border-solid border-black h-8 px-2"/>
                    </div>
                    <div className="flex flex-col gap-3 w-4/5">
                        <label htmlFor="surname">Surname</label>
                        <input autoComplete="current-password" type="text" id="surname" placeholder="Enter your surname..." onChange={e => setSurname(e.target.value)} className="border border-solid border-black h-8 px-2" />
                    </div>
                    <div className="flex flex-col gap-3 w-4/5">
                        <label htmlFor="email">Email</label>
                        <input autoComplete="current-password" type="text" id="email" placeholder="Enter your email..." onChange={e => setEmail(e.target.value)} className="border border-solid border-black h-8 px-2" />
                    </div>
                    <div className="flex flex-col gap-3 w-4/5">
                        <label htmlFor="password">Password</label>
                        <input autoComplete="current-password" type="password" id="password" placeholder="Enter your password..." onChange={e => setPassword(e.target.value)} className="border border-solid border-black h-8 px-2" />
                    </div>
                    <button type="submit" className="w-28 bg-slate-600 text-white py-2">Register</button>
                    <p className="text-sm">Already have an account? <b className="cursor-pointer hover:border-b-2 border-blue-500 pb-[2px]"><Link to="/login">Log in</Link></b></p>
                </div>
            </form>
        </div>
    );
}
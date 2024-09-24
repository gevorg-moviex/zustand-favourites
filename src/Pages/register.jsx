import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

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
                isLogined: true
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
        const info = JSON.parse(localStorage.getItem("info") || [])
        navigate('/login');
    };

    return (
        <div className="p-4 flex justify-center items-center h-[90vh]">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col justify-center items-center gap-5 p-3 w-80 shadow-custom-2-shadow bg-[#213243] text-white rounded-xl">
                    <h1 className="text-2xl font-bold">Register</h1>
                    <div className="flex flex-col gap-3 w-4/5">
                        <label htmlFor="name">Name</label>
                        <input autoComplete="current-password" type="text" id="name" placeholder="Enter your name..." onChange={e => setName(e.target.value)} className="bg-transparent rounded-full outline-none shadow-inputsShadow h-8 px-4 py-[20px]"/>
                    </div>
                    <div className="flex flex-col gap-3 w-4/5">
                        <label htmlFor="surname">Surname</label>
                        <input autoComplete="current-password" type="text" id="surname" placeholder="Enter your surname..." onChange={e => setSurname(e.target.value)} className="bg-transparent rounded-full outline-none shadow-inputsShadow h-8 px-4 py-[20px]" />
                    </div>
                    <div className="flex flex-col gap-3 w-4/5">
                        <label htmlFor="email">Email</label>
                        <input autoComplete="current-password" type="email" id="email" placeholder="Enter your email..." onChange={e => setEmail(e.target.value)} className="bg-transparent rounded-full outline-none shadow-inputsShadow h-8 px-4 py-[20px]" />
                    </div>
                    <div className="flex flex-col gap-3 w-4/5 relative">
                        <label htmlFor="password">Password</label>
                        <input autoComplete="current-password" type={`${show ? "text" : "password"}`} id="password" placeholder="Enter your password..." onChange={e => setPassword(e.target.value)} className="bg-transparent rounded-full outline-none shadow-inputsShadow h-8 px-4 py-[20px]" />
                        <i className={`${show ? "fa solid fa-eye" : "fa solid fa-eye-slash"} absolute right-3 bottom-3 cursor-pointer`} onClick={() => show ? setShow(false) : setShow(true)}></i>
                    </div>
                    <button type="submit" className="w-36 rounded-full bg-[#03BFA9] outline-none border-none text-white py-2">Create Account</button>
                    <p className="text-sm">Already have an account? <b className="cursor-pointer hover:border-b-2 border-[#03BFA9] pb-[2px]"><Link to="/login">Log in</Link></b></p>
                </div>
            </form>
        </div>
    );
}
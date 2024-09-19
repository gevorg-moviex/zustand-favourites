import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/navbar";

export default function Layout({ actived1, setActived1, children }) {
    return ( // Add return statement here
        <>
            <Navbar actived={actived1} setActived={setActived1} />
            <Outlet />
        </>
    );
}

import { Link } from "react-router-dom"


export default function Header(){
    return(
        <>
        

        <div className="header">
            <div>
            <h4>Get ready to Complete your Daily Goals</h4>
            </div>

            <div className="navLinks">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/user/user-ki-id">User</Link>
            </div>
            
        </div>


        </>
    )
}

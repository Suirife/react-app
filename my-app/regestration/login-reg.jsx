import React from "react"
import { useState } from "react"
import './reg.css' // Суда с шаблонов направить нужно css'ки



    




const LoginRegistr = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const onButtonClick = () => {
    
    }

    const[action, setAction] = useState("Login");
    return (
        <div>
            <div className="container">
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <input 
                    value={email}
                    placeholder="Email"
                    onChange={(ev) => setEmail(ev.target.value)}
                    />
                </div>
                <div className="input">
                    <input 
                    value={password}
                    placeholder="Password"
                    onChange={(ev) => setPassword(ev.target.value)}
                    />
                </div>
                <div className={action==="Login"?"input hide":"input"}>
                    <input 
                    value={confirmPassword}
                    onChange={(ev) => setConfirmPassword(ev.target.value)}
                    placeholder="Confirm password"/>
                </div>
            </div>
            <div className="submit-input"
            onClick={onButtonClick} value={action==="Login"?"Login":"Register"}
            > Send </div>
            <div className={action==="Login"?"forgot-password":"forgot-password hide"}>Forgot password?<span> Clik here?</span> </div>
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Register")}} >Register</div>
                <div className={action==="Register"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div> 
            </div>
        </div>
        </div>
    )
}

export default LoginRegistr
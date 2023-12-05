import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {setCookie} from "../config/CookieMaster";

export const Login = () => {

    //Navigator
    let nav = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let err = document.getElementById("err");
        axios.post("http://localhost:5000/log-in", formData)
            .then((res) => {
                if (res.data === "success") {
                    setCookie("em", formData.email, 5);
                    err.innerText = "Login Successful!";
                    setTimeout(()=>{
                        nav("/dashboard");
                    },2000);
                } else if (res.data === "wrong-pass") {
                    err.innerText = "Wrong Password!";
                } else if (res.data === "no-acc") {
                    err.innerText = "Account not found!";
                }
            });
    }
    return (
        <>
            {/*  header  */}
            <Navbar/>
            {/*  header End  */}
            <div className="login-page">
                <div className="login-container">
                    <h1>Welcome Back!</h1>
                    <p className="tagline">Log in to your account</p>

                    <form onSubmit={handleSubmit} className="login-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />

                        <button type="submit">Login</button>
                        <p id="err"></p>
                    </form>
                </div>
                <Link to={"/register"}>New to DevEcho?</Link>
            </div>
            {/*  Footer  */}
            <Footer/>
            {/*  Footer End  */}
        </>
    )
}
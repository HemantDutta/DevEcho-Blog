import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

export const Login = () => {
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
        axios.post("http://localhost:5000/log-in", formData)
            .then((res)=>{
                console.log(res.data);
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
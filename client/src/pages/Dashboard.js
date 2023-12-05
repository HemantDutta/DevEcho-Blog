import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {getCookie} from "../config/CookieMaster";

export const Dashboard = () => {

    //Navigator
    let nav = useNavigate();

    //States
    const [user, setUser] = useState([]);
    const [posts, setPosts] = useState([]);

    //Check Login and fetch Posts
    useEffect(() => {
        const fetchData = () => {
            const em = getCookie("em");
            if (!em) nav("/login");
            axios.post("http://localhost:5000/fetch-user", {
                em: em
            })
                .then((res) => {
                    console.log(res.data);
                    if (res.data === "no-acc") {
                        nav("/login");
                    } else {
                        setUser(res.data);
                    }
                });
        };

        const fetchUserData = () => {
            axios.post("http://localhost:5000/fetch-user-posts", {
                user_id: user.id
            })
                .then((res) => {
                    setPosts(res.data);
                });
        }

        fetchData();
    }, [])

    return (
        <>
            {/*Header */}
            <Navbar/>
            {/*Header End*/}
            <div className="dashboard">
                <div className="user-info">
                    <h1>Welcome, {user.name}</h1>
                    <p>Email: {user.email}</p>
                </div>

                <Link to={"/new-post"} state={user.id} className="new-post-button">Create New Blog Post</Link>

                <div className="post-grid">

                    {
                        posts.length !== 0 &&
                        posts.map((value, index) => (
                            <div key={index} className="post-card">
                                <h2>{value.title}</h2>
                                <p>{value.content}</p>
                                <p>{value.tags}</p>
                                <div className="options">
                                    <Link to={"/edit-post"} state={value.id} className="edit-post">Edit</Link>
                                    <button type="button" className="del-post">Delete</button>
                                </div>
                            </div>
                        ))
                    }
                    {
                        posts.length===0 &&
                        <h2>No Posts Found</h2>
                    }
                </div>

                <div className="confirm-del">
                    <span className="head">Confirm Delete?</span>
                    <div className="options">
                        <button type="button" className="del">Delete</button>
                        <button type="button">Cancel</button>
                    </div>
                </div>
            </div>
            {/*  Footer   */}
            <Footer/>
            {/*  Footer End  */}
        </>
    )
}
import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export const Home = () => {

    //states
    const [posts, setPosts] = useState([]);

    //Fetch Posts
    useEffect(() => {
        const fetchPosts = () => {
            axios.get("http://localhost:5000/fetch-posts")
                .then((res) => {
                    console.log(res.data);
                    setPosts(res.data);
                });
        }

        fetchPosts();
    }, [])

    return (
        <>
            {/*Header*/}
            <Navbar/>
            {/*Header End*/}
            <div className="home">
                <div>
                    {/* Hero Section */}
                    <section className="hero">
                        <header>
                            <h1>Welcome to DevEcho</h1>
                        </header>
                        <p className="tagline">Explore the world of development through insightful blog posts.</p>
                        <Link to={"/register"} className="cta-button">Get Started</Link>
                    </section>

                    {/* Feed Section */}
                    <section className="feed">
                        <div className="search">
                            <div className="left">
                                <label htmlFor="search">Search</label>
                                <input type="text" name="search" id="search" placeholder="Search..."/>
                            </div>
                            <div className="right">
                                <span>Order by:</span>
                                <div className="button-group">
                                    <button type="button">Date</button>
                                    <button type="button">Relevance</button>
                                    <button type="button">Categories</button>
                                </div>
                            </div>
                        </div>
                        {/* Responsive Grid */}
                        <div className="feed-grid">
                            {/* Card 1 */}
                            {
                                posts.map(((value, index) => {
                                    return (
                                        <div className="card" key={index}>
                                            <img src="post1-image.jpg" alt="Blog Post 1"/>
                                            <h2>{value.title}</h2>
                                            <p className="description">{value.content.substring(0, 25)}</p>
                                            <p className="description">{value.tags}</p>
                                            <div className="feedback">
                                                <button className="like-button">Like</button>
                                                <button className="dislike-button">Dislike</button>
                                            </div>
                                        </div>
                                    )
                                }))
                            }
                        </div>
                    </section>
                </div>
            </div>
            {/*  Footer  */}
            <Footer/>
            {/*  Footer End  */}
        </>
    )
}
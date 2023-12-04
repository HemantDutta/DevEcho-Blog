import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import {Link} from "react-router-dom";

export const Home = () => {
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
                        <img src="hero-image.jpg" alt="Hero Image"/>
                    </section>

                    {/* Feed Section */}
                    <section className="feed">
                        {/* Responsive Grid */}
                        <div className="feed-grid">
                            {/* Card 1 */}
                            <div className="card">
                                <img src="post1-image.jpg" alt="Blog Post 1"/>
                                <h2>Blog Post Title 1</h2>
                                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget justo vel justo luctus congue.</p>
                                <div className="feedback">
                                    <button className="like-button">Like</button>
                                    <button className="dislike-button">Dislike</button>
                                </div>
                            </div>
                            <div className="card">
                                <img src="post1-image.jpg" alt="Blog Post 1"/>
                                <h2>Blog Post Title 1</h2>
                                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget justo vel justo luctus congue.</p>
                                <div className="feedback">
                                    <button className="like-button">Like</button>
                                    <button className="dislike-button">Dislike</button>
                                </div>
                            </div>
                            <div className="card">
                                <img src="post1-image.jpg" alt="Blog Post 1"/>
                                <h2>Blog Post Title 1</h2>
                                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget justo vel justo luctus congue.</p>
                                <div className="feedback">
                                    <button className="like-button">Like</button>
                                    <button className="dislike-button">Dislike</button>
                                </div>
                            </div>
                            <div className="card">
                                <img src="post1-image.jpg" alt="Blog Post 1"/>
                                <h2>Blog Post Title 1</h2>
                                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget justo vel justo luctus congue.</p>
                                <div className="feedback">
                                    <button className="like-button">Like</button>
                                    <button className="dislike-button">Dislike</button>
                                </div>
                            </div>
                            <div className="card">
                                <img src="post1-image.jpg" alt="Blog Post 1"/>
                                <h2>Blog Post Title 1</h2>
                                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget justo vel justo luctus congue.</p>
                                <div className="feedback">
                                    <button className="like-button">Like</button>
                                    <button className="dislike-button">Dislike</button>
                                </div>
                            </div>
                            <div className="card">
                                <img src="post1-image.jpg" alt="Blog Post 1"/>
                                <h2>Blog Post Title 1</h2>
                                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget justo vel justo luctus congue.</p>
                                <div className="feedback">
                                    <button className="like-button">Like</button>
                                    <button className="dislike-button">Dislike</button>
                                </div>
                            </div>
                            <div className="card">
                                <img src="post1-image.jpg" alt="Blog Post 1"/>
                                <h2>Blog Post Title 1</h2>
                                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget justo vel justo luctus congue.</p>
                                <div className="feedback">
                                    <button className="like-button">Like</button>
                                    <button className="dislike-button">Dislike</button>
                                </div>
                            </div>

                            {/* Card 2 ... Repeat for other blog posts */}
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
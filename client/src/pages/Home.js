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
                            <div className="card">
                                <img src="post1-image.jpg" alt="Blog Post 1"/>
                                <h2>Blog Post Title 1</h2>
                                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget justo vel justo luctus congue.</p>
                                <p className="description">Hello, bye, yo</p>
                                <div className="feedback">
                                    <button className="like-button">Like</button>
                                    <button className="dislike-button">Dislike</button>
                                </div>
                            </div>
                            <div className="card">
                                <img src="post1-image.jpg" alt="Blog Post 1"/>
                                <h2>Blog Post Title 1</h2>
                                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget justo vel justo luctus congue.</p>
                                <p className="description">Hello, bye, yo</p>
                                <div className="feedback">
                                    <button className="like-button">Like</button>
                                    <button className="dislike-button">Dislike</button>
                                </div>
                            </div>
                            <div className="card">
                                <img src="post1-image.jpg" alt="Blog Post 1"/>
                                <h2>Blog Post Title 1</h2>
                                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget justo vel justo luctus congue.</p>
                                <p className="description">Hello, bye, yo</p>
                                <div className="feedback">
                                    <button className="like-button">Like</button>
                                    <button className="dislike-button">Dislike</button>
                                </div>
                            </div>
                            <div className="card">
                                <img src="post1-image.jpg" alt="Blog Post 1"/>
                                <h2>Blog Post Title 1</h2>
                                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget justo vel justo luctus congue.</p>
                                <p className="description">Hello, bye, yo</p>
                                <div className="feedback">
                                    <button className="like-button">Like</button>
                                    <button className="dislike-button">Dislike</button>
                                </div>
                            </div>
                            <div className="card">
                                <img src="post1-image.jpg" alt="Blog Post 1"/>
                                <h2>Blog Post Title 1</h2>
                                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget justo vel justo luctus congue.</p>
                                <p className="description">Hello, bye, yo</p>
                                <div className="feedback">
                                    <button className="like-button">Like</button>
                                    <button className="dislike-button">Dislike</button>
                                </div>
                            </div>
                            <div className="card">
                                <img src="post1-image.jpg" alt="Blog Post 1"/>
                                <h2>Blog Post Title 1</h2>
                                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget justo vel justo luctus congue.</p>
                                <p className="description">Hello, bye, yo</p>
                                <div className="feedback">
                                    <button className="like-button">Like</button>
                                    <button className="dislike-button">Dislike</button>
                                </div>
                            </div>
                            <div className="card">
                                <img src="post1-image.jpg" alt="Blog Post 1"/>
                                <h2>Blog Post Title 1</h2>
                                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget justo vel justo luctus congue.</p>
                                <p className="description">Hello, bye, yo</p>
                                <div className="feedback">
                                    <button className="like-button">Like</button>
                                    <button className="dislike-button">Dislike</button>
                                </div>
                            </div>
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
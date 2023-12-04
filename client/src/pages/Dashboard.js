import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import {Link} from "react-router-dom";

export const Dashboard = () => {
    // Dummy data for previously made posts
    const previousPosts = [
        {id: 1, title: 'Blog Post 1', content: 'Lorem ipsum dolor sit amet...', tags: 'hello, bye, yo'},
        {id: 2, title: 'Blog Post 2', content: 'Consectetur adipiscing elit...', tags: 'hello, bye, yo'},
        // Add more posts as needed
    ];
    return (
        <>
            {/*Header */}
            <Navbar/>
            {/*Header End*/}
            <div className="dashboard">
                <div className="user-info">
                    <h1>Welcome, User!</h1>
                    <p>Email: user@gmail.com</p>
                </div>

                <Link to={"/new-post"} className="new-post-button">Create New Blog Post</Link>

                <div className="post-grid">
                    {previousPosts.map((post) => (
                        <div key={post.id} className="post-card">
                            <h2>{post.title}</h2>
                            <p>{post.content}</p>
                            <p>{post.tags}</p>
                            <div className="options">
                                <Link to={"/edit-post"} className="edit-post">Edit</Link>
                                <button type="button" className="del-post">Delete</button>
                            </div>
                        </div>
                    ))}
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
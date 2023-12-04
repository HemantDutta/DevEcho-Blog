import React, {useState} from 'react';
import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";

function CreatePostPage() {
    const [postData, setPostData] = useState({
        title: '',
        content: '',
        tags: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setPostData({
            ...postData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('New Post Data:', postData);
    };

    return (
        <>
            <Navbar/>
            <div className="create-post-page">
                <header className="header">
                    <h1>Create a New Post</h1>
                    <p className="tagline">Empower the community with your knowledge and insights!</p>
                </header>

                <form onSubmit={handleSubmit} className="post-form">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={postData.title}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="content">Content</label>
                    <textarea
                        id="content"
                        name="content"
                        value={postData.content}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="tags">Tags</label>
                    <input
                        type="text"
                        id="tags"
                        name="tags"
                        value={postData.tags}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">Create Post</button>
                </form>
            </div>
            <Footer/>
        </>
    );
}

export default CreatePostPage;

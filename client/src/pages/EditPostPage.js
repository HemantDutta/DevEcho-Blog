import React, {useState} from 'react';
import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import axios from "axios";

function EditPostPage() {
    const [postData, setPostData] = useState({
        title: 'Sample Post Title', // Sample data for demonstration
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget justo vel justo luctus congue.',
        tags: '',
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
    };

    return (
        <>
            <Navbar/>
            <div className="edit-post-page">
                <header className="header">
                    <h1>Edit Post</h1>
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

                    <label htmlFor="categories">Categories</label>
                    <select name="categories" id="categories">
                        <option value="#">Select a category</option>
                        <option value="#">Category 1</option>
                        <option value="#">Category 2</option>
                        <option value="#">Category 3</option>
                    </select>

                    <button type="submit">Save Changes</button>
                </form>
            </div>
            <Footer/>
        </>
    )
}

export default EditPostPage;

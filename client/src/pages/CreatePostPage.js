import React, { useState } from 'react';

function CreatePostPage() {
    const [postData, setPostData] = useState({
        title: '',
        content: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPostData({
            ...postData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to handle the submission of the new post data
        console.log('New Post Data:', postData);
    };

    return (
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

                <button type="submit">Create Post</button>
            </form>
        </div>
    );
}

export default CreatePostPage;

import React from 'react';
const initialPosts = [
    {
        id: 2,
        text: 'Lorem ipsum',
        user: {
            avatar: '/uploads/images.jpeg',
            username: 'Test User'
        }
    },
    {
        id: 1,
        text: 'Lorem ipsum',
        user: {
            avatar: '/uploads/images2.jpeg',
            username: 'Test User 2'
        }
    }
];
const App = () => {
    return (
        <div className="container">
            <div className="feed">
                {initialPosts.map((post, i) =>
                    <div key={post.id} className="post">
                        <div className="header">
                            <img src={post.user.avatar} />
                            <h2>{post.user.username}</h2>
                        </div>
                        <p className="content">
                            {post.text}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
export default App;

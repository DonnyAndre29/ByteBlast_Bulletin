import React, { useState } from 'react';
import './SignUp_Login/Blog_Website.css' 

function BlogWebsite() {
  const [postsData, setPostsData] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [newComment, setNewComment] = useState('');
  const [commentPostId, setCommentPostId] = useState(null);
  const handleNewPostSubmit = () => {
    if (!newPostTitle || !newPostContent) return;
    const newPost = {
      id: postsData.length + 1,
      title: newPostTitle,
      content: newPostContent,
      likes: 0,
      dislikes: 0,
      comments: []
    };
    setPostsData([newPost, ...postsData]);
    setNewPostTitle('');
    setNewPostContent('');
  };
  const handleLike = (postId) => {
    setPostsData(postsData.map(post => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    }));
  };
  const handleDislike = (postId) => {
    setPostsData(postsData.map(post => {
      if (post.id === postId) {
        return { ...post, dislikes: post.dislikes + 1 };
      }
      return post;
    }));
  };
  const handleAddComment = (postId, commentText) => {
    if (!commentText) return;
    const updatedPostsData = postsData.map(post => {
      if (post.id === postId) {
        return { ...post, comments: [...(post.comments || []), { id: post.comments.length + 1, text: commentText }] };
      }
      return post;
    });
    setPostsData(updatedPostsData);
    setNewComment('');
  };
  return (
    <div className="blog">
      <h1>New Post</h1>
      <div className="new-post">
        <input type="text" placeholder="Title" value={newPostTitle} onChange={(e) => setNewPostTitle(e.target.value)} />
        <textarea placeholder="Content" value={newPostContent} onChange={(e) => setNewPostContent(e.target.value)}></textarea>
        <button onClick={handleNewPostSubmit}>Post</button>
      </div>
      <h1>Blog Posts</h1>
      {postsData.map(post => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <div className="actions">
            <button onClick={() => handleLike(post.id)}>Like</button>
            <button onClick={() => handleDislike(post.id)}>Dislike</button>
            <span>Likes: {post.likes}</span>
            <span>Dislikes: {post.dislikes}</span>
          </div>
          <h3>Comments</h3>
          {post.comments && post.comments.map(comment => (
            <div key={comment.id} className="comment">
              <p>{comment.text}</p>
            </div>
          ))}
          <div className="comment-form">
            <input type="text" placeholder="Add a comment" value={newComment} onChange={(e) => setNewComment(e.target.value)} />
            <button onClick={() => handleAddComment(post.id, newComment)}>Add Comment</button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default BlogWebsite;
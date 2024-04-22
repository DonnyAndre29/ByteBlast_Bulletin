
import React, { useState, useEffect } from 'react';
import './SignUp_Login/Blog_Website.css';

function BlogWebsite() {

  const [postsData, setPostsData] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');

   const [newComment, setNewComment] = useState('');
  const [commentPostId, setCommentPostId] = useState(null);

  const [newPostImage, setNewPostImage] = useState(null);
  const [newPostImageName, setNewPostImageName] = useState('');
  const [newComment, setNewComment] = useState({});
  const [enlargedImage, setEnlargedImage] = useState(null);

  useEffect(() => {
    const storedPosts = localStorage.getItem('postsData');
    if (storedPosts) {
      setPostsData(JSON.parse(storedPosts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('postsData', JSON.stringify(postsData));
  }, [postsData]);


  const handleNewPostSubmit = () => {
    if (!newPostTitle || !newPostContent) return;

    let imageBase64 = null;
    if (newPostImage) {
      // Convert image data to Base64-encoded string
      const reader = new FileReader();
      reader.readAsDataURL(newPostImage);
      reader.onload = () => {
        imageBase64 = reader.result;
        // Create a new post object with the Base64-encoded image string
        const newPost = {
          id: postsData.length + 1,
          title: newPostTitle,
          content: newPostContent,
          likes: 0,
          dislikes: 0,
          image: imageBase64, // Store the Base64-encoded image string
          comments: []
        };

        setPostsData([newPost, ...postsData]);
        setNewPostTitle('');
        setNewPostContent('');
        setNewPostImage(null);
        setNewPostImageName('');
      };
    } else {
      // If no image is attached, create a new post object without the image
      const newPost = {
        id: postsData.length + 1,
        title: newPostTitle,
        content: newPostContent,
        likes: 0,
        dislikes: 0,
        image: null, // No image attached
        comments: []
      };

      setPostsData([newPost, ...postsData]);
      setNewPostTitle('');
      setNewPostContent('');
      setNewPostImage(null);
      setNewPostImageName('');
    }
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

  const handleAddComment = (postId) => {
    if (!newComment[postId]) return;
    const updatedPostsData = postsData.map(post => {
      if (post.id === postId) {
        return { ...post, comments: [...(post.comments || []), { id: post.comments.length + 1, text: newComment[postId] }] };
      }
      return post;
    });
    setPostsData(updatedPostsData);

    setNewComment({ ...newComment, [postId]: '' });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setNewPostImage(file);
    setNewPostImageName(file.name);
  };

  const handleDeleteImage = () => {
    setNewPostImage(null);
    setNewPostImageName('');
  };

  const handleDeletePost = (postId) => {
    const updatedPostsData = postsData.filter(post => post.id !== postId);
    setPostsData(updatedPostsData);
  };

  const handleImageClick = (imageSrc) => {
    setEnlargedImage(imageSrc);
    document.body.style.overflow = 'hidden'; // Disable scrolling
  };

  const handleCloseEnlargedImage = () => {
    setEnlargedImage(null);
    document.body.style.overflow = ''; // Enable scrolling
  };


  return (
    <div className="blog">
      <h1>New Post</h1>
      <div className="new-post">
        <input type="text" placeholder="Title" value={newPostTitle} onChange={(e) => setNewPostTitle(e.target.value)} />
        <textarea placeholder="Content" value={newPostContent} onChange={(e) => setNewPostContent(e.target.value)}></textarea>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {newPostImageName && (
          <div>
            <p>{newPostImageName}</p>
            <button onClick={handleDeleteImage}>Delete Image</button>
          </div>
        )}
        <button onClick={handleNewPostSubmit}>Post</button>
      </div>

      <h1>Blog Posts</h1>
      {postsData.map(post => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          {post.image && <img src={post.image} alt="Post" onClick={() => handleImageClick(post.image)} />}
          <div className="actions">
            <button onClick={() => handleLike(post.id)}>👍 {post.likes}</button>
            <button onClick={() => handleDislike(post.id)}>👎 {post.dislikes}</button>
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
          </div>

          <h3>Comments</h3>
          {post.comments && post.comments.map(comment => (
            <div key={comment.id} className="comment">
              <p>{comment.text}</p>
            </div>
          ))}

          <div className="comment-form">
            <input type="text" placeholder="Add a comment" value={newComment[post.id] || ''} onChange={(e) => setNewComment({ ...newComment, [post.id]: e.target.value })} />
            <button onClick={() => handleAddComment(post.id)}>Add Comment</button>
          </div>
        </div>


      ))}

      {enlargedImage && (
        <div className="enlarged-image-overlay" onClick={handleCloseEnlargedImage}>
          <div className="enlarged-image-container">
            <img src={enlargedImage} alt="Enlarged" />
          </div>
        </div>
      )}

    </div>

  );
}

export default BlogWebsite;
















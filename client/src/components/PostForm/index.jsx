import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS } from '../../utils/queries';
import Auth from '../../utils/auth';



const PostForm = () => {
  const [postContent, setpostContent] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation
  (ADD_POST, {
    refetchQueries: [
      QUERY_POSTS,
      'getPosts'
    ]
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPost({
        variables: {
          postContent,
          postAuthor: Auth.getProfile().data.username,
        },
      });

      setpostContent('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'postContent' && value.length <= 280) {
      setpostContent(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h3>What's on your techy mind?</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="postContent"
                placeholder="Here's a new post..."
                value={postContent}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Post
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default PostForm;


// const PostForm = ({ profileId }) => {
//   const [post, setPost] = useState('');
//   const [addPost, { error }] = useMutation(ADD_POST);

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const data = await addPost({
//         variables: { userId,  post },
//       });

//       setPost('');
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div>
//       <h4>Endorse some more skills below.</h4>

//       {Auth.loggedIn() ? (
//         <form
//           className="flex-row justify-center justify-space-between-md align-center"
//           onSubmit={handleFormSubmit}
//         >
//           <div className="col-12 col-lg-9">
//             <input
//               placeholder="Endorse some skills..."
//               value={skill}
//               className="form-input w-100"
//               onChange={(event) => setPost(event.target.value)}
//             />
//           </div>
//           <div className="col-12 col-lg-3">
//             <button className="btn btn-info btn-block py-3" type="submit">
//               Endorse Post
//             </button>
//           </div>
//           {error && (
//             <div className="col-12 my-3 bg-danger text-white p-3">
//               {error.message}
//             </div>
//           )}
//         </form>
//       ) : (
//         <p>
//           You need to be logged in to comment post. Please{' '}
//           <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
//         </p>
//       )}
//     </div>
//   );
// };

// export default PostForm;
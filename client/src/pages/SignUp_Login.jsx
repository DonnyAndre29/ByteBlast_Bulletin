import React, {useState}  from "react";
import './SignUp_Login/SignUp_Login.css'
import user_icon from './SignUp_Login/person.png'
import email_icon from './SignUp_Login/email.png'
import password_icon from './SignUp_Login/password.png'
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { ADD_USER} from '../utils/mutations';
// import { LOGIN_USER } from '../utils/mutations';
// import Auth from '../utils/auth';


const SignUp_Login = () => {
    const [action, setAction] = useState('Sign Up');
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
      });
     
    //   const [addUserProfile, { error, data }] = useMutation(ADD_USER);
    
      const handleSignin = (event) => {
        const { name, value } = event.target;
        console.log(event.target);
        setFormState({
          ...formState,
          [name]: value,
        });
      };
    
      const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
    
        try {
          const { data } = await addUserProfile({
            variables: { ...formState },
          });
    
          Auth.login(data.addUserProfile.token);
        } catch (e) {
          console.error(e);
        }
      };

    // const [login, { error, data }] = useMutation(LOGIN_USER);
    const handleLogin = (event) => {
        const { name, value } = event.target;
        console.log(event.target);
        setFormState({
          ...formState,
          [name]: value,
        });
      };
    
      // submit form
      const handleLoginSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
          const { data } = await login({
            variables: { ...formState },
          });
    
          Auth.login(data.login.token);
        } catch (e) {
          console.error(e);
        }
    
        // clear form values
        setFormState({
          email: '',
          password: '',
        });
      };
    
    return (
        <div className="container_SignUp">
            <div className="submit-container">
                <div className={action === 'Login' ? 'submit gray' : 'submit'} onClick={() => { setAction('Sign Up') }}>Sign Up</div>
                <div className="button-text-margin"></div>
                <div className={action === 'Sign Up' ? 'submit gray' : 'submit'} onClick={() => { setAction('Login') }}>Login</div>
            </div>
            <div className="header" style={{ marginTop: '20px' }}>
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            
            <div className="inputs">
                {action === 'Login' ?
                    <React.Fragment>
                        <form onSubmit={handleFormSubmit}>
                        <div className="input">
                            <img src={email_icon} alt="" />
                            <input type="email" placeholder="Email Id" />
                        </div>
                        <div className="input">
                            <img src={password_icon} alt="" />
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="login-button-container">
                            <button className="login-button" onClick={handleLogin}>Login</button>
                        </div>
                        </form>
                    </React.Fragment>                    
                    :
                    <React.Fragment>
                        <div className="input">
                            <img src={user_icon} alt="" />
                            <input type="text" placeholder="First Name" />
                        </div>
                        <div className="input">
                            <img src={user_icon} alt="" />
                            <input type="text" placeholder="Last Name" />
                        </div>
                        <div className="input">
                            <img src={email_icon} alt="" />
                            <input type="email" placeholder="Email Id" />
                        </div>
                        <div className="input">
                            <img src={password_icon} alt="" />
                            <input type="password" placeholder="Password" />
                        </div>
                    </React.Fragment>
                }
            </div>
            {/* {onSubmit={handleLoginSubmit}} */}
            <form onSubmit={handleLoginSubmit}>
            {action === 'Sign up' ? <div></div> :
                <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>
            }
            {/* Button for completing sign up */}
            {action === 'Sign Up' &&
                <div className="complete-sign-up-container">
                    <button className="complete-sign-up" onClick={handleSignin}>Complete Sign Up!</button>
                </div>
            }
            </form>
        </div>
    )

};


export default SignUp_Login;









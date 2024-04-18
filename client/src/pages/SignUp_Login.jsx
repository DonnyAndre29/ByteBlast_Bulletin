import React, {useState}  from "react";
// import '../SignUp_Login/SignUp_Login.css'
import './SignUp_Login/SignUp_Login.css'
// import { ADD_USER } from '../utils/mutations';
// import Auth from '../utils/auth';
import user_icon from './SignUp_Login/person.png'
import email_icon from './SignUp_Login/email.png'
import password_icon from './SignUp_Login/password.png'


const SignUp_Login = () => {
    const [action, setAction] = useState('Sign Up');
    // const [formState, setFormState] = useState({
    //     username: '',
    //     email: '',
    //     password: '',
    //   });
    //   const [addUser, { error, data }] = useMutation(ADD_USER);
    
    //   const handleChange = (event) => {
    //     const { name, value } = event.target;
    
    //     setFormState({
    //       ...formState,
    //       [name]: value,
    //     });
    //   };
    
    //   const handleFormSubmit = async (event) => {
    //     event.preventDefault();
    //     console.log(formState);
    
    //     try {
    //       const { data } = await addUser({
    //         variables: { ...formState },
    //       });
    
    //       Auth.login(data.addUser.token);
    //     } catch (e) {
    //       console.error(e);
    //     }
    //   };

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
                        <div className="input">
                            <img src={email_icon} alt="" />
                            <input type="email" placeholder="Email Id" />
                        </div>
                        <div className="input">
                            <img src={password_icon} alt="" />
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="login-button-container">
                            <button className="login-button" onClick={() => console.log("Redirect to login")}>Login</button>
                        </div>
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
            {action === 'Sign up' ? <div></div> :
                <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>
            }
            {/* Button for completing sign up */}
            {action === 'Sign Up' &&
                <div className="complete-sign-up-container">
                    <button className="complete-sign-up">Complete Sign Up!</button>
                </div>
            }
        </div>
    )

};


export default SignUp_Login;









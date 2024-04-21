import React, { useState } from "react";
import './SignUp_Login/SignUp_Login.css'
// import user_icon from './SignUp_Login/person.png'
// import email_icon from './SignUp_Login/email.png'
// import password_icon from './SignUp_Login/password.png'
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';


const SignUp_Login = () => {
    const [action, setAction] = useState('Sign Up');
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [addUser, { error, data }] = useMutation(ADD_USER);

   

   

    const [login, { err, login_data }] = useMutation(LOGIN_USER);
    const handleLogin = (event) => {
        const { name, value } = event.target;
        
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    //   // submit form
    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        console.log(formState)
        try {
            const { login_data } = await login({
                variables: { ...formState },
            });
            console.log(login_data)
            Auth.login(login_data.login.token);
        } catch (err) {
            console.error(err);
        }

        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };
// new code 
const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      console.log(data)
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
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
                   <form onSubmit={handleLoginSubmit}>
            <input
              className="form-input"
              placeholder="Your email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleLogin}
            />
            <input
              className="form-input"
              placeholder="******"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleLogin}
            />
            <button
              className="btn btn-block btn-primary"
              style={{ cursor: 'pointer' }}
              type="submit"
            >
              Submit
            </button>
          </form>
                </React.Fragment>
                :
                <React.Fragment>
                    <form onSubmit={handleFormSubmit}>
                        <input
                            className="form-input input"
                            placeholder="Your username"
                            name="username"
                            type="text"
                            value={formState.name}
                            onChange={handleChange}
                        />
                        <input
                            className="form-input input"
                            placeholder="Your email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                        />
                        <input
                            className="form-input input"
                            placeholder="******"
                            name="password"
                            type="password"
                            value={formState.password}
                            onChange={handleChange}
                        />
                        <Link to = '/user'>
                        <button
                            className="btn btn-block btn-primary complete-sign-up"
                            style={{ cursor: 'pointer' }}
                            type="submit"
                        >
                            Complete Sign Up!
                        </button>
                        </Link>
                        <button className="forgot-password"  style={{ cursor: 'pointer' }}
                            type="submit"> 

                            Forgot Password? <span>Click Here!</span>
                        
                        </button>
                    </form>
                </React.Fragment>
            }
        </div>
      
       
    </div>
)

};

export default SignUp_Login;









import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../providers/AuthProviders';

const Register = () => {
  const { createUser, updateUserProfile, googleSignIn, gitHubSignIn, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const location = useLocation();

  const handleRegister = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setErrorMessage('Password should be at least 6 characters');
      return;
    }
    else if (!/(?=.*[A-Z])/.test(password)) {
      setErrorMessage('Use at least one Uppercase in password');
      return;
    }
    else if (!/(?=.*[0-9])/.test(password)) {
      setErrorMessage('Use at least one number in password');
      return;
    }

    createUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        updateUserProfile(name, photoURL);
        logOut();
        navigate('/access/login', { state: { from: location.state } }, { replace: true });
      })
      .catch(error => {
        // form.reset()
        setErrorMessage(error.message);
      });
  }

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const loggedUser = result.user;
        navigate('/', { replace: true });
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleGitHubSignIn = () => {
    gitHubSignIn()
      .then(result => {
        const loggedUser = result.user;
        navigate('/', { replace: true });
      })
      .catch(error => {
        console.log(error);
      })
  }
  return (
    <div>
      <div className="text-center mx-auto p-5 md:p-10 form-control w-full max-w-md">
        <form onSubmit={handleRegister} className='mb-3'>
          <h3 className='text-3xl mb-5'>Registration!</h3>
          <div className='grid grid-cols-2 gap-1 justify-items-center items-center'>
            <div>
              <span className="label-text">What is your Name?</span>
              <input type="text" placeholder="Enter Your name" name='name' className="input input-bordered w-full max-w-xs text-center mb-3" required />
            </div>
            <div>
              <span className="label-text">Share your photo</span>
              <input type="text" placeholder="Photo URL" name='photoURL' className="input input-bordered w-full max-w-xs text-center mb-3" required />
            </div>
            <div>
              <span className="label-text">E-mail ?</span>
              <input type="email" placeholder="Enter Your E-mail" name='email' className="input input-bordered w-full max-w-xs text-center mb-3" required />
            </div>
            <div>
              <span className="label-text">Create a password (at least 6 characters) </span>
              <input type="Password" placeholder="Enter Your Password" name='password' className="input input-bordered w-full max-w-xs text-center mb-3" required />
            </div>
          </div>
          {
            errorMessage && (
              <div className='border border-red-400 rounded-lg w-2/3 mx-auto text text-red-600 m-2 '>
                {
                  errorMessage.slice(0, 9) === 'Firebase:' ? (
                    errorMessage === 'Firebase: Error (auth/email-already-in-use).' ?
                      <p>Email already used</p> :
                      errorMessage === 'Firebase: Error (auth/invalid-email).' ?
                        <p>Email is not formatted correctly</p> :
                        errorMessage === 'Firebase: Error (auth/too-many-requests).' ?
                          <p>Too many attempts, try again later</p> :
                          <p>'There was an error while trying to create your account. Please try again later.'</p>
                  ) :
                    <p>{errorMessage}</p>
                }
              </div>
            )
          }
          <button className="btn btn-outline  text-black-800">Sign up</button>
        </form>
        <div className='text-center'>
          <p>Or Sign up with</p>
          <button onClick={handleGoogleSignIn} className='mr-2'><FaGoogle className='text-4xl' /></button>
          <button onClick={handleGitHubSignIn}><FaGithub className='text-4xl' /></button>
        </div>
        <div>
          <p>Do you already have an account?
            <br />
            <Link to='/access/login'>
              <span className='underline decoration-1'>Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
import { useState, useEffect } from 'react';
import './SignUpForm.scss';
import logo from '../assets/gmail_logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import WebFont from 'webfontloader';
import Footer from './Footer';

// This is the registration form
function SignUpForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);

  // RegEx for email validation
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  
  // RegEx for password validation
  function isValidPassword(password) {
    return /(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(password);
  }

  const handleFirstName = event => {
    setFirstName(event.target.value);
  };  
  const handleLastName = event => {
    setLastName(event.target.value);
  };
  const handleEmail = event => {
    setEmail(event.target.value);
  };  
  const handlePassword = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
  
    setErrorEmail(null);
    setErrorPassword(null);

    if (!isValidEmail(email)) {
      setErrorEmail('Invalid Email');
    }

    if (!isValidPassword(password)) {
      setErrorPassword('Invalid Password');
    } 

    if (isValidEmail(email) && isValidPassword(password)) {
      const registeredUserData = {
        firstName,
        lastName,
        email
      };
      props.func(registeredUserData);
      clearForm(event);
    };
  };

  const clearForm = (form) => {
    form.target.reset();
    setFirstName(null);
    setLastName(null);
    setEmail(null);
    setPassword(null);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'FontAwesome']
      }
    });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <link href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" rel="stylesheet"/>

     <div className='formContainer'>
        <div className='formHeader'>
          <h3>Sign up</h3>
          <img src={logo} alt="Gmail logo"/>
        </div>
        <div className='nameInputs'>
          <div className='inputContainer'>
            <FontAwesomeIcon className='icon' icon={faUser} />
            <input 
              className="input-field"
              type="text" 
              placeholder='First Name'
              value={firstName}
              onChange={handleFirstName}
              required
            />
          </div>
          <div className='inputContainer'>
            <FontAwesomeIcon className='icon' icon={faUser} />
            <input 
                className="input-field"
                type="text" 
                placeholder='Last Name'
                value={lastName}
                onChange={handleLastName}
                required
              />
          </div>
        </div>
        <div className={errorEmail ? 'inputContainerError' : 'inputContainer'}>
          <FontAwesomeIcon className='icon' icon={faAt} />
          <input 
            className="input-field"
            type="email" 
            placeholder='Email Address'
            value={email}
            onChange={handleEmail}
            required
          />
          {errorEmail && <h5 className="errorMsg">{errorEmail}</h5>}
        </div>
        <div className={errorPassword ? 'inputContainerError' : 'inputContainer'}>
          <FontAwesomeIcon className='icon' icon={faKey} />
          <input 
            className="input-field"
            type="password" 
            placeholder='Password'
            value={password}
            onChange={handlePassword}
            required
          />
          {errorPassword && <h5 className="errorMsg">{errorPassword}</h5>}
        </div>
        <div className='termsAndConditionsContainer'>
          <div>
            <input type="checkbox" id="terms" className='termsAndConditionsCheckbox' required />
            <label htmlFor="terms">I agree with terms and conditions</label>
          </div>
        </div>
        <input type="submit" value='Sign up' className='submitButton'/>
        <Footer /> 
      </div>
    </form>
  )
}

export default SignUpForm;
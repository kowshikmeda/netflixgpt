import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG_URL, USER_AVATAR } from "../utils/constants";
const Login = () => {
  const [isSignInform, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch=useDispatch();
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // console.log(name?.current?.value || ""); // Safely handle name input
    // console.log(email.current.value);
    // console.log(password.current.value);

    const message = checkValidData(
      email.current.value,
      password.current.value,
      isSignInform ? "" : name?.current?.value || "" // Pass name only in Sign Up
    );

    //console.log(message);
    setErrorMessage(message);

    if(message) return;
    if(!isSignInform){
      createUserWithEmailAndPassword(auth,  email.current.value,
        password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value,
       photoURL: USER_AVATAR,
    }).then(() => {
      const {uid,email,displayName,photoURL} = auth.currentUser;
      dispatch(addUser({uid:user.uid,
        email:user.email,displayName:user.displayName,
        photoURL:user.photoURL}));
     
      // Profile updated!
      // ...
    }).catch((error) => {
      setErrorMessage(error.message);
      // An error occurred
      // ...
    });
   // console.log(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"  "+errorMessage);
    // ..
  });


    }else{

      signInWithEmailAndPassword(auth, email.current.value,
        password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    //console.log(user);

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"  "+errorMessage);
  });
    
    }
    
  };

  const toggleForm = () => {
    setSignInForm(!isSignInform);
    setErrorMessage(null); // Clear errors when switching forms
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="max-md:h-screen object-cover "
          src={BG_IMG_URL}
          alt="background-image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/12 bg-black p-12 absolute my-36 mx-auto left-0 right-0 text-white rounded-lg opacity-80"
      >
        <h1 className="py-4 text-3xl font-bold ">
          {isSignInform ? "Sign In" : "Sign Up"}
        </h1>

        {/* Show Name input only for Sign Up */}
        {!isSignInform && (
          <input
            type="text"
            ref={name}
            className="p-4 my-4 w-full bg-gray-800"
            placeholder="Enter Full Name"
          />
        )}

        <input
          ref={email}
          type="text"
          className="p-4 my-4 w-full bg-gray-800"
          placeholder="Enter Email Address"
        />

        <input
          type="password"
          ref={password}
          className="p-4 my-4 w-full bg-gray-800"
          placeholder="Enter Password"
        />

        {/* Display Error Messages */}
        {errorMessage && (
          <p className="text-red-600 font-bold text-lg py-1">{errorMessage}</p>
        )}

        <button
          className="p-4 my-6 bg-red-600 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInform ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer hover:text-blue-600 underline" onClick={toggleForm}>
          {isSignInform
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now..."}
        </p>
      </form>
    </div>
  );
};

export default Login;

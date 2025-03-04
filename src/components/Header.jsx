import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut ,onAuthStateChanged} from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
const Header = () => {
  const navigate = useNavigate();
  const user=useSelector(store=>store.user);
  const dispatch=useDispatch();
  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
      
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid,email,displayName,photoURL}))
        navigate('/browse');
        // ...
      } else {
        dispatch(removeUser());
        navigate('/');
        // User is signed out
        // ...
      }
      return ()=>{unsubscribe()}
    });
  
  },[])
  const handleSignOut = () => {
    signOut(auth).then(() => {
     
      // Sign-out successful.
    }).catch((error) => {
      navigate('/error');
      // An error happened.
    });
    
  }

  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>

        <img className="w-44"
        src={LOGO}
        
        alt='logo'/>
        {user &&<div className='flex p-2'>
          <img alt='signout' className='w-12 h-12'
          src={user?.photoURL}
          />
          <button  onClick={handleSignOut}
           className='text-white text-2xl font-bold'>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header
import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut ,onAuthStateChanged} from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {
  const navigate = useNavigate();
  const user=useSelector(store=>store.user);
  const dispatch=useDispatch();
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch);
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

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange=(lang)=>{
    //console.log(lang)
    dispatch(changeLanguage(lang))
  }
  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b 
    from-black z-10 flex flex-col justify-between bg-black  md:flex-row'>

        <img className="w-44 mx-auto md:mx-0"
        src={LOGO}
        
        alt='logo'/>
        {user &&<div className='flex p-2 justify-between'>
          {
            showGptSearch && <select className='bg-gray-900 text-white p-2 m-2' onChange={(e)=>handleLanguageChange(e.target.value)}>
            {
              SUPPORTED_LANGUAGES.map(lang=><option  key={lang.identifier}value={lang.identifier}>{lang.name}</option> )
            }
            
          </select>
          }
          
          <button className='py-2 px-4 mx-4 my-2 text-white bg-purple-600 rounded-lg'
          onClick={handleGptSearchClick}>{showGptSearch?"Home Page":"GPT Search"}</button>
          <img alt='signout' className='w-12 h-12 hidden'
          src={user?.photoURL}
          />
          <button  onClick={handleSignOut}
           className='text-white w-[40px]md:text-2xl bg-red-600 rounded-lg w-[80px] font-bold'>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header
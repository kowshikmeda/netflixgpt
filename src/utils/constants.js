import photo from '../assets/netflixlogo.png'
export const LOGO= photo

export const USER_AVATAR="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUW0u5Eiiy3oM6wcpeEE6sXCzlh8G-tX1_Iw&s"

export const API_OPTIONS={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ import.meta.env.VITE_TMDB_API_KEY,
    }
  };

  export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500";

  export const BG_IMG_URL="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_small.jpg";

  export const SUPPORTED_LANGUAGES=[{identifier:"en",name:"English"},
  {identifier:"hindi",name:"Hindi"},
  {identifier:"telugu",name:"Telugu"},
  {identifier:"spanish",name:"Spanish"}];

  export const OPENAI_KEY=import.meta.env.VITE_OPENAI_API_KEY;
  export const GEMINI_API_KEY=import.meta.env.VITE_GEMINI_API_KEY;
  
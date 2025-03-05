export const LOGO='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' 

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
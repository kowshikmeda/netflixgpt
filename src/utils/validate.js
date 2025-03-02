export const checkValidData=(email,password,name="")=>{
    //console.log(name);
    const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
   
        if(!isEmailValid) return "Email ID is not Valid";
    if(!isPasswordValid) return "Password is not Valid";
   
    if (name.trim() !== "") {
        const isNameValid = /^[a-zA-Z][a-zA-Z0-9_ ]{2,29}$/.test(name);
        if (!isNameValid) return "Name is not Valid.";
      }
    
    return null;


}
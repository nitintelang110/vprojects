
import * as Yup from 'yup';

export const YupValidation = Yup.object({
 
    name:Yup.string().min(3).required("Please Enter Name"),
    email:Yup.string().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,"Enter Valid Email").email("Please Enter Valid Email").required("Please Enter Email"),
    password:Yup.string().min(5).matches( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/,"password includes one Capital letter,one Small letter,one Special Character and numbers").required("Please Enter Password"),
    cpassword:Yup.string().oneOf([Yup.ref("password")] , "Password Not Matched"),
}) 


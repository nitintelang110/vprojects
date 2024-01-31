
import * as Yup from 'yup';

export const YupValidation = {
 
    name:Yup.string().min(3).required("Please Enter Name"),
    eamil:Yup.string().email("Please Enter Valid Email").required("Please Enter Email"),
    password:Yup.string().min(5).required("Please Enter Password"),
    c_password:Yup.string().oneOf([Yup.ref("password")] , "Password Not Matched"),
}


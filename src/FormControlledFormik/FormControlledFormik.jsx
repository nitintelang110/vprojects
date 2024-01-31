import React from 'react';
import './FormControlledFormik.css';
import { useFormik } from 'formik';
import { YupValidation } from './YupValidation';



const FormControlledFormik = () => {

  //here we are using useafaormik and destructing needed formik properties

const {values,handleBlur,handleChange,handleSubmit,errors} = useFormik({
  
  initialValues:{
    name :'',
    email:'',
    password:'',
    c_password:''
  },
  validationSchema:{YupValidation},
  onSubmit:(values)=>{console.log(values)},
})


 
  return (
    <div className='c_form_container_formik'>
      <form className='form_container' onSubmit={handleSubmit}>

      <label htmlFor='name' className='form_label'>Name</label>
      <input type='text' id='name' name='name' onBlur={handleBlur}  onChange = {handleChange} value={values.name} autoComplete='off'/>
 
      {errors.name && <small>{errors.name}</small> }
      
     
      <label htmlFor='email' className='form_label'>Email</label>
      <input type='text' id='email' name='email' onBlur={handleBlur}  onChange = {handleChange} value={values.email}  autoComplete='off'/>
      {errors.email && <small>{errors.email}</small> }
     
      <label htmlFor='password' className='form_label'>Password</label>
      <input type='password' id='password' name='password' onBlur={handleBlur}  onChange = {handleChange} value={values.password} autoComplete='off' />
      {errors.password && <small>{errors.password}</small> }
     
      <label htmlFor='c_password' className='form_label'>Confirm Password</label>
      <input type='text' id='c_password' name='c_password' onBlur={handleBlur}  onChange = {handleChange} value={values.c_password}  autoComplete='off'/>
      {errors.c_password && <small>{errors.c_password}</small> }
     
      <button type='submit'>Submit</button>
     
      </form>
      </div>
  )
}

export default FormControlledFormik
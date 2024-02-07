import React from 'react';
import './FormControlledFormik.css';
import {useFormik} from 'formik';
import {YupValidation} from './YupValidation';

const initialValues = {
    name: '',
    email: '',
    password: '',
    cpassword: ''
}

const FormControlledFormik = () => {

    //here we are using useafaormik and destructing needed formik properties

    const {values, handleBlur, handleChange, handleSubmit, errors} = useFormik({

        initialValues: initialValues,
        validationSchema:YupValidation,
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return (
        <div className='c_form_container_formik'>
            <h5> This form obeying all validation of formik and yup library.</h5>
           
            <form className='form_container' onSubmit={handleSubmit}>

                <label htmlFor='name' className='form_label'>Name</label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                    autoComplete='off'/> {errors.name && <small style ={{color:"red"}}>{errors.name}</small>}

                <label htmlFor='email' className='form_label'>Email</label>
                <input
                    type='text'
                    id='email'
                    name='email'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    autoComplete='off'/> {errors.email && <small style ={{color:"red"}}>{errors.email}</small>}

                <label htmlFor='password' className='form_label'>Password</label>
                <input
                    type='text'
                    id='password'
                    name='password'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    autoComplete='off'/> {errors.password && <small style ={{color:"red"}}>{errors.password}</small>}

                <label htmlFor='cpassword' className='form_label'>Confirm Password</label>
                <input
                    type='text'
                    id='cpassword'
                    name='cpassword'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.cpassword}
                    autoComplete='off'/> {errors.cpassword && <small style ={{color:"red"}}>{errors.cpassword}</small>}

                <button type='submit'>Submit</button>

            </form>
        </div>
    )
}

export default FormControlledFormik
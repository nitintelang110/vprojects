import React,{useState} from 'react'
import './FormControlled.css'

const FormControlled = () => {

  const [userName, setUserName] = useState('');
   const [email, setEmail] = useState('');
  const [jobRole, setJobRole] = useState('');
  
  const [userNameError, setUserNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [jobRoleError, setJobRoleError] = useState('');
  
  const [loadData,setLoadData] = useState(false)

  //function validate to user name
      
  function validateUserName(userName) {
    let isUserNameValid = true;
    const nameRegEx = /^[a-z]+$/;
    setUserNameError('');
    if (!nameRegEx.test(userName)){
      setUserNameError('User Name Not Allowed Numbers & Special Char & Uppercase Char');
      isUserNameValid = false;
      return isUserNameValid;

    }
    if (userName === "") {
      setUserNameError("Username is required")
      isUserNameValid = false;
      return isUserNameValid;
    } else if (userName.length < 3) {
      setUserNameError("Username must be greater than 3 char")
      isUserNameValid = false;
    }else if (userName.length > 10) {
      setUserNameError("Username must be less than 10 char")
      isUserNameValid = false;
    }
    return isUserNameValid;
  }
//function for validate email
  function validateEmail(email){
    const emailRegEx = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    let isEmailValid = true;
    setEmailError("")
    if (email === ''){
      setEmailError('Email can not be blank');
      isEmailValid = false;
      return isEmailValid;
    }
    if (!emailRegEx.test(email)) {
      setEmailError('Invalid Email')
         isEmailValid = false;
      return isEmailValid;
    }
      return isEmailValid;
  } 

  // function to valid job role

  function validateJobRole(jobRole) {
    setJobRoleError('');
    let isJobRoleValid = true;
    if (jobRole === 'developer' || jobRole === 'tester') {
      setJobRoleError("")

    } else {
      isJobRoleValid = false;
      setJobRoleError("please select one job roll")
    }
    return isJobRoleValid;
  }

  
  function handleSubmit(e) {
    e.preventDefault()

    let isUserNameVaild = validateUserName(userName);
    let isEmailValid = validateEmail(email);
    let isJobRoleValid = validateJobRole(jobRole);

    if (isUserNameVaild && isEmailValid && isJobRoleValid) {
      setLoadData(true)
      console.log(userName)
      console.log(email)
      console.log(jobRole)
    } else {
      return userNameError || emailError || jobRoleError;
    }
}


  return (
    <div className='c_form_controlled_container'>
      {/* Display Error */}
      <div className="error">{userNameError || emailError || jobRoleError}</div>
 <form className='form-container' onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='username'>Username:</label>
        <input type='text' id='username' placeholder='Only lower Char...' onChange={(e)=>{setUserName(e.target.value)}} />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email:</label>
        <input type='email' id='email'  onChange={(e)=>{setEmail(e.target.value)}} />
      </div>
      <div className='form-group'>
        <label htmlFor='jobrole'>Job Role:</label>
        <select id='jobrole'  onChange={(e)=>{setJobRole(e.target.value)}}>
          <option value='' >Select a job role</option>
          <option value='developer'>Developer</option>
          <option value='tester'>Tester</option>
        </select>
      </div>
      <button type='submit'>Submit</button>
    </form>
      {/*Display Data*/}
      <div className="res">{loadData?`${userName}-${email}-${jobRole}`:''}</div>
    </div>
  )
}

export default FormControlled
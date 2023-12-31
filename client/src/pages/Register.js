import { useEffect,useState} from 'react';//, useEffect
import { useNavigate} from 'react-router-dom';//, useEffect
import { Logo, Formin, Alert } from '../component';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { useAppContext } from '../context/appContext';
import '../index.css'

const Register = () => {
  document.title = 'JOBIFY-Register';
 
  let navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const { isLoading, showAlert, displayAlert ,registerUser,user} = useAppContext();

  
  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, password, name ,location } = form;
    if (!email || !password || !name || !location) {
      displayAlert();
      return;
    }
    const currentUser = {name,  email ,password,location};
    registerUser(currentUser);
    // const response = await fetch("http://localhost:5000", {
    //   method: 'POST',
    //   body: JSON.stringify(form),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
  //   if (response.status === 200) {
  //     const data = await response.json();
  //     console.log(data);
  //     navigate('/login');


  //   } else {
      
  //      displayAlert();
  //   }
  //   console.log(response);
  }
  const toggelmember = () => { navigate('/login'); }
  const pass = document.getElementById("password");


  const showpass = () => {
    if (pass.type === "password") {
      pass.setAttribute('type', 'text');
    } else {
      pass.setAttribute('type', 'password');
    }
  }
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    setForm({ ...form, [e.target.name]: e.target.value })
  }



   useEffect( ()=>{
    if(user){
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    }
    },[navigate, user]);

  return (
    <>
      <Wrapper className='full-page'>
        <form className='form' onSubmit={onSubmit}>
          <Logo />
          <h3>REGISTER</h3>
          {showAlert && <Alert />}
          {/*<Alert alert={"success"}/>*/}

          {/* name field */}


          
            <Formin
              type={"text"}
              value={form.name}
              name={"name"}
              onChange={handleChange}
            />
            <Formin
              type={"text"}
              value={form.location}
              name={"location"}
              onChange={handleChange}
            />

          <Formin
            type={"email"}
            value={form.email}
            name={"email"}
            onChange={handleChange}
          />
          <Formin
            type={"password"}
            value={form.password}
            name={"password"}
            onChange={handleChange}
            checkbox={true}
            confirm={!form.password}
            func={showpass}
          />

          {/* {form.password.length >= 0 && form.password.length} */}





          <button type='submit' className='btn btn-block' disabled={isLoading || !form.email || form.password < 8  || !form.name || !form.location} >
            submit
          </button>


          <p>
             Alredy Member?
            <button type='button' className='member-btn' onClick={toggelmember}>
             LOGIN 
            </button>
          </p>



        </form>

      </Wrapper>


    </>
  )
}

export default Register

import React,{useState} from 'react';
import axios from 'axios';

const registerUrl ='https://9vzyr5o0sh.execute-api.eu-north-1.amazonaws.com/dev/register';

const Register = () => {
        const [name,setName]=useState('');
        const [email,setEmail]=useState('');
        const [username,setUsername]=useState('');
        const [password,setPassword]=useState('');
        const [message,setMessage]=useState(null);

        const submitHandler = (event) =>{
            event.preventDefault();
            if(username.trim()=== ''||email.trim()=== ''||name.trim()=== ''||password.trim()=== ''){
                    setMessage('All fields are required');
                    return;
            }
            setMessage(null);
            const requestConfig ={
                headers:{
                    'x-api-key':'Auc6JXu2UyRXj3LZOnPK9862sAAPYT6tO0yWF100'
                }
            }
            const requestBody = {
                username: username,
                email: email,
                name:name,
                password:password
            }
            axios.post(registerUrl,requestBody,requestConfig).then(response =>{
                setMessage('Registration Successfull');
                }).catch(error => {
                    if( error.response.status === 401 ||error.response.status === 403 ){
                        setMessage(error.response.data.message);
                    }else{
                        setMessage('sorry.... the backend server is down!! please try again later');
                    }
                })
            

        
        }




    return (
        <div>
            <form onSubmit={submitHandler}>
                <h5>Register</h5>
                name:<input type="text" value={name} onChange={event =>setName(event.target.value)}/><br/>
                email:<input type="email" value={email} onChange={event =>setEmail(event.target.value)}/><br/>
                username:<input type="text" value={username} onChange={event =>setUsername(event.target.value)}/><br/>
                password:<input type="password" value={password} onChange={event =>setPassword(event.target.value)}/><br/>
                <input type="submit" value="Register" />

            </form>
            {message && <p className="message">{message}</p>}
        </div>
    )
}

export default Register;
 

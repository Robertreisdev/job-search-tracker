import React from 'react'
import {Form} from 'antd'
import Input from 'antd/lib/input/Input'
import { Link, useNavigate } from 'react-router-dom'
import '../assets/sign-in.css'
import { Navigate } from 'react-router-dom'
import axios from 'axios'


const Login = () => {
    const [loading,setLoading] = useState(true);
    const navigate = useNavigate()
    const onSubmit = async (e) => {
        try{
            setLoading(false)
            const response = await axios.post('api/users/login')
            message.success("Login attempt sucessful")
            navigate.('/')
        }catch(error){
            message.error("login attempt failed",error)
        }      
    }


  return (
    <div className="auth">
        <div className='row justify-conent-center align-items-center w-100 h-100'>

           

            <div className="col-md-5">
                <Form layout="vertical" onSubmit={onSubmit}>
                    <h1 className="auth-form-title">Job Tracker!</h1>
                    <Form.Item label="Name" name="name">
                        <Input/>
                    </Form.Item>

                    <Form.Item label="Email" name="email">
                        <Input/>
                    </Form.Item>

                    <Form.Item label="Password" name="password">
                        <Input/>
                    </Form.Item>

                    <div className="d-flex justify-content-between align-items-center">
                    <Link to="/register">Don't have an Account yet?, Click here Register</Link>
                        <button className="primary" type="submit">Login</button>
                    </div>


                </Form>
            </div>

            <div className="col-md-5">

                <div className="jobserach-animation">
                    <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_lgk0wqey.json"  background="transparent"  speed="1"   loop autoplay></lottie-player>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Login;
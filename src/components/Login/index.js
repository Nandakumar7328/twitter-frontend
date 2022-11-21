import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
    state = {username:'',password:'' , error:'',showError:false} 

    onSubmitSuccess = (jwtToken) => {
        const {history} = this.props 
        Cookies.set("jwt_token",jwtToken,{
            expires:30,
            path:'/'
        })
        
        history.replace('/')
    }
   

    onSubmitUserDetails = async event => {
        event.preventDefault()
        const {username,password} = this.state
        const userDetails = {
            username,
            password
        }
        const url = 'https://twitter-clone-testing.herokuapp.com/login/'
        const options = {
            method:"POST",
            body:JSON.stringify(userDetails) ,
            headers:{
                'Content-Type': 'application/json',
                accept: 'application/json',
            }
        }
        const response = await fetch(url,options) 
       

        if(response.ok === true){
           
            const data = await response.json()
            this.onSubmitSuccess(data.jwtToken)
        }
        else{
           this.setState({error:"invalid user",showError:true})
        }
    }

    onCahngeUsername = event => {
        this.setState({username:event.target.value})
    }

    onChangePassword = event => {
        this.setState({password:event.target.value})
    }

    render(){
        const {username,password,error,showError} = this.state 
        const jwtToken = Cookies.get("jwt_token")
        if (jwtToken !== undefined){
            return <Redirect to="/" />
        }
        return(
            <div className='main-login-container'> 
              <form className='form-container' onSubmit={this.onSubmitUserDetails}>
                <h1>Login User</h1>
                <label className='user-label' htmlFor='username'>username</label>
               <input id='username' placeholder='username' className='username' type="text" value={username} onChange={this.onCahngeUsername}/>
                <label className='user-label' htmlFor='password'>password</label>
               <input id='password' placeholder='password' className='username' type="text" value={password} onChange={this.onChangePassword}/>
               <button className='btn-login' type='submit'>Login</button>
               {showError && <p className='error-class'>*{error}</p>}
              </form>
            </div>
        )
    }
}

export default Login 
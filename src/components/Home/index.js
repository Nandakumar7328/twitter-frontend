import {Component} from 'react'
import Cookie from 'js-cookie'
import TwitList from '../TwitList'
import './index.css'

class Home extends Component {
     state = {twitsList:[]}
     
     componentDidMount(){
        this.getTwits()
     }

     getTwits = async () => {
        const jwtToken = Cookie.get("jwt_token")
        console.log(jwtToken)
        const url = 'https://twitter-clone-testing.herokuapp.com/user/tweets/feed/'
        const options = {
            method:"GET",
            headers:{
                Authorization: `Bearer ${jwtToken}`,
            }
        }

        const response = await fetch(url,options)
        const data = await response.json()
        if(response.ok === true){
            this.setState({twitsList:data})
        }
     }

    render(){
        const {twitsList} = this.state
        
        return(
           <div className='home-container-main'>
           <h1>User Twitt's</h1>
           <ul className='ul-container'>
            {twitsList.map(eachTwit => (
                <TwitList key={eachTwit.username} twitDetails={eachTwit}/>
            ))}
           </ul>
           </div>
        )
    }
}

export default Home 
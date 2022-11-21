import './index.css' 

const TwitList = props => {
    const {twitDetails} = props 
    const {username,tweet,dateTime} = twitDetails 

    return(
    <li className="li-container">
    <h1>{username}</h1>
    <p>{tweet}</p>
    <p>{dateTime}</p>
    </li>
    )
}

export default TwitList 
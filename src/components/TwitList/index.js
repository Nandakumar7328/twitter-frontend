import './index.css' 

const TwitList = props => {
    const {twitDetails} = props 
    const {username,tweet,dateTime} = twitDetails 
    const colorEach = ["color1" ,"color2","color3" ,"color4","color5" ,"color6",] 
    const selectedColor = colorEach[Math.floor(Math.random()* colorEach.length)]

    return(
    <li className="li-container">
    <div className="name-container">
    <h1 className={`name-first-letter ${selectedColor}`}>{username[0].toUpperCase()}</h1>
    <h1>{username}</h1>
    </div>
    <p>{tweet}</p>
    <p>{dateTime}</p>
    </li>
    )
}

export default TwitList 
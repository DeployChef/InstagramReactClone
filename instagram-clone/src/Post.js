import React from 'react'
import './Post.css'

function Post() {
    return (
        <div className="post">

            <h3>UpNova</h3>
            {/*Header -> avatar + username */}

            <img className="post__image" src="https://lh3.googleusercontent.com/proxy/IXUw177pmDkIgfXXjZRy1LCBIntOruHEc5H1xm3wXZGcgKzWOf1F5U4sgNBKDwm0phYpQpq6757tCoqHB4Vl0ulXMZd3fI2NeS930V7KsBl6jXk"/>
             {/*image */}

            <h4>UpNova: caption</h4>
            <h4 className="post__text"><strong>edya</strong> WOW Awesome</h4>
              {/*username + caption */}
        </div>
    )
}

export default Post
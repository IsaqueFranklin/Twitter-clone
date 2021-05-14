import React, {useState} from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core'
import db from './firebase'

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
   
    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Isaque Franklin',
            username: 'isaquefranklin',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://images.unsplash.com/photo-1541185934-01b600ea069c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80'
        });

        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://images.unsplash.com/photo-1541185934-01b600ea069c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80" />
                    <input 
                    onChange={(e) => setTweetMessage(e.target.value)}
                    value={tweetMessage} 
                    placeholder="What's happening?" 
                    type="text" />
                </div>
                <input 
                onChange={(e) => setTweetImage(e.target.value)}
                value={tweetImage}
                className="tweetBox__imageInput" 
                placeholder="Enter image URL" 
                type="text" />
                <Button 
                onClick={sendTweet}
                type="submit"
                className="tweetBox__tweetButton">
                    Tweet
                </Button>
            </form>
        </div>
    )
}

export default TweetBox

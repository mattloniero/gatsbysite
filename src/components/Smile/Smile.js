import React, {useEffect, useState} from 'react';
import fetch from "node-fetch";
import "./smile.scss";

const Smile = () => {
    const [post, setPost] = useState('')
    const getPost = () => {
        fetch(`https://www.reddit.com/r/MadeMeSmile/hot.json?limit=1&raw_json=1`, {
	        "method": "GET",
            "headers": {
                "User-Agent": "web:localhost:8000:v1.0 (by /u/matt_loniero)",
            }
        })
        .then(response => response.json())
        .then(response => {
            setPost(response)
            console.log(response)
        })
        .catch(err => {
            console.error(err);
        });
    }
    // useEffect(() => {
    //     getPost();
    // },[post])
    if (post === '') {
        getPost();
    }
    return(
        <div className="row-3">
            {   
                post && (
                    <figure className="card">
                        <img
                            alt="Reddit Made Me Smile Post Preview Image"
                            src={post.data.children[0].data.thumbnail}
                        />
                        <figcaption><p><a className="card-link" href={`https://reddit.com${post.data.children[0].data.permalink}`}>{`${post.data.children[0].data.title}`}</a></p></figcaption>
                        <p className="subtitle"><a href={`https://reddit.com/${post.data.children[0].data.subreddit_name_prefixed}`}>{post.data.children[0].data.subreddit_name_prefixed}</a></p>
                    </figure> 
                )
            }         
        </div>
    )
}

export default Smile;
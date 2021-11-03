import React, {useState} from 'react';
import fetch from "node-fetch";
import NewsItem from './NewsItem';
import "./news.scss"

function News() {
    const [newsPost, setNewsPost] = useState(null)
    const getNewsPost = () => {
        fetch(`https://bing-news-search1.p.rapidapi.com/news/search?freshness=Day&textFormat=Raw&safeSearch=Strict&q=Technology`, {
	        "method": "GET",
            "headers": {
                "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
                "x-rapidapi-key": "9445d8809dmsh3dd64d168da9a7ep12b8e2jsn5ee4c33053b1",
                "x-bingapis-sdk": "true"
            }
        })
        .then(response => response.json())
        .then(response => {
            setNewsPost(response)
        })
        .catch(err => {
            console.error(err);
        });
    }
    if (!newsPost) {
        getNewsPost();
    }
    return (
        <>
                {!newsPost
                    ? null
                    : newsPost.value.length === 0 ? <p><i>No results</i></p>
                    : <NewsItem item={newsPost.value[0]} />
                }
        </>
    )
}

export default News

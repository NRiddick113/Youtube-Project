import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {

    const [search, setSearch] = useState("")
    const [videos, setVideos] = useState([])

    const handleTextChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = () => {

        if (search === ""){
            setVideos([])
        } else { 
            fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${search}&key=${process.env.REACT_APP_API_KEY}&part=snippet&maxResults=24`)
            .then(res => res.json())
            .then(res => {
                setVideos(res.items)
            })
            .catch(err => console.log(err))
        }
    }

    useEffect(() => {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?order=rating&safeSearch=moderate&relevanceLanguage=en&key=${process.env.REACT_APP_API_KEY}&part=snippet&maxResults=24`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setVideos(res.items)})
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='home'>
            <input id='search' type='text' placeholder='Search by keywords' onChange={handleTextChange} />
            <input id='submit' type='submit' onClick={handleSubmit} />
            {
                //Error message if nothing searched
                videos?.length === 0 && <p id='error'>No Search Results Yet! Please submit a search above!</p> 
            }
            <div className='searches'>
            {
                videos?.map((video) => {
                    return (
                        <div key={video.id.videoId} className='video'>
                            <Link to={`/video/${video.id.videoId}`}>
                                <img src={video.snippet.thumbnails.medium.url} alt={search} ></img>  
                                <p className='title'>{video.snippet.title}</p>
                            </Link>
                            <p className='channel'>{video.snippet.channelTitle}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
}

export default Home;
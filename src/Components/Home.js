import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link, useParams } from 'react-router-dom'
import Video from './Video';
import './Home.css'

function Home() {

    const [search, setSearch] = useState("")
    const [videos, setVideos] = useState([])
    const { id } = useParams()
    let navigate = useNavigate()

    const handleTextChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = () => {

        if (search === ""){
            setVideos([])
        } else { 
            fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${search}&key=${process.env.REACT_APP_API_KEY}&part=snippet`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setVideos(res.items)
            })
            .catch(err => console.log(err))
        }
        console.log(videos)
    }

    const handleClick = () => {
        navigate(`/video/${id}`)
    }

    return (
        <div>
            <input type='text' placeholder='Enter search' onChange={handleTextChange} />
            <input type='submit' onClick={handleSubmit} />
            {
                //Error message if nothing searched
                videos.length === 0 && <p>No Search Results Yet! Please submit a search above!</p> 
            }
            {
                videos.map((video) => {
                    return (
                        <div key={video.id.videoId} className='video'>
                            <Link to={`/video/${video.id.videoId}`}>
                                <img src={video.snippet.thumbnails.medium.url} alt={search} ></img>  
                                <p>{video.snippet.title}</p>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Home;
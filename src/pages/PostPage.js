import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function PostPage(props){

    const [activePost, setActivePost] = useState({});
    const [activePostId, setActivePostId] = useState(0);

    useEffect(()=>{
        const fetchPost = async (postId) => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + postId)
            setActivePost(response.data)
        }

        fetchPost(activePostId)
    }, [activePostId])

    return(
        <React.Fragment>
            <h1>Posts</h1>
            <h2>Active Post</h2>
            <input  type="text"
                    value={activePostId}
                    name="activePostId"
                    onChange={(event)=> setActivePostId(event.target.value)}
            />
            <div class="card">
                <div class="card-title">
                    {activePost.title}
                </div>
                <p>
                    {activePost.body}
                </p>
            </div>

        </React.Fragment>
    )
}
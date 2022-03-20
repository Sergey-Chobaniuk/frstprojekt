import React from "react";
import Post from './Post/Post.jsx';
import './MyPosts.module.css';
const MyPosts = () =>{
    return(
        <div>
            My Post
            <div>
                {/*New Posts*/}
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}
export default MyPosts;
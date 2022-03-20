import React from "react";
import Post from './Post/Post.jsx';
import './MyPosts.module.css';
const MyPosts = () => {
    return(
        <div>
            My Post
            <div>
                {/*New Posts*/}
                <textarea> </textarea>
                <button>Add post</button>
            </div>
            <Post message={'Hi, how are you?'} Number_of_likes={'15'} />
            <Post message={"It's my first post"} Number_of_likes={"20"} />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}
export default MyPosts;
import React from "react";
import Post from './Post/Post.jsx';
import m from './MyPosts.module.css';
const MyPosts = () => {
    return(
        <div className={m.myposts}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea> </textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
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
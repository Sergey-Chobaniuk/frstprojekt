import React from "react";
import Post from './Post/Post.jsx';
import m from './MyPosts.module.css';
const MyPosts = () => {
    let posts = [
        {id:1, message: 'Hi, how are you?', likesCount: 12},
        {id:2, message: 'It\'s my first post', likesCount: 25},
        {id:3, message: 'how are you', likesCount: 1},
        {id:4, message: 'a', likesCount: 12},
        {id:5, message: 'awffaffff', likesCount: 122},
        {id:6, message: 'ttttttttttttttttttt', likesCount: 112},
    ]
    let postElements = posts.map(p=><Post message={p.message} likesCount={p.likesCount}/>);

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
            {postElements}
        </div>
    )
}
export default MyPosts;
import React from "react";
import Post from './Post/Post.jsx';
import m from './MyPosts.module.css';


const MyPosts = (props) => {
    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    return (
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
import React from "react";
import Post from './Post/Post.jsx';
import m from './MyPosts.module.css';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../State/state";



const MyPosts = (props) => {
    let postElements = props.posts.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    let newPostElement = React.createRef();
    let addPost= () =>{
        debugger;
        props.dispatch(addPostActionCreator());
    };
    let onPostChange = () => {
        props.dispatch(onPostChangeActionCreator(newPostElement.current.value));
        /*alert(text);*/
    };
    return (
        <div className={m.myposts}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.posts.newPostText}> </textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {postElements}
        </div>
    )
}
export default MyPosts;
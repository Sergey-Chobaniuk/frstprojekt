import React from "react";
import Post from './Post/Post.jsx';
import m from './MyPosts.module.css';



const MyPosts = (props) => {
    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    let newPostElement = React.createRef();
    let addPost= () =>{
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.newOnCheingePostText(text);
        /*alert(text);*/
    };
    return (
        <div className={m.myposts}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}> </textarea>
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
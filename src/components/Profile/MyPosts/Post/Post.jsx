import c from "./Post.module.css";
import React from "react";
const Post = () =>{
    return (
        <div className={c.item}>
            <div>
                <img src={'https://salvemusic.com.ua/wp-content/uploads/2020/02/ava-max.jpg'}/>
            </div>
            Post 1,2,3,..
            <div>
                <span>like</span>
            </div>
        </div>
    )
}
export default Post;

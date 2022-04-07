import c from "./Post.module.css";
import React from "react";

const Post = (props) => {
debugger;
    return (
        <div className={c.item}>
            <div>
                <img src={'https://salvemusic.com.ua/wp-content/uploads/2020/02/ava-max.jpg'}/>
            </div>
            {props.message}
            <div>
                <span>like</span>
                {props.likesCount}
            </div>
        </div>
    )
}
export default Post;

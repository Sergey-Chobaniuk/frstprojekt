import React from "react";
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.profileData.posts} addPost={props.profileData.addPost} />
        </div>
    )
}
export default Profile;
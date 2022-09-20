import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div className={s.profile}>
            <div>
                <ProfileInfo/>
                <MyPostsContainer store={props.store}/>
            </div>
        </div>
    )
}

export default Profile
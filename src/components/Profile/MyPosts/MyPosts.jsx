import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";


const MyPosts = (props) => {
    let postElements = props.postData.map(post => <Post text={post.postText}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostTextAreaChange = () => {
        let newText = newPostElement.current.value
        props.dispatch(updateNewPostTextActionCreator(newText))
    }

    return (
        <div className={s.myPosts}>
            My posts
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostTextAreaChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts
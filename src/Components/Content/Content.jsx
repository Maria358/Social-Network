import s from './Content.module.css'
import ContentInfo from "./ContentInfo/ContentInfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Content = (props) => {
    return (
        <div className={s.content}>
            <ContentInfo isOwner={props.isOwner} savePhoto = {props.savePhoto}
                         profile = {props.profile} status={props.status}
                         updateStatus={props.updateStatus} saveData={props.saveData}/>
            <MyPostsContainer />
        </div>
    )
}

export default Content;
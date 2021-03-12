import s from './Content.module.css'
import ContentInfo from "./ContentInfo/ContentInfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Content = (props) => {
    return (
        <div className={s.content}>
            <ContentInfo profile = {props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    )
}

export default Content;
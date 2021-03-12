import s from './Post.module.css'


const Post = (props) => {
    return (
         <div className = {s.item}>
             <img src = 'https://i.pinimg.com/474x/04/f3/e5/04f3e5693a319427bdea32d626d6a3fd.jpg'/>
           {props.message}
           <div>
               <span>likes: </span> {props.likeCount}
           </div>
           </div>
         
    )
}

export default Post;
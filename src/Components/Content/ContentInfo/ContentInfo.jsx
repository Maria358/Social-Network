import s from './ContentInfo.module.css'
import Preloader from "../../Common/Preloader";
import {StatusProfile} from "./StatusProfile";



const ContentInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <StatusProfile status ={props.status} updateStatus={props.updateStatus}/>
    )
}

export default ContentInfo;
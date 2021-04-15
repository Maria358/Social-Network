import Preloader from "../../Common/Preloader";
import StatusProfileWithHooks from "./StatusProfileWithHooks";
import s from './ContentInfo.module.css'
import {useState} from "react";
import {Formik, Form, Field} from 'formik';


const ContentInfo = (props) => {

    let userPhoto = 'https://i.pinimg.com/564x/71/c4/f3/71c4f37425bd3775d98bfaedbf349823.jpg'
    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const onChangeMainPhoto = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <img src={props.profile.photos.large || userPhoto} className={s.avatar}
                 hspace="7" vspace="7"/>

            {props.isOwner && <input type={'file'} onChange={onChangeMainPhoto}/>}

            {editMode ? <ProfileEdit profile={props.profile}
                                     saveData={props.saveData}
                                     setEditMode={() => {
                                         setEditMode(false)
                                     }}/>
                : <ProfileData profile={props.profile} setEditMode={() => {
                    setEditMode(true)
                }}/>}

            <b>Status</b>:<StatusProfileWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
}

export const ProfileData = ({profile, setEditMode}) => {
    return <div>
        <button onClick={setEditMode}>Edit</button>
        <div className={s.info}>
            <div>
                <b>Full name</b>: {profile.fullName}
            </div>
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            <div>
                <b>Job description</b>: {profile.lookingForAJobDescription}
            </div>
            <div>
                <b>Contacts</b>:{Object.keys(profile.contacts).map((key) => {
                return <div className={s.contacts}><b>{key}</b>: {profile.contacts[key]}</div>
            })}
            </div>
        </div>
    </div>
}
export const ProfileEdit = ({profile, saveData, setEditMode}) => {
    return <div>
        <Formik
            initialValues={{
                fullName: "",
                aboutMe: "",
                lookingForAJob: '',
                lookingForAJobDescription: '',
                github: '',
                vk: '',
                facebook: '',
                instagram: '',
                twitter: '',
                website: '',
                youtube: '',
                mainLink: ''
            }}
            //validationSchema={BasicFormSchema}
            onSubmit={values => {
                debugger
                saveData(values)
                setEditMode()
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                }, 500);
            }}

            render={(props) => (
                <Form>
                    <div className={s.input}>
                        <button type={'submit'}>Save</button>
                        <div>
                            <b>Full name</b> <Field name={'fullName'} placeholder={'Full name'}/>
                        </div>
                        <div>
                            <b>About me</b> <Field name={'aboutMe'} placeholder={'About me'}/>
                        </div>
                        <div>
                            <b>Looking for a job</b> <Field name={'lookingForAJob'} type={'checkbox'}/>
                        </div>
                        <div>
                            <b>Job description</b> <Field name={'lookingForAJobDescription'}
                                                          placeholder={'Job description'}/>
                        </div>
                        <div>
                            <b>Contacts</b>:{Object.keys(profile.contacts).map((key) => {
                            return <div className={s.contacts}>
                                <b>{key}</b>: <Field name={'contacts.' + key} placeholder={key}/>
                            </div>
                        })}
                        </div>
                    </div>
                </Form>
            )}
        />
    </div>

}

export default ContentInfo;
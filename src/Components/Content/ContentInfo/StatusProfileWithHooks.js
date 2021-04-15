import * as React from "react";
import {useEffect, useState} from "react";

const StatusProfileWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    let activateEditMode = () => {
        setEditMode(true)
    }

        return (
            <div>
                <div>
                    {editMode
                        ? <input onChange={onStatusChange} autoFocus={true} value={status} onBlur={deactivateEditMode}/>
                        : <span onDoubleClick={activateEditMode}>{props.status || '--------'}</span>}
                </div>
            </div>
        )


}
export default StatusProfileWithHooks
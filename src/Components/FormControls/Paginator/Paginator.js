import styles from "./paginator.module.css";
import React, {useState} from "react";

const Paginator = (props) => {
    debugger
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    let rightPortionPageNumber = (portionNumber * props.portionSize)

    return <div className={styles.paginator}>
        <div>
            {portionNumber > 1 && <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>Prev</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                return <span className={(props.currentPage === p) && (styles.activePage)}
                             onClick={(e) => {
                                 props.onPageChange(p)
                             }}>{p} </span>
            })}
            {portionCount > portionNumber && <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>Next</button>}
        </div>
        </div>
}
export default Paginator
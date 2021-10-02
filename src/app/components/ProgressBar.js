import React from 'react'

function ProgressBar({progress}) {
    return (
        <div className='progresBars'>{progress === 25 ? <span> <div></div> </span> : progress === 50 ?
            <span> <div></div> <div></div> </span>: progress === 75 ? <span> <div></div> <div></div> <div></div> </span>: null   }</div>
    )
}

export default ProgressBar

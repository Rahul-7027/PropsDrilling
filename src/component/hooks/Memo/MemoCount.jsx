import React, { useRef } from 'react'

const MemoCount = () => {
    const refCount = useRef(0)

    return (
        <div>
            <div>
                <h2>Use Memo Hooks</h2>
                <h4>Nothing changed here but i have noew re-render </h4>
                <span>{refCount.current++}</span>
            </div>
        </div>
    )
}

export default React.memo( MemoCount)

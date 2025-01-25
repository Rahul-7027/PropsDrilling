import React, { useRef } from 'react'

const MemoCount = ({data}) => {
    const refCount = useRef(0)

    return (
        <div>
            <div>
                <h2>Use Memo Hooks</h2>
                <h4>Nothing changed here but i have noew re-render </h4>
                <span>{refCount.current++}</span>
                <h2>
                  My name is  {data.name}
                </h2>
            </div>
        </div>
    )
}

export default React.memo( MemoCount)

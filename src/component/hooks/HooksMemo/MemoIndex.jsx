import React, { useState, useMemo } from 'react';

const MemoIndex = () => {
    
    const totalSum = () => (1000000 * (1000000 + 1))

    return (
        <div>
            <p>{totalSum}</p>
            <MemoParent />
        </div>
    );
};

export default MemoIndex;

const MemoParent = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <>
            <p>{count}</p>
            <button onClick={handleIncrement} type="button">
                Increment
            </button>
        </>
    );
};

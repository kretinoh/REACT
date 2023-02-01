import React, { useState } from 'react';

function Contador() {
    const [count, setCount] = useState(0);
    return (
        <div id={'card'}>
            <p>{count}</p>
            <div className={'buttons'}>
            <button onClick={() => setCount(count + 1)}>Sumar</button>
            <button onClick={() => setCount(count - 1)}>Restar</button>
            </div>
        </div>
    );
}

export default Contador;


import React, { useState, useEffect } from 'react';

const Example = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
    
      console.log('Component mounted or updated');
      return () => {
        console.log('Component will unmount');
      }
      
    }, [count]);
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
}

export default Example
import { useEffect, useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Count:', count);
  }, [count])


  return (
    <>
      <div>
        <h1>Count: {count}</h1>
        {/* Add buttons and functionality here */}
        {/* setCount(count === 10 ? `Nice! You Reached 10!` : count + 1)} */}
        <button 
          onClick={() => {
            const addCount = count + 1;
            if (addCount === 10) {
              alert('Nice! You reached 10!');
              setCount(0);
            } else {
            setCount(addCount);
            }
          }}
        >
          Add 1
        </button>
        {/* setCount(count > 0 ? count - 1 : 0) */}
        <button 
          onClick={() => {
            const subtractCount = count - 1;
            if (subtractCount === 0) {
              alert(`You have reached ${subtractCount}. DO NOT PASS GO. DO NOT COLLECT 32 CREDITS.`);
              setCount(0);
            } else {
              setCount(count > 0 ? subtractCount : 0);
            }
        }}>
          Subtract 1
        </button>
        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </>
  )
}

export default Counter
import { useEffect, useState } from 'react'

function Counter({alert, setAlert}) {
const messages = [
        "Hello, React props!",
        "Props make components reusable!",
        "React is awesome!",
        "You're learning fast!",
        "Keep clicking for more messages!",
      ];
  const [count, setCount] = useState(0);


  useEffect(() => {
    console.log('Count:', count);
  }, [count]);

  useEffect(() => {
    if (alert) {
        const timeout = setTimeout(() => {
            setAlert('');
        }, 3000);
        return () => clearTimeout(timeout);
    }
  }, [alert]);

  return (
    <>
    <div id='counter'>
        <h1 id='count'>
            <span style={{ textDecoration: "underline" }}>Count</span>: {count}
        </h1>
        {/* Add buttons and functionality here */}
        {/* setCount(count === 10 ? `Nice! You Reached 10!` : count + 1)} */}
        <button 
          onClick={() => {
            const addCount = count + 1;
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            if (addCount === 10) {
                setAlert(randomMessage);
                setCount(0);
            } else {
                setCount(addCount);
                setAlert('');
            }
          }}
          disabled={!!alert}
        >
          Add 1
        </button>
{/* setCount(count > 0 ? count - 1 : 0) */}
<button 
  onClick={() => {
    if (count === 0) {
        setAlert("Sorry! The limit does not exist!");
    } else {
    const subtractCount = count - 1;
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    if (subtractCount === 0) {
        setAlert(randomMessage);
        setCount(0);
    } else {
        setCount(count > 0 ? subtractCount : 0);
        setAlert('');
    }}
  }}
  disabled={!!alert}
>
  Subtract 1
</button>
<button 
  onClick={() => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    if (count === 0) {
        setAlert(randomMessage);
    } else {
        setCount(0);
        setAlert(randomMessage);
    }
  }}
  disabled={!!alert}
>
  Reset
</button>
</div>
<p>{alert && (
  <div id='alert' style={{
      position: 'fixed',
      bottom: '20px',
      transform: 'translateX(-50%)',
      backgroundColor: '#ffdddd',
      color: '#990000',
      padding: '1rem',
      borderRadius: '8px',
      marginBottom: '1rem',
      border: '1px solid #990000',
      textAlign: 'center',
      zIndex: 1000,
      minWidth: '300px',
  }}>
      {alert}
  </div>
)}</p>
    </>
  )
}

export default Counter
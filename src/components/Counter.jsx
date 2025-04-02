function Counter({ count, setCount, alert, setAlert }) {
  // -----Class Demo Code-----
  // const messages = [
  //         "Hello, React props!",
  //         "Props make components reusable!",
  //         "React is awesome!",
  //         "You're learning fast!",
  //         "Keep clicking for more messages!",
  //       ];

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
            // -----Class Code-----
            // const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            if (addCount === 10) {
                setAlert('Yay! You reached 10!');
                setCount(0);
            } else {
                setCount(addCount);
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
    // const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    if (subtractCount === 0) {
        setAlert('You have reached 0! DO NOT PASS GO. DO NOT COLLECT 32 CREDITS.');
        setCount(0);
    } else {
        setCount(count > 0 ? subtractCount : 0);
    }}
  }}
  disabled={!!alert}
>
  Subtract 1
</button>
<button 
  onClick={() => {
    // const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    if (count === 0) {
        setAlert("Haven't I been reset enough already?");
    } else {
        setCount(0);
    }
  }}
  disabled={!!alert}
>
  Reset
</button>
</div>
{/* {alert && (
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
)} */}
    </>
  )
}

export default Counter
function Alert ({ alert, setAlert }){
    return (
        <>
        {alert && (
  <div id='alert' style={{
    //   position: 'fixed',
    //   bottom: '20px',
      backgroundColor: '#ffdddd',
      color: '#990000',
      padding: '1rem',
      borderRadius: '8px',
      margin: '1rem auto',
      border: '1px solid #990000',
      textAlign: 'center',
      minwidth: '100px',
      maxWidth: '600px',
      width: '50%',
  }}>
      {alert}
  </div>
)}
        </>
    )
}

export default Alert
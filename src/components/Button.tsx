import * as React from 'react';


type PropsType = {
    children: React.ReactNode;
}
const Button = ({children}: PropsType) => {
  return (
    

    <button style={{
        display: 'inline-block',
        padding: '10px 20px',
        fontSize: '16px',
        fontWeight: 'bold',
        textAlign: 'center',
        textDecoration: 'none',
        border: '2px solid #4CAF50',
        color: '#4CAF50',
        backgroundColor: 'transparent',
        borderRadius: '5px',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        outline: 'none',
      }}>
  {children}
</button>
  )
}




export {Button}
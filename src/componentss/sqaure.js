import React from 'react';

const Sqaure = (props) => {
   
    
    return (
        <div   onClick={props.onClick} style={{width:'100%',height:'100px',border:'2px solid tan',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <h1>{props.value}</h1>
        </div>
    );
}

export default Sqaure;

import React, { useState } from 'react'
function Counter() {
    const [count, setCount] = useState(0);

    function increaseCount()
    {
        if(count<10)
        {
            setCount(p => p + 1);
        }
    }

    function resetCount()
    {
        setCount(0);
    }

    function decreaseCount()
    {
        if(count>-10)
        {
            setCount(p => p - 1);
        }
    }

    function CheckStatus({count})
    {
        if(count<0)
        {
            return <span style={{color: "Red"}}>Negative</span>;
        }
        else if(count === 0)
        {
            return <span style={{color: "Azure"}}>Zero</span>;
        }
        else
        {
            return <span style={{color: "Green"}}>Positive</span>;
        }
    }

  return (
    <div>
        <h1>Welcome to Counter App</h1>
        
        <br />
        
        <button onClick={increaseCount} style={{height: "20px", width : "40px", padding: "10px 10px", display: "flex", justifyContent: "center", alignItems: "center", margin: "auto" , font: "20px"}}>
            +
        </button>
        
        <br />
        <br />
        
        <p>
          Value : <span style={{color: count > 0 ? "green" : count < 0 ? "red" : "white"}}>
                {count}
                </span>
        </p>
        <p>Status : {CheckStatus({count})}</p>
        
        <br />
        
        <button onClick={decreaseCount} style={{height: "20px", width : "40px", padding: "10px 10px", display: "flex", justifyContent: "center", alignItems: "center", margin: "auto" , font: "20px"}}>
            -
        </button>
        <br />
        <button onClick={resetCount}>Reset</button>
    </div>
  )
}

export default Counter
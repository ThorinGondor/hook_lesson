import {useState, useEffect} from "react";

// 本节演示 useEffect 的 return ()=> {} 函数如何清除副作用
function Component() {

    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log('定时器启动')
        }, 1000)
        return () => { // 生命周期销毁函数
            console.log('销毁定时器')
            clearInterval(timer) // 此处清除副作用
        }
    })

    return (
        <h3>This is a Component</h3>
    )
}

function App() {

    const [flag, setFlag] = useState(true)

    return (
        <div>
            {flag?<Component/>:null}
            <button onClick={()=> setFlag(!flag)}>switch</button>
        </div>
    )
}
export default App
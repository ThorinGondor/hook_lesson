// 本节介绍 如何使用 useContext 代替之前的解构 createContext 为 Provider 和 Consumer 的方式进行通信
/**
 * App -> A--> B，然后 App 跨组件将 msg 传递给 B
 */
import {useState, useContext, createContext} from "react";

// 1. 先引入 createContext
const Context = createContext()

function ComponentA() {

    // 此处就可以共享 父组件传来的 context
    const count = useContext(Context)

    return (
        <div>
            This is ComponentA
            <br/>
            ComponentA get count: {count}
            <ComponentB/>
        </div>
    )
}

function ComponentB() {

    // 此处就可以共享 父组件传来的 context
    const count = useContext(Context)

    return (
        <div>
            This is ComponentB
            <br/>
            ComponentA get count: {count}
        </div>
    )
}
function App() {

    const [count, setCount] = useState(0)

    return (
        <Context.Provider value={count}>
            <div>
                <button onClick={()=>setCount(count + 1)}>+</button>
                <ComponentA/>
            </div>
        </Context.Provider>
    )
}

export default App
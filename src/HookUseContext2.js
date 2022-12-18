import {useContext, useState} from "react";

// 本节介绍一些 hook 补充知识
// 此处，将 Context 的声明放到了一个 util 包里，以后直接从包里导出 Context 即可，无需在此处声明，这样分工和代码职责更加明确
import Context from "./utils/HookContext";

function ComponentA() {

    // 此处就可以共享 父组件传来的 context
    const count = useContext(Context)

    return (
        <div>
            This is the ComponentA
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
            This is the ComponentB
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
                <button onClick={() => setCount(count + 1)}>+</button>
                <ComponentA/>
            </div>
        </Context.Provider>
    )
}

export default App
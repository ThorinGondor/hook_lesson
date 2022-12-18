// 本节介绍 useRef 的使用
/**
 * 使用步骤：
 * 1. 导入 useRef 函数
 * 2. 执行 useRef 函数并传入 null，返回值为一个对象，内部有一个 current 属性存拿到的 dom 对象（组件实例）
 * 3. 通过 ref 绑定要获取的元素或组件
 */

// 1. 导入 useRef 函数
import {useEffect, useRef} from "react";
import React from "react";

class ClassComponent extends React.Component {

    getName = () => {
        return 'This is a name'
    }

    render() {
        return (
            <div>This is a class component</div>
        )
    }
}

function App() {

    // 2. 使用 useRef 函数，传值 null 返回一个组件实例
    const refClassComponentInstance = useRef(null)
    const redRefCompInstance = useRef(null)
    const blueRefCompInstance = useRef(null)

    useEffect(() => {
        // 即可在此获取到组件实例的 current 属性
        console.log(refClassComponentInstance.current)
        console.log(refClassComponentInstance.current.getName())// current 属性很全面，能够展示 dom 信息，还能够展示并调用类组件的state属性、以及各种方法
        console.log(redRefCompInstance.current)
        console.log(blueRefCompInstance.current)
    }, []) // useEffect 是在dom渲染完成之后才执行！所以虽然他和 vue 的 watch 很像，但是vue的 watch 在一开始就可以监听，而 react 的 useEffect 则是在之后

    return (
        <div>
            {/* 3. 通过 ref 绑定元素 */}
            <ClassComponent ref={refClassComponentInstance}/>
            <h3 ref={redRefCompInstance} style={{color: "red"}}>This is H3</h3>
            <h3 ref={blueRefCompInstance} style={{color: "blue"}}>This is H3</h3>
        </div>
    )
}

export default App
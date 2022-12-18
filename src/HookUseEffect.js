// useEffect hook 副作用
/**
 * 副作用定义：一个函数，除了主作用（根据传递的数据 state/ props 渲染UI），其他都是副作用
 * 常见的副作用：
 * 1. 手动修改DOM
 * 2. 数据请求 ajax 发送
 * 3. localstorage 操作
 * 当我们更新组件时，useEffect 副作用也会不断执行，这点和 useState 不同
 */
import {useState} from "react";
import {useEffect} from "react"; // 1. 引入 useEffect 函数

function App() {
    const [data, alterData] = useState(0)
    const [list, alterList] = useState([3, 2, 1])


    // 2. 在函数组件中引入 useEffect 函数，传入回调，并定义副作用
    // useEffect(() => {
    //     // 此处定义副作用
    //     document.title = count.toString();
    // })
    //
    // useEffect(() => {
    //     // 此处定义副作用
    //     console.log('Origin');
    // }, []) // 如果像这样，添加一个空数组，这个副作用就会只在首次渲染时执行一次

    useEffect(() => {
        // 此处定义副作用
        console.log('依赖 变化');
        document.title = data.toString();
    }, [data]) // 特定依赖项，如果依赖的参数发生覆写，此处才会执行


    function alter2() {
        alterData(data + 1)
        alterList(list.reverse())
    }

    return (
        <div>
            <button onClick={() => alterData(data + 1)}>{data}</button>
            <button onClick={() => alter2()}>{list.join('-')}</button>
        </div>
    )
}

export default App
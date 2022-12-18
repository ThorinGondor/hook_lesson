// useEffect 清除副作用
import {useEffect} from "react";

// 本案例，useEffect 下 return () => {} 清除定时器，其实相当于是一个生命周期销毁函数
function App() {

    useEffect(() => {
        const timer = setInterval(() => {
            console.log('定时器执行')
        })
        return () => {
            console.log('清理定时器')
            clearInterval(timer)
        }
    })

    return (
        <div>
        </div>
    )
}

export default App
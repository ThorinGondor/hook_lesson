// 本节是示范如何自定义一个 hook
import {useState, useEffect} from "react";

function useWindowScroll() {
    const [y, setY] = useState(0);
    // 在滚动行为发生的时候不断获取滚动值，更新y
    window.addEventListener('scroll', ()=>{
        const h = document.documentElement.scrollTop
        setY(h)
    })
    return [y]
}

function App() {

    const [y] = useWindowScroll()

    return (
        <div style={{height: '1200px'}}>{y}</div>
    )
}
export default App
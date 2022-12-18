// 本节需求：自定义一个 hook 函数 useLocalStorage，可自动信息同步到本地 localStorage
import {useState, useEffect} from "react";

function useLocalStorage(key, defaultValue) {
    const [msg, setMsg] = useState(defaultValue);
    useEffect(() => {
        // 存入 浏览器本地 storage，可在 debug => Application => Storage => LocalStorage 观察到
        window.localStorage.setItem(key, msg)
    }, [msg, key])
    return [msg, setMsg];
}

function App() {

    const [msg, setMsg] = useLocalStorage('hook-key', 'coffee')

    setTimeout(() => {
        setMsg('LXZ')
    }, 5000)

    return (
        <div style={{height: '1200px'}}>
            {msg}
        </div>
    )
}

export default App
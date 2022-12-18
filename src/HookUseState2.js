import './App.css';
// 组件的更新
import {useState} from "react";

function Hook() {
    const [count, alterCount] = useState(0)
    const [list, alterList] = useState([3, 2, 1])
    const [data, alterData] = useState(() => {
        // 若 useState 的初始值 需要一定的逻辑计算才能获取，可以写成这样的回调的形式 useState(() => { return 初始值 })
        return 'Kimi';
    })

    function alter() {
        alterCount(count + 1)
        alterList(list.reverse())
    }

    return (
        <div>
            <button onClick={() => alter()}>{count}</button>
            <p>{list.join('-')}</p>
            <p>{data}</p>
        </div>
    )
}

export default Hook;

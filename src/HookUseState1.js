import './App.css';
// 组件的更新
import {useState} from "react";

function Hook() {
    // 此处传初始值 0 只在首次渲染时生效！下次渲染，会拿最新的 count 值作为基础值，而不是0
    // 更新渲染 alterCount 都会更新
    const [count, alterCount] = useState(0)
    return (
        <div>
            <button onClick={() => alterCount(count + 1)}>{count}</button>
        </div>
    )
}

export default Hook;

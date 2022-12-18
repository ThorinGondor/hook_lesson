import './App.css';
// useState hook 将给予函数状态，这之前函数都是无状态的
/* 1. 导入 useState 函数 (from react)
 * 2. 执行这个函数 并传入初始值 必须在函数组件中
 * 3. 解构 [数据, 自定义一个新数据的方法] (注：可以发现此处不是 {} 解构了，而是 []，因为 useState 函数返回值是一个数组)
 * 4. 使用数据，传新数据
 * */
// 1. 导入
import {useState} from "react";

function Hook() {
    // 2. 执行这个函数，传入初始值 0
    // 3. 解构 [数据, 自定义一个新数据的方法名称]
    const [count, alterCount] = useState(0)
    return (
        <div>
            {/* 4. 使用数据，修改数据 */}
            <button onClick={() => alterCount(count + 1)}>{count}</button>
        </div>
    )
}

export default Hook;

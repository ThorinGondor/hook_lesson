import {useState, useEffect} from "react";
import React from "react";
// 本节演示 useEffect 发送网络请求

function App() {

    useEffect(() => {
        function getData() {
            fetch('https://4722a477-6a6a-4dbf-a854-f2a9d5f11999.mock.pstmn.io/data').then(resp => resp.json()).then(data => {console.log(data.data)})
        }
        getData()
    }, [])

    return (
        <div>
        </div>
    )
}
export default App
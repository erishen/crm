import React from 'react'

export default [
    {
        title: '圣杯布局 & 双飞翼布局',
        href: 'http://www.cnblogs.com/imwtr/p/4441741.html',
        desc: ()=>{
            return (<p>本布局采用双飞翼布局</p>);
        }
    },
    {
        title: 'DIV中的内容水平垂直居中',
        href: 'https://segmentfault.com/a/1190000003745881',
        desc: ()=>{
            return (
                <div className="contentContainer">
                    <div className="contentCenter">
                        测试文字测试文字测试文字测试文字测试文字测试文字测试文字
                    </div>
                </div>
            );
        }
    },
    {
        title: 'CSS Media 使用',
        href: '',
        desc: ()=>{
            return (<p>本布局使用 Media, 移动端显示已经处理</p>);
        }
    }
];
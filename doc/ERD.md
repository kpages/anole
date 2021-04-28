# 产品实现设计
## 术语说明
### SmartBoard

#### 简述
展示在交互界面的一个面板, 可以是一大屏，也可以是一个汇报报告或嵌入在指定Web 页面位置的一个小组件。

#### 架构

* Layout 展示及布局组件,觉得面板展示内容
* Render Layout 的渲染引擎, 由Layout 数据驱动, 输入Layout 数据, 输出Dom
* MessageCallBack 消息通信保障

#### Layout 构成
```
Demo1  children 为展示内容, Div 通常为父节点
{
    "type": "Div",
    "namespace": "dash_html_components",
    "props": {
        "children": "Div 展示内容",
    }
}

Demo2 嵌套输出, children 为嵌套内容
{
    "type": "Div",
    "namespace": "dash_html_components",
    "props": {
        "children": [
            {
                "props": {
                    "children": "Hello Dash"
                },
                "type": "H1",
                "namespace": "dash_html_components"
            },
            {
                "props": {
                    "children": "div text"
                },
                "type": "Div",
                "namespace": "dash_html_components"
            },
            {
                "props": {
                    "id": "example-graph",
                    "figure": {
                        "layout": {
                            "xaxis": {},
                            "yaxis": {}
                        },
                        "data": []
                    }
                },
                "type": "Graph",
                "namespace": "dash_html_components"
            },
        ],
    }
}
```






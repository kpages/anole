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

#### Render 构成
 dash render 通过api 获取 layout 的json ; 然后渲染到指定 dom 中, 可以满足在不同地方，嵌入面板的需求；但api 获取的内容只能是flask 服务提供的Python Layout； 需要重写他； 通过指定dashboard_id 和url 获取layout。 这种方案解决只读的渲染问题。

 在board 编辑时, 为了做到流畅编辑, 不建议做api 的一层数据交换, 需要重新定制一个editor; 同过js 调用，传入json渲染。
 参考 https://github.com/plotly/dash-renderer/blob/master/src/TreeContainer.js
 ? 每次都要重新渲染吗？ 是否可以局部渲染？

 ```
 let layout = {
    "type": "Div",
    "namespace": "dash_html_components",
    "props": {
        "children": "Div 展示内容",
    }
}
# Registry 参考 https://github.com/plotly/dash-renderer/blob/master/src/registry.js; 
利用 不同组件的 namespace及type 获取创建element 的 fn
const element = Registry.resolve(layout);

function createElement(element, props, extraProps, children) {
    const allProps = mergeRight(props, extraProps);
    if (Array.isArray(children)) {
        return React.createElement(element, allProps, ...children);
    }
    return React.createElement(element, allProps, children);
}
然后通过 createElement; 动态创建element

 ```






// import React from 'react'
//
// let clickX = new Array();
// let clickY = new Array();
// let clickDrag = new Array();
// let paint;
// let point = {notFirst:false};
// let canvasDiv = document.getElementById("canvas-wrap")
// let canvas = document.getElementById('canvas'); // 创建画板
// // let context = canvas.getContext("2d"); // 创建2d画布
// let canvasWidth = 0; // 初始化画布宽度
// let canvasHeight = 0; // 初始化画布高度
//
// class Delete extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             source: "123"
//         };
//         this.addClick = this.addClick.bind(this)
//         this.draw = this.draw.bind(this)
//         this.clear = this.clear.bind(this)
//         this.listen = this.listen.bind(this)
//         this.create = this.create.bind(this)
//     }
//
//     addClick(x, y, dragging) {
//         clickX.push(x);
//         clickY.push(y);
//         clickDrag.push(dragging);
//     }
//
//     draw(){
//         while (clickX.length > 0 ) {
//             point.bx = point.x;
//             point.by = point.y;
//             point.x = clickX.pop();
//             point.y = clickY.pop();
//             point.drag = clickDrag.pop();
//             context.beginPath();
//             if (point.drag && point.notFirst) {
//                 context.moveTo(point.bx, point.by);
//             } else {
//                 point.notFirst = true;
//                 context.moveTo(point.x - 1, point.y);
//             }
//             context.lineTo(point.x, point.y);
//             context.closePath();
//             context.stroke();
//         }
//     }
//
//     clear() {
//         // 使用此方式来清理画布
//         canvas.width = canvas.width;
//         canvas.height = canvas.height;
//         this.create(); // 重新创建画布背景和画笔
//     }
//
//     listen(classname) {
//         // 获取盒子需要的参数
//         let left = canvas.getBoundingClientRect().left;
//         let top = canvas.getBoundingClientRect().top;
//         // 支持 移动端
//         canvasDiv.addEventListener("touchstart", function(e){
//             paint = true;
//             classname && (this.className = classname);
//             (e.touches) && (e = e.touches[0]);
//             this.addClick(e.pageX - left, e.pageY - top);
//             this.draw();
//         });
//
//         canvasDiv.addEventListener("touchmove", function(e){
//             if(!paint) {
//                 return;
//             }
//             (e.touches) && (e = e.touches[0]);
//             this.addClick(e.pageX - left, e.pageY - top, true);
//             this.draw();
//         });
//
//         canvasDiv.addEventListener("touchend", function(e){
//             paint = false;
//         });
//
//     }
//
//     create() {
//         // 以下是创建画布背景
//         context.rect(0, 0, canvasWidth, canvasHeight);
//         context.fillStyle="#f2f2f2"; // 图片背景色是灰色，此处去除会变黑色
//         context.fill();
//
//         // 设置画笔属性
//         context.strokeStyle = "#666";
//         context.lineJoin = "round";
//         context.lineWidth = 2;
//         // 默认值清理
//         clickX = new Array();
//         clickY = new Array();
//         clickDrag = new Array();
//     }
//
//     componentDidMount(){
//         this.create();
//         // 开始监控画图
//         this.listen();
//
//     }
//
//
//     render(){
//         return (
//             <div className="component-canvas" >
//                 <div className="canvas-wrap" id="canvas-wrap" >
//                     <canvas id="canvas" width={0} height={0}/>
//                 </div>
//                 <div className="button-wrap">
//                     <span onClick={()=>this.clear()}>reset</span>
//                 </div>
//             </div>
//         )
//     }
// }
//
//
// export default Delete
//



import React from "react";
import Draw from "./draw";
import "./Canvas.css";

export default class App extends React.PureComponent {
    /* 重置功能 */
    reset() {
        Draw.clear();
    }

    /* 导出 */
    exp() {
        let exportImg = Draw.exportImg();
        console.log('exportImg: ', exportImg);
        if(exportImg === -1) {
            return console.log('please draw!');
        }
        this.refs['imgC'].src = exportImg;
    }

    render() {
        return (
            <div className="component-canvas">
                <div className="canvas-wrap" ref='canvas-wrap'></div>
                <div className="button-wrap" onClick={this.reset}>
                    {/*reset*/}
                    {/*<span onClick={this.reset}>reset</span>*/}
                    {/*<span onClick={this.exp.bind(this)}>export</span>*/}
                </div>
                <img ref="imgC" />
            </div>
        );
    }

    componentDidMount() {
        Draw.init(this.refs['canvas-wrap']);
    }
}

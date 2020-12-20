// import React from 'react';
// import { Layout, Menu, Table,Button, Select as Selector  } from 'antd';
// import { message } from 'antd';
// import 'antd/es/table/style/css'
// import 'antd/es/button/style/css'
// import 'antd/es/tag/style/css'
// import 'antd/es/space/style/css'
// import 'antd/es/layout/style/css'
// import 'antd/es/menu/style/css'
// import 'antd/es/select/style/css'
// import 'antd/es/message/style/css'
// import './index.scss';
// import {
//     LeftOutlined
// } from '@ant-design/icons';
// import Draggable from 'react-draggable';
// import dragGroup from './modules'
// import { DndProvider } from "react-dnd";
// import { TouchBackend } from "react-dnd-touch-backend";
// import { HTML5Backend} from "react-dnd-html5-backend"
// import Container from '../../components/Container'
// import { usePreview } from 'react-dnd-preview';
// // import './css/style.css'
// import Canvas from '../../components/Canvas'
// import Carousel from "../../components/Carousel"
//
// // import boxImage from './123.png'
// const boxImage ="http://qj7mfov10.hn-bkt.clouddn.com/456.png"
// const moveImage = "http://qj7mfov10.hn-bkt.clouddn.com/timg.gif"
// const {Option} = Selector
// // const boxImage =
// //     "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602169417092&di=7b78811616b62e033ee4233624f95d20&imgtype=0&src=http%3A%2F%2Fimg2018.cnblogs.com%2Fcommon%2F1905450%2F202001%2F1905450-20200105224626173-1130303729.gif"
//
// const close4="http://qj7mfov10.hn-bkt.clouddn.com/close4.jpg"
// const cross4="http://qj7mfov10.hn-bkt.clouddn.com/cross4.jpg"
// const cut4="http://qj7mfov10.hn-bkt.clouddn.com/cut4.jpg"
// const haul="http://qj7mfov10.hn-bkt.clouddn.com/haul.jpg"
// const paint="http://qj7mfov10.hn-bkt.clouddn.com/paint.jpg"
// const peel="http://qj7mfov10.hn-bkt.clouddn.com/peel.jpg"
// const push="http://qj7mfov10.hn-bkt.clouddn.com/push.jpg"
// const rub="http://qj7mfov10.hn-bkt.clouddn.com/rub.jpg"
// const tear="http://qj7mfov10.hn-bkt.clouddn.com/tear.jpg"
// const write="http://qj7mfov10.hn-bkt.clouddn.com/write.jpg"
//
// const imgGroup = [close4, cross4, cut4, haul, paint, peel, push, rub, tear, write]
//
// const index = [0,1,2,3,4,5,6,7,8,9]
//
//
// function Dujiaoshou() {
//     return (
//         <div className="D-unicorn">
//             <div className="D-face">
//                 <div className="D-cheek"></div>
//                 <div className="D-snoot">
//                     <div className="D-nose">
//                         <div className="D-nostril"></div>
//                     </div>
//                 </div>
//                 <div className="D-eye">
//                     <div className="D-eyelashes"></div>
//                 </div>
//                 <div className="D-ear"></div>
//                 <div className="D-horn"></div>
//                 <div className="D-mane top"></div>
//                 <div className="D-mane mid"></div>
//             </div>
//             <div className="D-neck">
//                 <div className="D-mane end"></div>
//             </div>
//         </div>
//     )
// }
//
//
// class Drag extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: [],
//             columns: [],
//             img: boxImage,
//             move: false,
//             canvas: true,
//             rightNowIndex: 0,
//             appleWidth: {position: "absolute", left: "28%", top: "56.91%", height: "0.888%", width: "27px", backgroundColor:"rgb(246, 193,127)"},
//             appleArrow: true,
//             writeStyle: {height: "43.4vw",width: "76vw", zIndex: -15,position: "absolute", top: 0, left: 0, clip: "rect(0px,27vw,57.4vh,27vw)"},
//             doorArrow: true,
//             cutArrow: true,
//             knifeWidth: {position: "absolute", left: "23%", top: "39.91%", height: "0.888%", width: "0px", backgroundColor:"rgb(246, 193,127)"},
//             boardSize: {position: "absolute", left: "31%", top: "21.3%", height: "70px", width: "25px", backgroundColor:"rgb(56, 126,59)"},
//             paintArrow: true,
//             paintHeight: {position: "absolute", left: "39%", top: "4.91%", height: "22px", width: "18%", backgroundColor:"rgb(107, 183,242)"},
//             writeArrow: true,
//             tearWidth: {position: "absolute", left: "30%", width: "27px"},
//             handStyle: {height: "43.4vw",width: "76vw", zIndex: -20,position: "absolute", left: "calc(5vw * 0.2 + 0px)", top: "calc(5vw * 0.2 + 0px)"},
//             stickStyle: {height: "38.6vw",width: "10vw", zIndex: -20,position: "absolute", left: "calc(76vw * 0.2601 + 0px)", top: "calc(76vw * -0.2 + 0px)"}
//         }
//         ;
//         // this.getContent = this.getContent.bind(this)
//     }
//
//
//
//     go({item, key}){
//         // console.log(123)
//         switch(key){
//             case "1": this.props.history.push('/select'); break;
//             case "2": this.props.history.push('/add'); break;
//             case "3": this.props.history.push('/alter'); break;
//             default: this.props.history.push('/delete'); break;
//         }
//
//     }
//     componentDidMount() {
//         // this.getContent("student")
//         // window.addEventListener("mousedown",()=> console.log("nihao"))
//         // window.addEventListener("mousemove", ()=>{console.log(213)})
//
//         // document.body.onmousemove = () => {console.log(123)}
//         let lastX; // Tracks the last observed mouse X position
//         let bar = document.getElementById("apple");
//         window.addEventListener("mousedown", event => {
//             if (event.button == 0) {
//                 lastX = event.clientX;
//                 window.addEventListener("mousemove", moved);
//                 event.preventDefault(); // Prevent selection
//             }
//         });
//
//         function moved(event) {
//             if (event.buttons == 0) {
//                 window.removeEventListener("mousemove", moved);
//             } else {
//                 console.log("123")
//                 let dist = event.clientX - lastX;
//                 let newWidth = Math.max(10, bar.offsetWidth + dist);
//                 bar.style.width = newWidth + "px";
//                 lastX = event.clientX;
//             }
//         }
//     }
//
//     increase = () => {
//         let percent = this.state.percent + 10;
//         if (percent > 100) {
//             percent = 100;
//         }
//         this.setState({ percent , rightNowIndex: this.state.rightNowIndex +1 });
//     };
//
//     decline = () => {
//         let percent = this.state.percent - 10;
//         if (percent < 0) {
//             percent = 0;
//         }
//         this.setState({ percent , rightNowIndex: this.state.rightNowIndex - 1});
//     };
//
//
//
//     render() {
//         // const { Header, Content } = Layout;
//         // const MyPreview = () => {
//         //     const {display, itemType, item, style} = usePreview();
//         //     if (!display) {
//         //         return null;
//         //     }
//         //     // return <div class="item-list__item" style={style}><img style={{width: "20px",height:"20px"}} src={boxImage} alt={'syp'} style={{marginTop:'-200px'}}/></div>;
//         //     return <div class="item-list__item" style={style}><div>123</div></div>;
//         // };
//
//         // let dragGroup = [closeDoor, crossWay]
//         return (
//             <div style={{backgroundColor:'#E8C1D9',width:'100%',height:'100%',zIndex:'-100',position:'fixed',top:0}}>
//                 <Button style={{position: 'fixed',left:'4%',top:'4%'}} type="primary"  shape="round" size="large" icon={<LeftOutlined />} onClick={() =>window.history.back(-1)}>
//                     首页
//                 </Button>
//                 {/*<img style={{position: "fixed",top: 0,zIndex: -100}} src={"https://static.fotor.com.cn/assets/stickers/freelancer_ly_082508/e0e1bc66-73ba-4e35-98ba-f23f8988f092_medium_thumb.jpg"} alt={"123"}/>*/}
//
//
//
//                 <Carousel title="Carousel" function1={this.decline} function2={this.increase} function3={()=>{console.log(1234)}}>
//                     {/*<div><img src={imgGroup[index[9]]} alt={"cross4"} style={{width: "68vh",height: "68vh"}}/></div>*/}
//                     {/*<div><img src={imgGroup[index[0]]} alt={"cross4"} style={{width: "68vh",height: "68vh"}}/></div>*/}
//                     {/*<div><img src={imgGroup[index[1]]} alt={"cross4"} style={{width: "68vh",height: "68vh"}}/></div>*/}
//                     {true && dragGroup[0](this)}
//                     {true && dragGroup[9](this)}
//                     {true && dragGroup[1](this)}
//                     {true && dragGroup[2](this)}
//                     {true && dragGroup[3](this)}
//                     {true && dragGroup[4](this)}
//                     {true && dragGroup[5](this)}
//                     {true && dragGroup[6](this)}
//                     {true && dragGroup[7](this)}
//                     {true && dragGroup[8](this)}
//                     {/*<div><img src={imgGroup[index[3]]} alt={"cross4"} style={{width: "68vh",height: "68vh"}}/></div>*/}
//                     {/*<div><img src={imgGroup[index[4]]} alt={"cross4"} style={{width: "68vh",height: "68vh"}}/></div>*/}
//                     {/*<div><img src={imgGroup[index[5]]} alt={"cross4"} style={{width: "68vh",height: "68vh"}}/></div>*/}
//                     {/*<div><img src={imgGroup[index[6]]} alt={"cross4"} style={{width: "68vh",height: "68vh"}}/></div>*/}
//                     {/*<div><img src={imgGroup[index[7]]} alt={"cross4"} style={{width: "68vh",height: "68vh"}}/></div>*/}
//                     {/*<div><img src={imgGroup[index[8]]} alt={"cross4"} style={{width: "68vh",height: "68vh"}}/></div>*/}
//                 </Carousel>
//                 {/*{this.state.rightNowIndex === 2 && <Canvas/>}*/}
//             </div>
//             // </div>
//         );
//     }
// }
//
// export default Drag;



// import React from 'react';
// import { Modal, Form, Input, message, Layout, Menu, Table, Alert, Select as Selector } from 'antd';
// import 'antd/es/alert/style/css'
// import 'antd/es/message/style/css'
// import 'antd/es/modal/style/css'
// import 'antd/es/form/style/css'
// import 'antd/es/input/style/css'
// import 'antd/es/radio/style/css'
// import 'antd/es/table/style/css'
// import 'antd/es/tag/style/css'
// import 'antd/es/space/style/css'
// import 'antd/es/layout/style/css'
// import 'antd/es/menu/style/css'
// import 'antd/es/select/style/css'
// import './index.scss';
// import {
//     MinusOutlined,
//     PlusOutlined
// } from '@ant-design/icons';
// import {
//     LeftOutlined
// } from '@ant-design/icons';
// import { Progress, Button } from 'antd';
// import 'antd/es/progress/style/css'
// import 'antd/es/button/style/css'
// import Carousel from '../../components/Carousel'
// import 'antd/es/card/style/css'
// import 'antd/es/avatar/style/css'
// import { Card, Avatar } from 'antd';
// import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
//
//
// // import './demo.css'
//
// const {Meta} = Card
// const {Option} = Selector
//
// function House(){
//     return (
//         <div className="main">
//             <div className="house">
//                 <div className="floor"></div>
//                 <div className="wall">
//                     <div className="window"></div>
//                     <div className="door">
//                         <div className="door__square"></div>
//                         <div className="door__line"></div>
//                         <div className="door__square"></div>
//                     </div>
//                     <div className="window"></div>
//                 </div>
//                 <div className="top"></div>
//                 <div className="circle"></div>
//                 <div className="plastic">
//                     <div className="plastic__g">
//                         <div className="plastic__item"></div>
//                         <div className="plastic__item"></div>
//                         <div className="plastic__item"></div>
//                         <div className="plastic__item"></div>
//                         <div className="plastic__item"></div>
//                         <div className="plastic__item"></div>
//                         <div className="plastic__item"></div>
//                         <div className="plastic__item"></div>
//                         <div className="plastic__item"></div>
//                     </div>
//                 </div>
//                 <div className="line">
//                     <div className="line__item"></div>
//                     <div className="line__item"></div>
//                     <div className="line__item"></div>
//                     <div className="line__item"></div>
//                     <div className="line__item"></div>
//                     <div className="line__item"></div>
//                     <div className="line__item"></div>
//                     <div className="line__item"></div>
//                     <div className="line__item"></div>
//                 </div>
//             </div>
//             <div className="clouds">
//                 <div className="cloud">
//                     <div className="cloud__item"></div>
//                     <div className="cloud__item"></div>
//                 </div>
//                 <div className="cloud">
//                     <div className="cloud__item"></div>
//                     <div className="cloud__item"></div>
//                 </div>
//                 <div className="cloud">
//                     <div className="cloud__item"></div>
//                     <div className="cloud__item"></div>
//                 </div>
//                 <div className="bird"></div>
//             </div>
//             <div className="birds">
//                 <div className="bird"></div>
//                 <div className="bird"></div>
//             </div>
//             <div className="tree">
//                 <div className="tree__item"></div>
//                 <div className="tree__item"></div>
//                 <div className="tree__item"></div>
//             </div>
//             <div className="bush">
//                 <div className="bush__item"></div>
//                 <div className="bush__item"></div>
//             </div>
//             <div className="dot"></div>
//         </div>
//     )
// }
//
// class Watch extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             id: 0,
//             data: [],
//             columns: [],
//             visible: false,
//             percent: 10,
//             errorMessage: ''
//         };
//     }
//
//
//     increase = () => {
//         let percent = this.state.percent + 10;
//         if (percent > 100) {
//             percent = 100;
//         }
//         this.setState({ percent });
//     };
//
//     decline = () => {
//         let percent = this.state.percent - 10;
//         if (percent < 0) {
//             percent = 0;
//         }
//         this.setState({ percent });
//     };
//
//
//
//
//
//
//     go({item, key}){
//         console.log(123)
//         switch(key){
//             case "1": this.props.history.push('/select'); break;
//             case "2": this.props.history.push('/add'); break;
//             case "3": this.props.history.push('/alter'); break;
//             default: this.props.history.push('/delete'); break;
//         }
//
//     }
//
//
//
//
//     render() {
//         let opt = {
//             distance: 230, // 每次移动的距离，卡片的真实宽度，需要计算
//             currentPoint: 1, // 初始位置，默认从0即第一个元素开始
//             loop: true,
//             swTouchstart: ev => {},
//             swTouchmove: ev => {},
//             swTouchend: ev => {
//                 let data = {
//                     moved: ev.moved,
//                     originalPoint: ev.originalPoint,
//                     newPoint: ev.newPoint,
//                     cancelled: ev.cancelled
//                 };
//                 console.log(data);
//                 // this.setState({
//                 //     curCard: ev.newPoint
//                 // })
//             }}
//
//         return (
//             <div style={{backgroundColor:'#abe7db',width:'100%',height:'100%',zIndex:'-100',position:'fixed',top:0}}>
//                 {/*<House/>*/}
//                 <Button style={{position: 'fixed',left:'7%',top:'7%'}} type="primary"  shape="round" size="large" icon={<LeftOutlined />} onClick={() =>window.history.back(-1)}>
//                     首页
//                 </Button>
//                 <Progress style={{position: 'fixed',right:'7%',top:'4%'}} width={'70px'} type="circle" strokeColor={{
//                     '10%': '#108ee9',
//                     '100%': '#87d068',
//                 }} percent={this.state.percent} />
//
//
//
//
//
//                 <Carousel title="Carousel" function1={this.decline} function2={this.increase}>
//                     <div>10</div>
//                     <Card
//                         style={{ width: 300 }}
//                         cover={
//                             <img
//                                 alt="example"
//                                 src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
//                             />
//                         }
//                         actions={[
//                             <SettingOutlined key="setting" />,
//                             <EditOutlined key="edit" />,
//                             <EllipsisOutlined key="ellipsis" />,
//                         ]}
//                     >
//                         <Meta
//                             avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
//                             title="Card title"
//                             description="This is the description"
//                         />
//                     </Card>
//
//                     <Card
//                         style={{ width: 300 }}
//                         cover={
//                             <img
//                                 alt="example"
//                                 src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
//                             />
//                         }
//                         actions={[
//                             <SettingOutlined key="setting" />,
//                             <EditOutlined key="edit" />,
//                             <EllipsisOutlined key="ellipsis" />,
//                         ]}
//                     >
//                         <Meta
//                             avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
//                             title="Card title"
//                             description="This is the description"
//                         />
//                         <Meta
//                             avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
//                             title="Card title"
//                             description="This is the description"
//                         />
//                         <Meta
//                             avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
//                             title="Card title"
//                             description="This is the description"
//                         />
//                         <Meta
//                             avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
//                             title="Card title"
//                             description="This is the description"
//                         />
//                     </Card>
//                     <div>3</div>
//                     <div>4</div>
//                     <div>5</div>
//                     <div>6</div>
//                     <div>7</div>
//                     <div>8</div>
//                     <div>9</div>
//                 </Carousel>
//             </div>
//         );
//     }
// }
//
// export default Watch;

import React from 'react';
import {Modal, Spin, Input, message, Select as Selector, Table, Space, Layout, Menu, Button, Progress} from 'antd';
import 'antd/es/button/style/css'
import 'antd/es/modal/style/css'
import 'antd/es/form/style/css'
import 'antd/es/input/style/css'
import 'antd/es/radio/style/css'
import 'antd/es/table/style/css'
import 'antd/es/tag/style/css'
import 'antd/es/space/style/css'
import 'antd/es/spin/style/css'
import 'antd/es/layout/style/css'
import 'antd/es/menu/style/css'
import 'antd/es/popconfirm/style/css'
import 'antd/es/message/style/css'
import 'antd/es/select/style/css'
import 'antd/es/modal/style/css'
import 'antd/es/progress/style/css'
import 'antd/es/input/style/css'
import './index.scss';
import {
    LeftOutlined
} from '@ant-design/icons';
import Carousel from '../../components/Carousel'
import 'antd/es/card/style/css'
import 'antd/es/avatar/style/css'
import { Card, Avatar } from 'antd';
import dragGroup from './modules'
import Sound from 'react-sound';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';


const {Option} = Selector
const {Meta} = Card



const close4="http://qj7mfov10.hn-bkt.clouddn.com/close1.jpg"
const cross4="http://qj7mfov10.hn-bkt.clouddn.com/cross1.jpg"
const cut4="http://qj7mfov10.hn-bkt.clouddn.com/cut1.jpg"
const haul="http://qj7mfov10.hn-bkt.clouddn.com/haul1.jpg"
const paint="http://qj7mfov10.hn-bkt.clouddn.com/paint1.jpg"
const peel="http://qj7mfov10.hn-bkt.clouddn.com/peel1.jpg"
const push="http://qj7mfov10.hn-bkt.clouddn.com/push1.jpg"
const rub="http://qj7mfov10.hn-bkt.clouddn.com/rub1.jpg"
const tear="http://qj7mfov10.hn-bkt.clouddn.com/tear1.jpg"
const write="http://qj7mfov10.hn-bkt.clouddn.com/write1.jpg"

const writeGIF = "http://qj7mfov10.hn-bkt.clouddn.com/s8kpg-hmtub.gif"
const paintGIF = "http://qj7mfov10.hn-bkt.clouddn.com/paint.gif"
const peelGIF = "http://qj7mfov10.hn-bkt.clouddn.com/pealApple.gif"
const clearBoardGIF = "http://qj7mfov10.hn-bkt.clouddn.com/clearBoard.gif"
const pushGIF = "http://qj7mfov10.hn-bkt.clouddn.com/pushCar.gif"
const closeGIF = "http://qj7mfov10.hn-bkt.clouddn.com/closeDoor.gif"
const crossGIF = "http://qj7mfov10.hn-bkt.clouddn.com/crossRoad.gif"
const cutCakeGIF = "http://qj7mfov10.hn-bkt.clouddn.com/cutCAke.gif"
const tearDownGIF = "http://qj7mfov10.hn-bkt.clouddn.com/tearDown.gif"
const haulCar = "http://qj7mfov10.hn-bkt.clouddn.com/haulCarD.gif"



const imgGroup = [close4, cross4, cut4, haul,]
const imgGIF = [writeGIF, paintGIF, peelGIF, clearBoardGIF, pushGIF, closeGIF, crossGIF, cutCakeGIF, tearDownGIF, haulCar]

const do1 = "http://qln3al27f.hn-bkt.clouddn.com/do1.png"
const do2 = "http://qln3al27f.hn-bkt.clouddn.com/do2.png"
const do3 = "http://qln3al27f.hn-bkt.clouddn.com/do3.png"
const doM = "http://qln3al27f.hn-bkt.clouddn.com/doM.png"
const doM2 = "http://qln3al27f.hn-bkt.clouddn.com/doM2.png"
let do_Ar = "http://qln3al27f.hn-bkt.clouddn.com/do_Ar.png"

const c1 = "http://qln3al27f.hn-bkt.clouddn.com/cross.png"
const c2 = "http://qln3al27f.hn-bkt.clouddn.com/cross2.png"
let crossAr = "http://qln3al27f.hn-bkt.clouddn.com/cross_Ar.png"




const p1 = "http://qln3al27f.hn-bkt.clouddn.com/pu1.png"
const p2 = "http://qln3al27f.hn-bkt.clouddn.com/pu2.png"
const p3 = "http://qln3al27f.hn-bkt.clouddn.com/p3.png"
const pushGif = "http://qln3al27f.hn-bkt.clouddn.com/pushGIF.gif"
let pushCar_Ar = "http://qln3al27f.hn-bkt.clouddn.com/pushCar_Ar.png"
const ha1 = "http://qln3al27f.hn-bkt.clouddn.com/ha1.png"
const ha2 = "http://qln3al27f.hn-bkt.clouddn.com/ha2.png"
const ha3 = "http://qln3al27f.hn-bkt.clouddn.com/ha3.png"
const ha4 = "http://qln3al27f.hn-bkt.clouddn.com/ha4.png"
const ha5 = "http://qln3al27f.hn-bkt.clouddn.com/ha5.png"
let ha6 = "http://qln3al27f.hn-bkt.clouddn.com/ha6.png"
const haGIF = "http://qln3al27f.hn-bkt.clouddn.com/haGIF.gif"



const wr1 = "http://qln3al27f.hn-bkt.clouddn.com/wr1.png"
let wr2 = "http://qln3al27f.hn-bkt.clouddn.com/wr2.png"
const wr3 = "http://qln3al27f.hn-bkt.clouddn.com/wr3.png"
const wra = "http://qln3al27f.hn-bkt.clouddn.com/wra.png"
const wrb = "http://qln3al27f.hn-bkt.clouddn.com/wrb.png"



const pe1 = "http://qln3al27f.hn-bkt.clouddn.com/pe1.png"
const pe2 = "http://qln3al27f.hn-bkt.clouddn.com/pe2.png"
const pe3 = "http://qln3al27f.hn-bkt.clouddn.com/pe3.png"
let peel_Ar = "http://qln3al27f.hn-bkt.clouddn.com/peel_Ar.png"
const applePi = "http://qln3al27f.hn-bkt.clouddn.com/applePi.png"

const cut1 = "http://qln3al27f.hn-bkt.clouddn.com/cut1.png"
const cut2 = "http://qln3al27f.hn-bkt.clouddn.com/cut2.png"
const cut3 = "http://qln3al27f.hn-bkt.clouddn.com/cut3.png"
let cutAr = "http://qln3al27f.hn-bkt.clouddn.com/cutAr.png"


const rub1 = "http://qln3al27f.hn-bkt.clouddn.com/rub1.png"
const rub2 = "http://qln3al27f.hn-bkt.clouddn.com/rub2.png"
const rub3 = "http://qln3al27f.hn-bkt.clouddn.com/rub3.png"
let rubAr = "http://qln3al27f.hn-bkt.clouddn.com/rub_Ar.png"



const paint1 = "http://qln3al27f.hn-bkt.clouddn.com/paint1.png"
const paint2 = "http://qln3al27f.hn-bkt.clouddn.com/paint2.png"
const paint3 = "http://qln3al27f.hn-bkt.clouddn.com/paint3.png"
const paintAr = "http://qln3al27f.hn-bkt.clouddn.com/paintAr.png"
const youqi = "http://qln3al27f.hn-bkt.clouddn.com/youqi.png"

const tear1 = "http://qln3al27f.hn-bkt.clouddn.com/tear1.png"
const tear2 = "http://qln3al27f.hn-bkt.clouddn.com/tear2.png"
const tear3 = "http://qln3al27f.hn-bkt.clouddn.com/tear3.png"
const tear4 = "http://qln3al27f.hn-bkt.clouddn.com/tear4.png"
let tearAr = "http://qln3al27f.hn-bkt.clouddn.com/tearAr.png"
const tearT1 = "http://qln3al27f.hn-bkt.clouddn.com/tearT1.png"
const tearT2 = "http://qln3al27f.hn-bkt.clouddn.com/tearT2.png"
const tearT3 = "http://qln3al27f.hn-bkt.clouddn.com/tearT3.png"

const loadImage = [tearT1,tearT2,tearT3,tearAr,tear1,tear2,tear3,tear4, paint1,paint2,paint3,paintAr,youqi,rub1,rub2,rub3,rubAr, cut1, cut2, cut3, cutAr,pe1,pe2,pe3,peel_Ar,applePi,wr1,wr2,wr3,wra,wrb, p1,p2,p3,pushGif,pushCar_Ar,ha1,ha2,ha3,ha4,ha5,ha6,haGIF,c1,c2,crossGIF,crossAr, do1,do2,do3,doM,doM2,do_Ar,closeGIF]

function Dog() {
    return (
        <div className="pupper">

            <div className="torso">
                <div className="fur">
                    <div className="spot"></div>
                </div>
                <div className="neck">
                    <div className="fur"></div>
                    <div className="head">
                        <div className="fur">
                            <div className="snout"></div>
                        </div>
                        <div className="ears">
                            <div className="ear">
                                <div className="fur"></div>
                            </div>
                            <div className="ear">
                                <div className="fur"></div>
                            </div>
                        </div>
                        <div className="eye"></div>
                    </div>
                    <div className="collar">

                    </div>
                </div>
                <div className="legs">
                    <div className="leg">
                        <div className="fur"></div>
                        <div className="leg-inner">
                            <div className="fur"></div>
                        </div>
                    </div>
                    <div className="leg">
                        <div className="fur"></div>
                        <div className="leg-inner">
                            <div className="fur"></div>
                        </div>
                    </div>
                    <div className="leg">
                        <div className="fur"></div>
                        <div className="leg-inner">
                            <div className="fur"></div>
                        </div>
                    </div>
                    <div className="leg">
                        <div className="fur"></div>
                        <div className="leg-inner">
                            <div className="fur"></div>
                        </div>
                    </div>
                </div>
                <div className="tail">
                    <div className="tail">
                        <div className="tail">
                            <div className="tail -end">
                                <div className="tail">
                                    <div className="tail">
                                        <div className="tail">
                                            <div className="tail"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Clock(props) {
    console.log(props.angle)
    return (
        <div>
            <div className="clock" style={{position: "fixed"}}>
                <div id="circle" className="circle" onClick={()=>{console.log("你好")}}></div>
                <ul className="min">
                    <li className="line-min" style={{transform: "rotate(0deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(6deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(12deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(18deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(24deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(30deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(36deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(42deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(48deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(54deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(60deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(66deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(72deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(78deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(84deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(90deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(96deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(102deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(108deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(114deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(120deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(126deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(132deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(138deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(144deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(150deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(156deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(162deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(168deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(174deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(180deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(186deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(192deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(198deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(204deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(210deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(216deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(222deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(228deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(234deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(240deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(246deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(252deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(258deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(264deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(270deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(276deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(282deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(288deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(294deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(300deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(306deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(312deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(318deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(324deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(330deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(336deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(342deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(348deg) translate(88px, -3px)"}}></li>
                    <li className="line-min" style={{transform: "rotate(354deg) translate(88px, -3px)"}}></li>


                </ul>
                <ul className="hour">
                    <li className="line-demo" style={{transform: "rotate(0deg) translate(88px, -3px)"}}></li>
                    <li className="line-demo" style={{transform: "rotate(30deg) translate(85px, -3px)"}}></li>
                    <li className="line-demo" style={{transform: "rotate(60deg) translate(85px, -3px)"}}></li>
                    <li className="line-demo" style={{transform: "rotate(90deg) translate(85px, -3px)"}}></li>
                    <li className="line-demo" style={{transform: "rotate(120deg) translate(85px, -3px)"}}></li>
                    <li className="line-demo" style={{transform: "rotate(150deg) translate(85px, -3px)"}}></li>
                    <li className="line-demo" style={{transform: "rotate(180deg) translate(88px, -3px)"}}></li>
                    <li className="line-demo" style={{transform: "rotate(210deg) translate(90px, -3px)"}}></li>
                    <li className="line-demo" style={{transform: "rotate(240deg) translate(90px, -3px)"}}></li>
                    <li className="line-demo" style={{transform: "rotate(270deg) translate(90px, -3px)"}}></li>
                    <li className="line-demo" style={{transform: "rotate(300deg) translate(90px, -3px)"}}></li>
                    <li className="line-demo" style={{transform: "rotate(330deg) translate(90px, -3px)"}}></li>
                </ul>
                <ul className="numbers">
                    <li className="a1">1</li>
                    <li className="a2">2</li>
                    <li className="a3">3</li>
                    <li className="a4">4</li>
                    <li className="a5">5</li>
                    <li className="a6">6</li>
                    <li className="a7">7</li>
                    <li className="a8">8</li>
                    <li className="a9">9</li>
                    <li className="a10">10</li>
                    <li className="a11">11</li>
                    <li className="a12">12</li>
                </ul>
                <ul className="pointer">
                    <li className="p-hour" style={{transform: `rotate(${props.angle}deg)`}}></li>
                    <li className="p-min"></li>
                </ul>
            </div>
        </div>
    )

}

class Drag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            columns: [],
            // img: boxImage,
            move: false,
            canvas: true,
            rightNowIndex: 0,
            appleWidth: {position: "absolute", left: "28%", top: "56.91%", height: "0.888%", width: "27px", backgroundColor:"rgb(246, 193,127)"},
            appleArrow: true,
            writeStyle: {height: "43.4vw",width: "76vw", zIndex: -15,position: "absolute", top: 0, left: 0, clip: "rect(0px,27vw,57.4vh,27vw)"},
            doorArrow: true,
            cutArrow: true,
            knifeWidth: {position: "absolute", left: "23%", top: "39.91%", height: "0.888%", width: "0px", backgroundColor:"rgb(246, 193,127)"},
            boardSize: {position: "absolute", left: "31%", top: "21.3%", height: "70px", width: "25px", backgroundColor:"rgb(56, 126,59)"},
            paintArrow: true,
            paintHeight: {position: "absolute", left: "39%", top: "4.91%", height: "22px", width: "18%", backgroundColor:"rgb(107, 183,242)"},
            writeArrow: true,
            tearWidth: {position: "absolute", left: "30%", width: "27px"},
            handStyle: {height: "43.4vw",width: "76vw", zIndex: -20,position: "absolute", left: "calc(5vw * 0.2 + 0px)", top: "calc(5vw * 0.2 + 0px)"},
            stickStyle: {height: "38.6vw",width: "10vw", zIndex: -20,position: "absolute", left: "calc(76vw * 0.2601 + 0px)", top: "calc(76vw * -0.2 + 0px)"},
            id: 0,
            id2: 0,
            visible: false,
            record: [],
            angle: 0,
            percent: 10,
            errorMessage: '',
            vis: true,
            end: false,
            name: "",
            index: [0,1,2,3,4,5,6,7,8,9],
            secondsElapsed: 0,
            isAllowed: false,
            yujiazai: true,
            jindu: 0,
            do_Ar: true,
            crossAr: true,
            pushCar_Ar: true,
            ha6: true,
            wr2: true,
            rubAr: true,
            tearAr: true,
            audioA: [false, false, false, false, false, false, false, false, false, false],
            audioB: [false, false, false, false, false, false, false, false, false, false],
            i: 0
        }
    }


    tick() {
        this.setState((prevState) => ({
            secondsElapsed: prevState.secondsElapsed + 1
        }));
    }

    go({item, key}){
        console.log(123)
        switch(key){
            case "1": this.props.history.push('/select'); break;
            case "2": this.props.history.push('/add'); break;
            case "3": this.props.history.push('/alter'); break;
            default: this.props.history.push('/delete'); break;
        }

    }
    componentWillMount() {
        let array = []
        loadImage.forEach((v, idx, arr)=> {
            var img = new Image();
            img.src = v;
            img.onload = () => {
                array.push(1)
                console.log(array.length)
                this.setState({
                    jindu: array.length
                })
                if(array.length === 52){
                    console.log("加载完毕")
                    let a = this.state.audioA
                    if(this.state.vis == false) {
                        console.log(this.state.index+ "zmy")
                        let ind = this.state.index[this.state.i] - 1
                        console.log("啊啊"  + ind)
                        a[ind] = true
                    }
                    this.setState({
                        yujiazai: false,
                        audioA: a
                    })
                }
            }
        })

        this.setState({index: this.getRandom()});
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        this.setState({
            data: [],
            columns: [],
            // img: boxImage,
            move: false,
            canvas: true,
            rightNowIndex: 0,
            appleArrow: true,
            doorArrow: true,
            cutArrow: true,
            paintArrow: true,
            writeArrow: true,
            id: 0,
            id2: 0,
            visible: false,
            record: [],
            angle: 0,
            percent: 10,
            errorMessage: '',
            vis: false,
            name: "",
            index: this.getRandom(),
            do_Ar: true,
            crossAr: true,
            pushCar_Ar: true,
            ha6: true,
            wr2: true,
            rubAr: true,
            tearAr: true,
            audioA: [false, false, false, false, false, false, false, false, false, false],
            audioB: [false, false, false, false, false, false, false, false, false, false],
            i: 0
        })

    }

    handleOk = e => {
        let a = this.state.audioA
        if(this.state.yujiazai == false){
            console.log(this.state.index + "zmy")
            let ind = this.state.index[this.state.i] - 1
            console.log("啊啊"  + ind)
            a[ind] = true
        }
        // let index = this.getRandom()
        if(this.state.name !== ""){
            this.interval = setInterval(() => this.tick(), 1000);
            this.setState({
                vis: false,
                audioA: a
            })
        } else {
            message.error("请输入姓名！")
        }
    };

    handleCancel = e => {
        console.log(e);
        window.history.back(-1)
        this.setState({
            vis: false,
        });
    };

    handleEnd = e => {
        let records = JSON.parse(localStorage.getItem("records"))
        let total = Number(localStorage.getItem("total")) || 0
        if(total === 0) {
            records = []
        }
        let record = {
            index: total+1,
            name: this.state.name,
            table: "拖拽组",
            order: this.state.index,
            time: this.state.secondsElapsed
        }
        console.log(record)
        records.push(record)
        console.log(records)
        localStorage.setItem(
            "records", JSON.stringify(records),
        )

        localStorage.setItem(
            "total", total+1
        )
        clearInterval(this.interval);
        this.setState({
            end: false,
        })
        window.history.back(-1)
    }

    cancelEnd = e => {
        this.interval = setInterval(() => this.tick(), 1000);
        this.setState({
            end: false
        })
    }



    increase = () => {
        let percent = this.state.percent + 10;
        if (percent > 100) {
            percent = 100;
        }

        let addedI
        if(this.state.i > 8) {
            addedI = 8
        }
        addedI = this.state.i + 1
        let a = this.state.audioA
        let ind = this.state.index[addedI] - 1
        console.log("啊啊"  + ind)

        a[ind] = true

        this.setState({ percent ,isAllowed: false, i: addedI});
    };

    decline = () => {
        let percent = this.state.percent - 10;
        if (percent < 0) {
            percent = 0;
        }

        let addedI
        if(this.state.i < -1) {
            addedI = -1
        }
        addedI = this.state.i - 1
        let a = this.state.audioA
        let ind = this.state.index[addedI] - 1
        console.log("啊啊"  + ind)

        a[ind] = true

        this.setState({ percent , audioA: a, id: addedI});
    };

    showEnd = () => {
        clearInterval(this.interval);
        this.setState({
            end: true
        })
    }

    getRandom = () => {
        let array=[0,1,2,3,4,5,6,7,8,9];
        for(var i=0;i<array.length;i++){
            var random_index=Math.floor(Math.random()*array.length);//产生一个在0到数组长度之间的随机数
            //经典的临时变量交换
            var t=array[i];
            array[i]=array[random_index];
            array[random_index]=t;
        }
        return array
        // return [4,8,2,3,1,5,6,7,0,9]
    }



    render() {
        let {index} =this.state


        return (
            <div style={{width:'100%',height:'100%',zIndex:'-100',position:'fixed',top:0}}>
                <Sound
                    url="http://qln3al27f.hn-bkt.clouddn.com/crossC.mp3"
                    playStatus={this.state.audioA[0] ? Sound.status.PLAYING : Sound.status.STOPPED}
                    autoLoad={true}
                    onFinishedPlaying={()=>{this.setState({audioA: [false,false,false,false,false,false,false,false,false,false]})}}
                />
                <Sound
                    url="http://qln3al27f.hn-bkt.clouddn.com/cutC.mp3"
                    playStatus={this.state.audioA[1] ? Sound.status.PLAYING : Sound.status.STOPPED}
                    autoLoad={true}
                    onFinishedPlaying={()=>{this.setState({audioA: [false,false,false,false,false,false,false,false,false,false], cutArrow: false})}}
                />
                <Sound
                    url="http://qln3al27f.hn-bkt.clouddn.com/haulC.mp3"
                    playStatus={this.state.audioA[2] ? Sound.status.PLAYING : Sound.status.STOPPED}
                    autoLoad={true}
                    onFinishedPlaying={()=>{this.setState({audioA: [false,false,false,false,false,false,false,false,false,false]})}}
                />
                <Sound
                    url="http://qln3al27f.hn-bkt.clouddn.com/paintC.mp3"
                    playStatus={this.state.audioA[3] ? Sound.status.PLAYING : Sound.status.STOPPED}
                    autoLoad={true}
                    onFinishedPlaying={()=>{this.setState({audioA: [false,false,false,false,false,false,false,false,false,false], paintArrow: false})}}
                />
                <Sound
                    url="http://qln3al27f.hn-bkt.clouddn.com/peelC.mp3"
                    playStatus={this.state.audioA[4] ? Sound.status.PLAYING : Sound.status.STOPPED}
                    autoLoad={true}
                    onFinishedPlaying={()=>{this.setState({audioA: [false,false,false,false,false,false,false,false,false,false], appleArrow: false})}}
                />
                <Sound
                    url="http://qln3al27f.hn-bkt.clouddn.com/pushC.mp3"
                    playStatus={this.state.audioA[5] ? Sound.status.PLAYING : Sound.status.STOPPED}
                    autoLoad={true}
                    onFinishedPlaying={()=>{this.setState({audioA: [false,false,false,false,false,false,false,false,false,false]})}}
                />
                <Sound
                    url="http://qln3al27f.hn-bkt.clouddn.com/rubC.mp3"
                    playStatus={this.state.audioA[6] ? Sound.status.PLAYING : Sound.status.STOPPED}
                    autoLoad={true}
                    onFinishedPlaying={()=>{this.setState({audioA: [false,false,false,false,false,false,false,false,false,false]})}}
                />
                <Sound
                    url="http://qln3al27f.hn-bkt.clouddn.com/tearCgai.mp3"
                    playStatus={this.state.audioA[7] ? Sound.status.PLAYING : Sound.status.STOPPED}
                    autoLoad={true}
                    onFinishedPlaying={()=>{this.setState({audioA: [false,false,false,false,false,false,false,false,false,false]})}}
                />
                <Sound
                    url="http://qln3al27f.hn-bkt.clouddn.com/writeC.mp3"
                    playStatus={this.state.audioA[8] ? Sound.status.PLAYING : Sound.status.STOPPED}
                    autoLoad={true}
                    onFinishedPlaying={()=>{this.setState({audioA: [false,false,false,false,false,false,false,false,false,false], writeArrow: false})}}
                />
                <Sound
                    url="http://qln3al27f.hn-bkt.clouddn.com/closeC.mp3"
                    playStatus={this.state.audioA[-1] ? Sound.status.PLAYING : Sound.status.STOPPED}
                    autoLoad={true}
                    onFinishedPlaying={()=>{this.setState({audioA: [false,false,false,false,false,false,false,false,false,false], doorArrow: false})}}
                />



                <Sound
                    url="http://qln3al27f.hn-bkt.clouddn.com/crossB.mp3"
                    playStatus={this.state.audioB[0] ? Sound.status.PLAYING : Sound.status.STOPPED}
                    autoLoad={true}
                    onFinishedPlaying={()=>this.setState({audioB: [false,false,false,false,false,false,false,false,false,false], isAllowed: true})}
                />
                <Sound
                    url="http://qln3al27f.hn-bkt.clouddn.com/cutB.mp3"
                    playStatus={this.state.audioB[1] ? Sound.status.PLAYING : Sound.status.STOPPED}
                    autoLoad={true}
                    onFinishedPlaying={()=>this.setState({audioB: [false,false,false,false,false,false,false,false,false,false], isAllowed: true})}
                />
                <Sound
                    url="http://qln3al27f.hn-bkt.clouddn.com/haulB.mp3"
                    playStatus={this.state.audioB[2] ? Sound.status.PLAYING : Sound.status.STOPPED}
                    autoLoad={true}
                    onFinishedPlaying={()=>this.setState({audioB: [false,false,false,false,false,false,false,false,false,false], isAllowed: true})}
                />
                <Sound
                    url="http://qln3al27f.hn-bkt.clouddn.com/paintB.mp3"
                    playStatus={this.state.audioB[3] ? Sound.status.PLAYING : Sound.status.STOPPED}
                    autoLoad={true}
                    onFinishedPlaying={()=>this.setState({audioB: [false,false,false,false,false,false,false,false,false,false], isAllowed: true})}
                />
                <Sound
                    url="http://qln3al27f.hn-bkt.clouddn.com/peelB.mp3"
                    playStatus={this.state.audioB[4] ? Sound.status.PLAYING : Sound.status.STOPPED}
                    autoLoad={true}
                    onFinishedPlaying={()=>this.setState({audioB: [false,false,false,false,false,false,false,false,false,false], isAllowed: true})}
                />
                <Sound
                    url="http://qln3al27f.hn-bkt.clouddn.com/pushB.mp3"
                    playStatus={this.state.audioB[5] ? Sound.status.PLAYING : Sound.status.STOPPED}
                    autoLoad={true}
                    onFinishedPlaying={()=>this.setState({audioB: [false,false,false,false,false,false,false,false,false,false], isAllowed: true})}
                />
                <Sound
                    url="http://qln3al27f.hn-bkt.clouddn.com/rubB.mp3"
                    playStatus={this.state.audioB[6] ? Sound.status.PLAYING : Sound.status.STOPPED}
                    autoLoad={true}
                    onFinishedPlaying={()=>this.setState({audioB: [false,false,false,false,false,false,false,false,false,false], isAllowed: true})}
                />
                <Sound
                    url="http://qln3al27f.hn-bkt.clouddn.com/tearBgai.mp3"
                    playStatus={this.state.audioB[7] ? Sound.status.PLAYING : Sound.status.STOPPED}
                    autoLoad={true}
                    onFinishedPlaying={()=>this.setState({audioB: [false,false,false,false,false,false,false,false,false,false], isAllowed: true})}
                />
                <Sound
                    url="http://qln3al27f.hn-bkt.clouddn.com/writeB.mp3"
                    playStatus={this.state.audioB[8] ? Sound.status.PLAYING : Sound.status.STOPPED}
                    autoLoad={true}
                    onFinishedPlaying={()=>this.setState({audioB: [false,false,false,false,false,false,false,false,false,false], isAllowed: true})}
                />
                <Sound
                    url="http://qln3al27f.hn-bkt.clouddn.com/closeB.mp3"
                    playStatus={this.state.audioB[-1] ? Sound.status.PLAYING : Sound.status.STOPPED}
                    autoLoad={true}
                    onFinishedPlaying={()=>this.setState({audioB: [false,false,false,false,false,false,false,false,false,false], isAllowed: true})}
                />

                <Button style={{position: 'fixed',left:'4%',top:'4%'}} type="primary"  shape="round" size="large" icon={<LeftOutlined />} onClick={() =>window.history.back(-1)}>
                    首页
                </Button>

                <Modal
                    maskClosable={false}
                    title="请输入你的姓名"
                    visible={this.state.vis}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    centered
                    okText="开始学习"
                    cancelText="返回主页"
                >
                    <Input
                        value={this.state.name}
                        placeholder="请输入你的姓名"
                        onChange={e => {this.setState({name:e.target.value})}}
                    />
                </Modal>
                <Modal
                    maskClosable={false}
                    title="完成学习"
                    visible={this.state.end}
                    onOk={this.handleEnd}
                    onCancel={this.cancelEnd}
                    centered
                    okText="完成学习"
                    cancelText="继续学习"
                >
                    <div>你已经学习了：{this.state.secondsElapsed}s</div>
                </Modal>
                <Progress className="progress" style={{position: 'fixed',right:'3vw',top:'2vh'}} width={'6vw'} type="circle" strokeColor={{
                    '10%': '#108ee9',
                    '100%': '#87d068',
                }} percent={this.state.percent} />
                {!this.state.vis && this.state.yujiazai && <Spin size="large" tip={`加载资源 ${this.state.jindu / 54 * 100} %`} style={{position: "fixed",top: "50%",left: "50%",transform: "translate(-50%, -50%)"}}/>}
                {!this.state.vis && !this.state.yujiazai && <Carousel isDisabled={!this.state.isAllowed} title="Carousel" function1={this.decline} function2={this.increase} function3={this.showEnd}>
                        {dragGroup[index[9]](this)}
                        {dragGroup[index[0]](this)}
                        {dragGroup[index[1]](this)}
                        {dragGroup[index[2]](this)}
                        {dragGroup[index[3]](this)}
                        {dragGroup[index[4]](this)}
                        {dragGroup[index[5]](this)}
                        {dragGroup[index[6]](this)}
                        {dragGroup[index[7]](this)}
                        {dragGroup[index[8]](this)}
                </Carousel>}
            </div>
        );
    }
}

export default Drag;

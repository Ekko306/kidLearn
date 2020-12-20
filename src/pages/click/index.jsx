import React from 'react';
import {Modal, Spin, Input, message, Select as Selector, Table, Space, Layout, Menu, Button, Progress} from 'antd';
import 'antd/es/button/style/css'
import 'antd/es/modal/style/css'
import 'antd/es/spin/style/css'
import 'antd/es/input/style/css'
import 'antd/es/radio/style/css'
import 'antd/es/table/style/css'
import 'antd/es/tag/style/css'
import 'antd/es/space/style/css'
import 'antd/es/layout/style/css'
import 'antd/es/menu/style/css'
import 'antd/es/popconfirm/style/css'
import 'antd/es/message/style/css'
import 'antd/es/select/style/css'
import 'antd/es/modal/style/css'
import 'antd/es/input/style/css'
import 'antd/es/progress/style/css'
import './index.scss';
import {
    LeftOutlined
} from '@ant-design/icons';
import Carousel from '../../components/Carousel'
import 'antd/es/card/style/css'
import 'antd/es/avatar/style/css'
import { Card, Avatar } from 'antd';
import Sound from 'react-sound';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';


const {Option} = Selector
const {Meta} = Card
let i = 0


const close4="http://qln3al27f.hn-bkt.clouddn.com/close1.jpg"
const cross4="http://qln3al27f.hn-bkt.clouddn.com/crossRoad123.png"
const cut4="http://qln3al27f.hn-bkt.clouddn.com/cut1.jpg"
const haul="http://qln3al27f.hn-bkt.clouddn.com/haul1.jpg"
const paint="http://qln3al27f.hn-bkt.clouddn.com/paint1.jpg"
const peel="http://qln3al27f.hn-bkt.clouddn.com/peel1.jpg"
const push="http://qln3al27f.hn-bkt.clouddn.com/push1.jpg"
const rub="http://qln3al27f.hn-bkt.clouddn.com/rub1.jpg"
const tear="http://qln3al27f.hn-bkt.clouddn.com/tear1.jpg"
const write="http://qln3al27f.hn-bkt.clouddn.com/write123my.png"

const writeGIF = "http://qln3al27f.hn-bkt.clouddn.com/writeGIFF.gif"
const paintGIF = "http://qln3al27f.hn-bkt.clouddn.com/paint_Gai.gif"
const peelGIF = "http://qln3al27f.hn-bkt.clouddn.com/pealApple.gif"
const clearBoardGIF = "http://qln3al27f.hn-bkt.clouddn.com/clearBoard.gif"
const pushGIF = "http://qln3al27f.hn-bkt.clouddn.com/push_GAI.gif"
const closeGIF = "http://qln3al27f.hn-bkt.clouddn.com/closeDoor.gif"
const crossGIF = "http://qln3al27f.hn-bkt.clouddn.com/crossRoad.gif"
const cutCakeGIF = "http://qln3al27f.hn-bkt.clouddn.com/cutCAke.gif"
const tearDownGIF = "http://qln3al27f.hn-bkt.clouddn.com/tearDown.gif"
const haulCar = "http://qln3al27f.hn-bkt.clouddn.com/haul_GAI.gif"

const imgGroup = [close4, cross4, cut4, haul, paint, peel, push, rub, tear, write]
const imgGIF = [closeGIF, crossGIF, cutCakeGIF, haulCar, paintGIF, peelGIF, pushGIF, clearBoardGIF, tearDownGIF, writeGIF]

const toEndImg = ["http://qln3al27f.hn-bkt.clouddn.com/AAcloseDoor.png","http://qln3al27f.hn-bkt.clouddn.com/AcrossRoad.png",
    "http://qln3al27f.hn-bkt.clouddn.com/AcutCAke.png","http://qln3al27f.hn-bkt.clouddn.com/Ahaul_GAI.png",
"http://qln3al27f.hn-bkt.clouddn.com/Apaint_Gai.png","http://qln3al27f.hn-bkt.clouddn.com/ApealApple.png",
    "http://qln3al27f.hn-bkt.clouddn.com/Apush_GAI.png","http://qln3al27f.hn-bkt.clouddn.com/AclearBoard.png",
"http://qln3al27f.hn-bkt.clouddn.com/AtearDown.png","http://qln3al27f.hn-bkt.clouddn.com/AwriteZi.png"]

const loadImg = [close4, cross4, cut4, haul, paint, peel, push, rub, tear, write, closeGIF, crossGIF, cutCakeGIF, haulCar, paintGIF, peelGIF, pushGIF, clearBoardGIF, tearDownGIF, writeGIF]

const shunxu = ["cross", "cut", "haul", "paint", "peel", "push", "rub", "tear", "write", "close4"];
// 1 2 3 4 5 6 7 8 9 0


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

class Click extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            columns: [],
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
            showGIF: [false, false, false, false, false, false, false, false, false, false],
            secondGIF: 0,
            yujiazai: true,
            jindu: 0,
            audioA: [false, false, false, false, false, false, false, false, false, false],
            audioB: [false, false, false, false, false, false, false, false, false, false],
            isAllowed: false,
            toEnd: [false, false, false, false, false, false, false, false, false, false]
        };
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
        loadImg.forEach((v, idx, arr)=> {
            var img = new Image();
            img.src = v;
            img.onload = () => {
                array.push(1)
                console.log(array.length)
                this.setState({
                    jindu: array.length
                })
                if(array.length === 20){
                    console.log("加载完毕")
                    let a = this.state.audioA
                    if(this.state.vis == false) {
                        let ind = this.state.index[i] - 1
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
        // this.setState({index: [0,0,0,0,0]});
    }
    componentDidMount() {
        // let circle = document.querySelector("#circle")
        // let rect = circle.getBoundingClientRect()
        // console.log(rect.left)
        // circle.click()
    }

    componentWillUnmount() {
        this.setState({
            data: [],
            columns: [],
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
            showGIF: [false, false, false, false, false, false, false, false, false, false],
            secondGIF: 0,
            yujiazai: true,
            jindu: 0,
            audioA: [false, false, false, false, false, false, false, false, false, false],
            audioB: [false, false, false, false, false, false, false, false, false, false],
            isAllowed: false,
            toEnd: [false, false, false, false, false, false, false, false, false, false]
        })
        i=0;
        clearInterval(this.interval);
    }

    handleOk = e => {
        let a = this.state.audioA
        if(this.state.yujiazai == false){
            let ind = this.state.index[i] - 1
            console.log("啊啊"  + ind)
            a[ind] = true
        }

        // let index = this.getRandom()
        if(this.state.name !== ""){
            this.interval = setInterval(() => this.tick(), 1000);
            this.setState({
                vis: false,
                audioA: a
            });
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
            table: "点击组",
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
            end: false
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

        if(i>8){
            i=9
        }
        i++;
        let a = this.state.audioA
        let ind = this.state.index[i] - 1
        console.log("啊啊"  + ind)

        a[ind] = true

        this.setState({ percent,audioA:  a, isAllowed: false});
    };

    decline = () => {
        let percent = this.state.percent - 10;
        if (percent < 0) {
            percent = 0;
        }

        if(i<-1){
            i=-1
        }
        i--;
        let a = this.state.audioA
        let ind = this.state.index[i] - 1
        console.log("啊啊"  + ind)

        a[ind] = true

        this.setState({ percent , audioA: a});
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
        console.log(array)
        return array
        // return [3,8,7,8,2,3,4,5,6,7,8]
    }



    render() {
        let {index, showGIF, toEnd} =this.state

        const a9 = <div id='a9' onClick={!this.state.audioA[8] ? ()=> {
            showGIF[9]=true;
            this.setState({showGIF}, ()=>{
                console.log("开始记时")
                setTimeout(()=>{
                    showGIF[9]=false;
                    toEnd[9] = true
                    let b = this.state.audioB
                    let ind = this.state.index[i] - 1
                    console.log("啊啊"  + ind)

                    b[ind] = true
                    this.setState({showGIF: showGIF, audioB: b, toEnd: toEnd},()=>{console.log(123123)})
                },2500)
            })
        }:null}>
            <img src={showGIF[9] ? imgGIF[9] : (toEnd[9] ? toEndImg[9] : imgGroup[9])} alt={"cross4"} style={{height: "43.4vw",width: "76vw"}}/>
            <div onMouseMove={()=>console.log(123)} style={{textAlign: "center", width: "76vw"}}>
                <h1 style={{marginBottom: "0px", fontSize: "56px"}}>Write</h1>
                <div style={{fontSize: "34px"}}>写</div>
            </div></div>;
        const a0 = <div id="a0" onClick={!this.state.audioA[-1] ? ()=> {
            showGIF[0]=true;
            this.setState({showGIF}, ()=>{
                console.log("开始记时")
                setTimeout(()=>{
                    let b = this.state.audioB
                    let ind = this.state.index[i] - 1
                    console.log("啊啊bbbb"  + ind)
                    toEnd[0] = true

                    b[ind] = true
                    showGIF[0]=false;
                    this.setState({showGIF: showGIF,audioB:b, toEnd: toEnd},()=>{console.log(123123)})
                },2050)
            })
        }:null}>
            <img src={showGIF[0] ? imgGIF[0] : (toEnd[0] ? toEndImg[0] : imgGroup[0])} alt={"cross4"} style={{height: "43.4vw",width: "76vw"}}/>
            <div onMouseMove={()=>console.log(123)} style={{textAlign: "center", width: "76vw"}}>
                <h1 style={{marginBottom: "0px", fontSize: "56px"}}>Close</h1>
                <div style={{fontSize: "34px"}}>关</div>
            </div></div>;
        const a1 = <div id="a1" onClick={!this.state.audioA[0] ? ()=> {
            showGIF[1]=true;
            this.setState({showGIF}, ()=>{
                console.log("开始记时")
                setTimeout(()=>{
                    let b = this.state.audioB
                    let ind = this.state.index[i] - 1
                    console.log("啊啊"  + ind)

                    toEnd[1] = true
                    b[ind] = true
                    showGIF[1]=false;
                    this.setState({showGIF: showGIF,audioB: b, toEnd: toEnd},()=>{console.log(123123)})
                },4900)
            })
        }:null}>
            <img src={showGIF[1] ? imgGIF[1] : (toEnd[1] ? toEndImg[1] : imgGroup[1])} alt={"cross4"} style={{height: "43.4vw",width: "76vw"}}/>
            <div onMouseMove={()=>console.log(123)} style={{textAlign: "center", width: "76vw"}}>
                <h1 style={{marginBottom: "0px", fontSize: "56px"}}>Cross</h1>
                <div style={{fontSize: "34px"}}>横穿</div>
            </div></div>;
        const a2 = <div id="a2" onClick={!this.state.audioA[1] ?()=> {
            showGIF[2]=true;
            this.setState({showGIF}, ()=>{
                console.log("开始记时")
                setTimeout(()=>{
                    let b = this.state.audioB
                    let ind = this.state.index[i] - 1
                    console.log("啊啊"  + ind)

                    toEnd[2] = true
                    b[ind] = true
                    showGIF[2]=false;
                    this.setState({showGIF: showGIF,audioB:b, toEnd: toEnd},()=>{console.log(123123)})
                },2700)
            })
        }:null}>
            <img src={showGIF[2] ? imgGIF[2] : (toEnd[2] ? toEndImg[2] : imgGroup[2])} alt={"cross4"} style={{height: "43.4vw",width: "76vw"}}/>
            <div onMouseMove={()=>console.log(123)} style={{textAlign: "center", width: "76vw"}}>
                <h1 style={{marginBottom: "0px", fontSize: "56px"}}>Cut</h1>
                <div style={{fontSize: "34px"}}>切</div>
            </div></div>;
        const a3 = <div id="a3" onClick={!this.state.audioA[2] ? ()=> {
            showGIF[3]=true;
            this.setState({showGIF}, ()=>{
                console.log("开始记时")
                setTimeout(()=>{
                    let b = this.state.audioB
                    let ind = this.state.index[i] - 1
                    console.log("啊啊"  + ind)

                    toEnd[3] = true
                    b[ind] = true
                    showGIF[3]=false;
                    this.setState({showGIF: showGIF,audioB:b, toEnd: toEnd},()=>{console.log(123123)})
                },4500)
            })
        }: null}>
            <img src={showGIF[3] ? imgGIF[3] : (toEnd[3] ? toEndImg[3] : imgGroup[3])} alt={"cross4"} style={{height: "43.4vw",width: "76vw"}}/>
            <div onMouseMove={()=>console.log(123)} style={{textAlign: "center", width: "76vw"}}>
                <h1 style={{marginBottom: "0px", fontSize: "56px"}}>Haul</h1>
                <div style={{fontSize: "34px"}}>拉</div>
            </div></div>;
        const a4 = <div id="a4" onClick={!this.state.audioA[3] ? ()=> {
            showGIF[4]=true;
            this.setState({showGIF}, ()=>{
                console.log("开始记时")
                setTimeout(()=>{
                    let b = this.state.audioB
                    let ind = this.state.index[i] - 1
                    console.log("啊啊"  + ind)

                    toEnd[4] = true
                    b[ind] = true
                    showGIF[4]=false;
                    this.setState({showGIF: showGIF,audioB:b, toEnd: toEnd},()=>{console.log(123123)})
                },2800)
            })
        }: null}>
            <img src={showGIF[4] ? imgGIF[4] : (toEnd[4]?toEndImg[4]:imgGroup[4])} alt={"cross4"} style={{height: "43.4vw",width: "76vw"}}/>
            <div onMouseMove={()=>console.log(123)} style={{textAlign: "center", width: "76vw"}}>
                <h1 style={{marginBottom: "0px", fontSize: "56px"}}>Paint</h1>
                <div style={{fontSize: "34px"}}>油漆</div>
            </div></div>;
        const a5 = <div id="a5" onClick={!this.state.audioA[4] ? ()=> {
            showGIF[5]=true;
            this.setState({showGIF}, ()=>{
                console.log("开始记时")
                setTimeout(()=>{
                    let b = this.state.audioB
                    let ind = this.state.index[i] - 1
                    console.log("啊啊"  + ind)

                    toEnd[5] = true
                    b[ind] = true
                    showGIF[5]=false;
                    this.setState({showGIF: showGIF,audioB:b, toEnd: toEnd},()=>{console.log(123123)})
                },2600)
            })
        }: null}>
            <img src={showGIF[5] ? imgGIF[5] : (toEnd[5]?toEndImg[5]:imgGroup[5])} alt={"cross4"} style={{height: "43.4vw",width: "76vw"}}/>
            <div onMouseMove={()=>console.log(123)} style={{textAlign: "center", width: "76vw"}}>
                <h1 style={{marginBottom: "0px", fontSize: "56px"}}>Peel</h1>
                <div style={{fontSize: "34px"}}>削，刮</div>
            </div></div>;
        const a6 = <div id="a6" onClick={!this.state.audioA[5] ? ()=> {
            showGIF[6]=true;
            this.setState({showGIF}, ()=>{
                console.log("开始记时")
                setTimeout(()=>{
                    let b = this.state.audioB
                    let ind = this.state.index[i] - 1
                    console.log("啊啊"  + ind)

                    toEnd[6] = true
                    b[ind] = true
                    showGIF[6]=false;
                    this.setState({showGIF: showGIF,audioB:b,toEnd:toEnd},()=>{console.log(123123)})
                },4200)
            })
        } : null}>
            <img src={showGIF[6] ? imgGIF[6] : (toEnd[6]?toEndImg[6]:imgGroup[6])} alt={"cross4"} style={{height: "43.4vw",width: "76vw"}}/>
            <div onMouseMove={()=>console.log(123)} style={{textAlign: "center", width: "76vw"}}>
                <h1 style={{marginBottom: "0px", fontSize: "56px"}}>Push</h1>
                <div style={{fontSize: "34px"}}>推</div>
            </div></div>;
        const a7 = <div id="a7" onClick={!this.state.audioA[6] ? ()=> {
            showGIF[7]=true;
            this.setState({showGIF}, ()=>{
                console.log("开始记时")
                setTimeout(()=>{
                    let b = this.state.audioB
                    let ind = this.state.index[i] - 1
                    console.log("啊啊"  + ind)

                    toEnd[7] = true
                    b[ind] = true
                    showGIF[7]=false;
                    this.setState({showGIF: showGIF,audioB:b,toEnd:toEnd},()=>{console.log(123123)})
                },2000)
            })
        } : null}>
            <img src={showGIF[7] ? imgGIF[7] : (toEnd[7] ? toEndImg[7] : imgGroup[7])} alt={"cross4"} style={{height: "43.4vw",width: "76vw"}}/>
            <div onMouseMove={()=>console.log(123)} style={{textAlign: "center", width: "76vw"}}>
                <h1 style={{marginBottom: "0px", fontSize: "56px"}}>Rub</h1>
                <div style={{fontSize: "34px"}}>擦</div>
            </div></div>;

        const a8 = <div id="a8" onClick={!this.state.audioA[7] ? ()=> {
            showGIF[8]=true;
            this.setState({showGIF}, ()=>{
                console.log("开始记时")
                setTimeout(()=>{
                    let b = this.state.audioB
                    let ind = this.state.index[i] - 1
                    console.log("啊啊"  + ind)

                    toEnd[8] = true
                    b[ind] = true
                    showGIF[8]=false;
                    this.setState({showGIF: showGIF,audioB:b,toEnd: toEnd},()=>{console.log(123123)})
                },3000)
            })
        } : null}>
            <img src={showGIF[8] ? imgGIF[8] : (toEnd[8]? toEndImg[8] :imgGroup[8])} alt={"cross4"} style={{height: "43.4vw",width: "76vw"}}/>
            <div onMouseMove={()=>console.log(123)} style={{textAlign: "center", width: "76vw"}}>
                <h1 style={{marginBottom: "0px", fontSize: "56px"}}>Tear</h1>
                <div style={{fontSize: "34px"}}>撕</div>
            </div></div>;
        const caGroup = [a0, a1, a2, a3, a4, a5, a6, a7, a8, a9];


        return (
            <div style={{width:'100%',height:'100%',zIndex:'-100',position:'fixed',top:0}}>
                <Sound
                    url="http://qln3al27f.hn-bkt.clouddn.com/crossA.mp3"
                    playStatus={this.state.audioA[0] ? Sound.status.PLAYING : Sound.status.STOPPED}
                    autoLoad={true}
                    onFinishedPlaying={()=>this.setState({audioA: [false,false,false,false,false,false,false,false,false,false]})}
                />
                <Sound
                    url="http://qln3al27f.hn-bkt.clouddn.com/cutA.mp3"
                    playStatus={this.state.audioA[1] ? Sound.status.PLAYING : Sound.status.STOPPED}
                    autoLoad={true}
                    onFinishedPlaying={()=>this.setState({audioA: [false,false,false,false,false,false,false,false,false,false]})}
                />
                <Sound
                    url="http://qln3al27f.hn-bkt.clouddn.com/haulA.mp3"
                    playStatus={this.state.audioA[2] ? Sound.status.PLAYING : Sound.status.STOPPED}
                    autoLoad={true}
                    onFinishedPlaying={()=>this.setState({audioA: [false,false,false,false,false,false,false,false,false,false]})}
                />
                <Sound
                    url="http://qln3al27f.hn-bkt.clouddn.com/paintA.mp3"
                    playStatus={this.state.audioA[3] ? Sound.status.PLAYING : Sound.status.STOPPED}
                    autoLoad={true}
                    onFinishedPlaying={()=>this.setState({audioA: [false,false,false,false,false,false,false,false,false,false]})}
                />
                <Sound
                    url="http://qln3al27f.hn-bkt.clouddn.com/peelA.mp3"
                    playStatus={this.state.audioA[4] ? Sound.status.PLAYING : Sound.status.STOPPED}
                    autoLoad={true}
                    onFinishedPlaying={()=>this.setState({audioA: [false,false,false,false,false,false,false,false,false,false]})}
                />
                <Sound
                    url="http://qln3al27f.hn-bkt.clouddn.com/pushA.mp3"
                    playStatus={this.state.audioA[5] ? Sound.status.PLAYING : Sound.status.STOPPED}
                    autoLoad={true}
                    onFinishedPlaying={()=>this.setState({audioA: [false,false,false,false,false,false,false,false,false,false]})}
                />
                <Sound
                    url="http://qln3al27f.hn-bkt.clouddn.com/rubA.mp3"
                    playStatus={this.state.audioA[6] ? Sound.status.PLAYING : Sound.status.STOPPED}
                    autoLoad={true}
                    onFinishedPlaying={()=>this.setState({audioA: [false,false,false,false,false,false,false,false,false,false]})}
                />
                <Sound
                    url="http://qln3al27f.hn-bkt.clouddn.com/tearAgai.mp3"
                    playStatus={this.state.audioA[7] ? Sound.status.PLAYING : Sound.status.STOPPED}
                    autoLoad={true}
                    onFinishedPlaying={()=>this.setState({audioA: [false,false,false,false,false,false,false,false,false,false]})}
                />
                <Sound
                    url="http://qln3al27f.hn-bkt.clouddn.com/writeA.mp3"
                    playStatus={this.state.audioA[8] ? Sound.status.PLAYING : Sound.status.STOPPED}
                    autoLoad={true}
                    onFinishedPlaying={()=>this.setState({audioA: [false,false,false,false,false,false,false,false,false,false]})}
                />
                <Sound
                    url="http://qln3al27f.hn-bkt.clouddn.com/closeA.mp3"
                    playStatus={this.state.audioA[-1] ? Sound.status.PLAYING : Sound.status.STOPPED}
                    autoLoad={true}
                    onFinishedPlaying={()=>this.setState({audioA: [false,false,false,false,false,false,false,false,false,false]})}
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
                {!this.state.vis && this.state.yujiazai && <Spin size="large" tip={`加载资源 ${this.state.jindu / 20 * 100} %`} style={{position: "fixed",top: "50%",left: "50%",transform: "translate(-50%, -50%)"}}/>}
                {!this.state.vis && !this.state.yujiazai && <Carousel isDisabled={!this.state.isAllowed} title="Carousel" function1={this.decline} function2={this.increase} function3={this.showEnd}>
                    {caGroup[index[9]]}
                    {caGroup[index[0]]}
                    {caGroup[index[1]]}
                    {caGroup[index[2]]}
                    {caGroup[index[3]]}
                    {caGroup[index[4]]}
                    {caGroup[index[5]]}
                    {caGroup[index[6]]}
                    {caGroup[index[7]]}
                    {caGroup[index[8]]}
                </Carousel>}
            </div>
        );
    }
}

export default Click;

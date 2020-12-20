import React from "react";
import "./index.scss";
import { Input, Space, Card, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined, EditOutlined } from '@ant-design/icons';
import 'antd/es/input/style/css'
import 'antd/es/space/style/css'
import 'antd/es/card/style/css'
import 'antd/es/button/style/css'
// eslint-disable-next-line


const close4="http://qln3al27f.hn-bkt.clouddn.com/close1.jpg"
const cross4="http://qln3al27f.hn-bkt.clouddn.com/crossRoad123.png"
const cut4="http://qln3al27f.hn-bkt.clouddn.com/cut1.jpg"
const haul="http://qln3al27f.hn-bkt.clouddn.com/haul1.jpg"
const paint="http://qln3al27f.hn-bkt.clouddn.com/paint1.jpg"
const peel="http://qln3al27f.hn-bkt.clouddn.com/peel1.jpg"
const push="http://qln3al27f.hn-bkt.clouddn.com/push1.jpg"
const rub="http://qln3al27f.hn-bkt.clouddn.com/rub1.jpg"
const tear="http://qln3al27f.hn-bkt.clouddn.com/tear1.jpg"
const write="http://qln3al27f.hn-bkt.clouddn.com/write1.jpg"

const writeGIF = "http://qln3al27f.hn-bkt.clouddn.com/writeZi.gif"
const paintGIF = "http://qln3al27f.hn-bkt.clouddn.com/paint.gif"
const peelGIF = "http://qln3al27f.hn-bkt.clouddn.com/pealApple.gif"
const clearBoardGIF = "http://qln3al27f.hn-bkt.clouddn.com/clearBoard.gif"
const pushGIF = "http://qln3al27f.hn-bkt.clouddn.com/pushCar.gif"
const closeGIF = "http://qln3al27f.hn-bkt.clouddn.com/closeDoor.gif"
const crossGIF = "http://qln3al27f.hn-bkt.clouddn.com/crossRoad.gif"
const cutCakeGIF = "http://qln3al27f.hn-bkt.clouddn.com/cutCAke.gif"
const tearDownGIF = "http://qln3al27f.hn-bkt.clouddn.com/tearDown.gif"
const haulCar = "http://qln3al27f.hn-bkt.clouddn.com/haulCarD.gif"

const imgGroup = [close4, cross4, cut4, haul, paint, peel, push, rub, tear, write]
const imgGIF = [closeGIF, crossGIF, cutCakeGIF, haulCar, paintGIF, peelGIF, pushGIF, clearBoardGIF, tearDownGIF, writeGIF]

const loadImg = [close4, cross4, cut4, haul, paint, peel, push, rub, tear, write, closeGIF, crossGIF, cutCakeGIF, haulCar, paintGIF, peelGIF, pushGIF, clearBoardGIF, tearDownGIF, writeGIF]

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



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            passwd: '',
            loadings: false
        };

    }
    // componentWillMount() {
    //     loadImg.forEach((v, idx, arr)=> {
    //         var img = new Image();
    //         img.src = v;
    //         img.onload = () => {
    //             arr.successLength = (arr.successLength || 0) + 1;
    //             console.log(v);
    //         }
    //     })
    // }

    onChangeName(e){
        this.setState({
            name: e.target.value
        })
    }

    onChangePasswd(e){
        this.setState({
            passwd: e.target.value
        })
    }

    enterLoading() {
        this.setState({
            loadings: true
        },()=> {
            if(this.state.name==="admin" && this.state.passwd==="123456"){
                this.props.history.push('/drag');
            } else{
                alert("密码或账户名错误！")
                this.setState({
                    loadings: false
                })
            }
            }
        );

    };

    go(num){
        console.log(123)
        switch(num){
            case "1": this.props.history.push('/click'); break;
            case "2": this.props.history.push('/drag'); break;
            case "3": this.props.history.push('/watch'); break;
            case "4": this.props.history.push('/table'); break;
            default: this.props.history.push('/delete'); break;
        }
    }

    render() {
        return (
            <>
                <div>{window.innerWidth}</div>
            <div style={{position: 'fixed',left: '16%',top:'15%'}}>
                <Button type="primary" style={{display: 'block', height: "200px", width: "200px", "font-size": "34px"}} onClick={this.go.bind(this,'1')}>点击组</Button>
                <Button type="primary" style={{display: 'block', height: "200px", width: "200px", "font-size": "34px",position: "absolute" ,'margin-top':'-200px', 'margin-left': '273px'}} onClick={this.go.bind(this,'2')}>拖拽组</Button>
                <Button type="primary" style={{display: 'block', height: "200px", width: "200px", "font-size": "34px",position: "absolute" ,'margin-top':'-200px', 'margin-left': '552px'}} onClick={this.go.bind(this,'3')}>观看组</Button>
                <Button type="primary" style={{display: 'block', height: "200px", width: "200px", "font-size": "34px",position: "absolute" ,'margin-top':'95px', 'margin-left': '273px'}} onClick={this.go.bind(this,'4')}>记录表</Button>
            </div>
                <div style={{position: 'fixed',left:'8%',top:'50%'}}>
                    <Dog/>
                </div>
            </>
        );
    }
}

export default Home;

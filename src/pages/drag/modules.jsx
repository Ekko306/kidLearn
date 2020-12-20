import Draggable from "react-draggable"
import {message} from "antd"
import React from "react"
const pinmuWidth = window.innerWidth

const do1 = "http://qln3al27f.hn-bkt.clouddn.com/do1.png"
const do2 = "http://qln3al27f.hn-bkt.clouddn.com/do2.png"
const do3 = "http://qln3al27f.hn-bkt.clouddn.com/do3.png"
const doM = "http://qln3al27f.hn-bkt.clouddn.com/doM.png"
const doM2 = "http://qln3al27f.hn-bkt.clouddn.com/doM2.png"
let do_Ar = "http://qln3al27f.hn-bkt.clouddn.com/do_Ar.png"
const closeGIF = "http://qln3al27f.hn-bkt.clouddn.com/close.gif"

const c1 = "http://qln3al27f.hn-bkt.clouddn.com/cross.png"
const c2 = "http://qln3al27f.hn-bkt.clouddn.com/cross2.png"
const crossGIF = "http://qln3al27f.hn-bkt.clouddn.com/cross.gif"
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


const moveImage = "http://qln3al27f.hn-bkt.clouddn.com/timg.gif"

const closeDoor =(propThis) => {return(
    <div className="close-door" style={{position: "relative"}} onClick={()=>{propThis.setState({doorArrow: false})}}>
        <img src={do1} style={{height: "43.4vw",width: "76vw", zIndex: -20,position: "relative"}} alt={"d1"}/>
        <img src={do2} style={{height: "43.4vw",width: "76vw", zIndex: -20,position: "absolute", top: 0, left: 0}} alt={"d1"}/>
        <img src={do3} style={{height: "43.4vw",width: "76vw", zIndex: -20,position: "absolute", top: 0, left: 0}} alt={"d1"}/>
        {propThis.state.doorArrow && <img src={propThis.state.do_Ar ? do_Ar: null} style={{height: "43.4vw",width: "76vw", zIndex: 3000,position: "absolute", top: 0, left: 0}}/>}
        <Draggable
            axis="x"
            handle=".handle"
            // defaultPosition={{x: -50, y: 25}}
            position={null}
            grid={[15, 25]}
            scale={1}
            onStart={(e, data)=>propThis.setState({move: !propThis.state.move, do_Ar: false})}
            onStop={(e, data)=>{
                propThis.setState({
                    move: !propThis.state.move
                })
                if(data.lastX ==pinmuWidth*0.165){
                    message.success('门关上啦！');
                    let b = propThis.state.audioB
                    let ind = propThis.state.index[propThis.state.i] - 1
                    console.log("啊啊"  + ind)

                    b[ind] = true
                    propThis.setState({
                        audioB: b
                    })
                }
            }}
            bounds={{left: 0, right: pinmuWidth*0.165}}
        >
            <div>
                <img className="handle" style={propThis.state.move ? {height:"46%", position: "absolute", left: "11.7%", top:"46.2%", zIndex: 3002} : {height:"100%", position: "absolute", left: "0", top:"0", zIndex: 3000}} src={propThis.state.move ? closeGIF : doM} alt={'syp'} />
                {/*<img className="handle" style={{height:"46%", position: "absolute", left: "11.7%", top:"46.2%", zIndex: 3000}} src={closeGIF} alt={'syp'} />*/}
                <img className="handle" style={{height:"100%", position: "absolute", left: "0", top:"0", zIndex: 2500}} src={doM2} alt={'syp'} />
            </div>
        </Draggable>
        <div onMouseMove={()=>console.log(123)} style={{textAlign: "center", width: "76vw"}}>
            <h1 style={{marginBottom: "0px", fontSize: "56px"}}>Close</h1>
            <div style={{fontSize: "34px"}}>关</div>
        </div>
    </div>
)}

const crossWay =(propThis) => {return(
    <div className="close-door" style={{position: "relative"}}>
        <img src={c2} style={{height: "43.4vw",width: "76vw", zIndex: -20,position: "relative"}} alt={"d1"}/>
        {/*<img src={p2} style={{height: "43.4vw",width: "76vw", zIndex: -20,position: "absolute", top: 0, left: 0}} alt={"d1"}/>*/}
        <img src={propThis.state.crossAr ? crossAr : null} style={{height: "43.4vw",width: "76vw", zIndex: -20,position: "absolute", top: 0, left: 0}}/>
        <Draggable
            axis="x"
            handle=".handle"
            // defaultPosition={{x: -50, y: 25}}
            position={null}
            grid={[15, 25]}
            scale={1}
            onStart={(e, data)=>propThis.setState({move: !propThis.state.move,crossAr: null})}
            onStop={(e, data)=>{
                propThis.setState({
                    move: !propThis.state.move
                })
                if(data.lastX ==pinmuWidth*0.539){
                    message.success('横穿马路啦！');
                    let b = propThis.state.audioB
                    let ind = propThis.state.index[propThis.state.i] - 1
                    console.log("啊啊"  + ind)

                    b[ind] = true
                    propThis.setState({
                        audioB: b
                    })
                }
            }}
            bounds={{left: 0, right: pinmuWidth*0.539}}
        >
            <div>
                <img className="handle" style={{height:"91%", position: "absolute", left: "-1%", top:"10%", zIndex: 3000}} src={propThis.state.move ? crossGIF : c1} alt={'syp'} />
            </div>
        </Draggable>
        <div onMouseMove={()=>console.log(123)} style={{textAlign: "center", width: "76vw"}}>
            <h1 style={{marginBottom: "0px", fontSize: "56px"}}>Cross</h1>
            <div style={{fontSize: "34px"}}>横穿</div>
        </div>
    </div>
)}

const pushCar =(propThis) => {return(
    <div className="close-door" style={{position: "relative"}}>
        <img src={p1} style={{height: "43.4vw",width: "76vw", zIndex: -20,position: "relative"}} alt={"d1"}/>
        <img src={p2} style={{height: "43.4vw",width: "76vw", zIndex: -20,position: "absolute", top: 0, left: 0}} alt={"d1"}/>
        <img src={propThis.state.pushCar_Ar ? pushCar_Ar : null} style={{height: "43.4vw",width: "76vw", zIndex: -20,position: "absolute", top: 0, left: 0}}/>
        <Draggable
            axis="x"
            handle=".handle"
            // defaultPosition={{x: -50, y: 25}}
            position={null}
            grid={[25, 25]}
            scale={1}
            onStart={(e, data)=>propThis.setState({move: !propThis.state.move, pushCar_Ar: null})}
            onStop={(e, data)=>{
                propThis.setState({
                    move: !propThis.state.move
                })
                if(data.lastX ==-1*0.544*pinmuWidth){
                    message.success('推过去啦！');
                    let b = propThis.state.audioB
                    let ind = propThis.state.index[propThis.state.i] - 1
                    console.log("啊啊"  + ind)

                    b[ind] = true
                    propThis.setState({
                        audioB: b
                    })
                }
            }}
            bounds={{left: -1*0.544*pinmuWidth, right: 0}}
        >
            <div>
                <img className="handle" style={propThis.state.move ? {height:"63%", position: "absolute", left: "69.2%", top:"29%", zIndex: 3000} : {height:"91%", position: "absolute", left: "20%", top:"10%", zIndex: 3000}} src={propThis.state.move ? pushGif : p3} alt={'syp'} />
            </div>
        </Draggable>
        <div onMouseMove={()=>console.log(123)} style={{textAlign: "center", width: "76vw"}}>
            <h1 style={{marginBottom: "0px", fontSize: "56px"}}>Push</h1>
            <div style={{fontSize: "34px"}}>推</div>
    </div>
    </div>
)}

const haulCar =(propThis) => {return(
    <div className="close-door" style={{position: "relative"}}>
        <img src={ha1} style={{height: "43.4vw",width: "76vw", zIndex: -20,position: "relative"}} alt={"d1"}/>
        <img src={ha2} style={{height: "43.4vw",width: "76vw", zIndex: -20,position: "absolute", top: 0, left: 0}} alt={"d1"}/>
        <img src={ha3} style={{height: "43.4vw",width: "76vw", zIndex: -20,position: "absolute", top: 0, left: 0}} alt={"d1"}/>
        <img src={propThis.state.ha6 ? ha6 :null } style={{height: "43.4vw",width: "76vw", zIndex: -20,position: "absolute", top: 0, left: "-3%"}}/>
        <Draggable
            axis="x"
            handle=".handle"
            // defaultPosition={{x: -50, y: 25}}
            position={null}
            grid={[25, 25]}
            scale={1}
            onStart={(e, data)=>propThis.setState({move: !propThis.state.move, ha6: false})}
            onStop={(e, data)=>{
                propThis.setState({
                    move: !propThis.state.move
                })
                if(data.lastX ==0.449*pinmuWidth){
                    message.success('拉过去啦！');
                    let b = propThis.state.audioB
                    let ind = propThis.state.index[propThis.state.i] - 1
                    console.log("啊啊"  + ind)

                    b[ind] = true
                    propThis.setState({
                        audioB: b
                    })
                }
            }}
            bounds={{left: 0, right: 0.449*pinmuWidth}}
        >
            <div>
                <img className="handle" style={propThis.state.move ? {height:"68%", position: "absolute", left: "10%", top:"32%", zIndex: 3002} : {height:"91%", position: "absolute", left: "-6%", top:"10%", zIndex: 3000}} src={propThis.state.move ? haGIF : ha5} alt={'syp'} />
                {/*<img className="handle" style={} src={haGIF} alt={'syp'} />*/}
                <img className="handle" style={{height:"91%", position: "absolute", left: "-6%", top:"10%", zIndex: 3000}} src={ha4} alt={'syp'} />
            </div>
        </Draggable>
        <div onMouseMove={()=>console.log(123)} style={{textAlign: "center", width: "76vw"}}>
            <h1 style={{marginBottom: "0px", fontSize: "56px"}}>Haul</h1>
            <div style={{fontSize: "34px"}}>拉</div>
        </div>
    </div>
)}

const write =(propThis) => {return(
    <div className="close-door" style={{position: "relative"}} onClick={() => propThis.setState({writeArrow: false})}>
        <img src={wr1} style={{height: "43.4vw",width: "76vw", zIndex: -20,position: "relative"}} alt={"d1"}/>
        {propThis.state.writeArrow && <img src={propThis.state.wr2 ? wr2 : null} style={{height: "43.4vw",width: "76vw", zIndex: 3000,position: "absolute", top: 0, left: 0}} />}
        <img src={wra} style={{height: "43.4vw",width: "76vw", zIndex: -20,position: "absolute", top: 0, left: 0}} alt={"d1"}/>
        <img src={wrb} style={propThis.state.writeStyle} alt={"d1"}/>
        <Draggable
            axis="x"
            handle=".handle"
            // defaultPosition={{x: -50, y: 25}}
            position={null}
            grid={[30, 25]}
            scale={1}
            onStart={(e, data)=>propThis.setState({move: !propThis.state.move, wr2: null})}
            onStop={(e, data)=>{
                propThis.setState({
                    move: !propThis.state.move
                })
                if(data.lastX ==0.212*pinmuWidth){
                    message.success('写完字啦！');
                    let b = propThis.state.audioB
                    let ind = propThis.state.index[propThis.state.i] - 1
                    console.log("啊啊"  + ind)

                    b[ind] = true
                    propThis.setState({
                        audioB: b
                    })
                }
            }}
            onDrag={(e, data) => {
                let {writeStyle} = propThis.state
                let pre = writeStyle.clip.substring(9, writeStyle.clip.length - 15)
                console.log(pre)
                let compute = Math.max(2.795 * Number(data.x) / 30 + 27, pre)
                // console.log(Number(data.x) / 30)
                // console.log(compute)
                // let clip = "rect(0px,38vw,57.4vh,27vw)"
                let clip = "rect(0px," + String(compute) + "vw,57.4vh,27vw)"
                let newWriteStyle = Object.assign({}, writeStyle, {clip: clip})
                // let computeWidth = Math.max(27 + data.x, Number(appleWidth.width.substring(0, appleWidth.width.length-2)))
                // let newAppleWidth = Object.assign({}, appleWidth, {width: String(computeWidth) + "px"})
                propThis.setState({writeStyle: newWriteStyle})

            }}
            bounds={{left: 0, right: 0.212*pinmuWidth}}
        >
            <div>
                {/*<img className="handle" style={propThis.state.move ? {height:"68%", position: "absolute", left: "10%", top:"32%", zIndex: 3002} : {height:"91%", position: "absolute", left: "-6%", top:"10%", zIndex: 3000}} src={propThis.state.move ? haGIF : ha5} alt={'syp'} />*/}
                {/*<img className="handle" style={} src={haGIF} alt={'syp'} />*/}
                {/*<div style={{width: "200px", height: "200px", backgroundColor: "red", zIndex: -12}}></div>*/}
                <img className="handle" style={{height:"91%", position: "absolute", left: "-13%", top:"-6%", zIndex: 3}} src={wr3} alt={'syp'} />
            </div>
        </Draggable>
        <div onMouseMove={()=>console.log(123)} style={{textAlign: "center", width: "76vw"}}>
            <h1 style={{marginBottom: "0px", fontSize: "56px"}}>Write</h1>
            <div style={{fontSize: "34px"}}>写</div>
        </div>
    </div>
)}

const peelApple =(propThis) => {return(
    <div className="close-door" style={{position: "relative", overflow: "hidden"}} onClick={()=>{propThis.setState({appleArrow: false})}}>
        <img src={pe2} style={{height: "43.4vw",width: "76vw", zIndex: -20,position: "relative"}} alt={"d1"}/>
        <img src={pe3} style={{height: "43.4vw",width: "76vw", zIndex: -20,position: "absolute", left: 0, top: 0}} alt={"d1"}/>
        <img src={applePi} style={{height: "43.4vw",width: "76vw", zIndex: -20,position: "absolute", left: 0, top: 0}} alt={"d1"}/>
        {propThis.state.appleArrow && <img src={peel_Ar} style={{height: "43.4vw",width: "76vw", zIndex: 3000,position: "absolute", top: 0, left: 0}}/>}
        <div className="react-draggable">
        <div className="width" id="apple" style={propThis.state.appleWidth}/>
        </div>
        <Draggable
            axis="x"
            handle=".handle"
            // defaultPosition={{x: -50, y: 25}}
            position={null}
            grid={[25, 25]}
            scale={1}
            // onStart={(e, data)=> {peel_Ar=null}}
            onDrag={(e, data) => {
                let apple = document.getElementById("apple")
                // console.log(propThis.state.appleWidth)
                // console.log(apple.style)
                let {appleWidth} = propThis.state
                let computeWidth = Math.max(27 + data.x, Number(appleWidth.width.substring(0, appleWidth.width.length-2)))
                let newAppleWidth = Object.assign({}, appleWidth, {width: String(computeWidth) + "px"})
                // console.log(newAppleWidth)
                propThis.setState({appleWidth: newAppleWidth})

                // propThis.setState({appleWidth: data.x})
            }}
            onStop={(e, data)=>{
                propThis.setState({
                    move: false
                })
                if(data.lastX ==pinmuWidth*0.326){
                    message.success('苹果削完啦！');
                    let b = propThis.state.audioB
                    let ind = propThis.state.index[propThis.state.i] - 1
                    console.log("啊啊"  + ind)

                    b[ind] = true
                    propThis.setState({
                        audioB: b
                    })
                }
            }}
            bounds={{left: 0, right: pinmuWidth*0.326}}
        >
            <div>
                <img className="handle" style={{height:"100%", position: "absolute", left: "1%", top:"0.3%", zIndex: 3000}} src={pe1} alt={'syp'} />
            </div>
        </Draggable>
        <div onMouseMove={()=>console.log(123)} style={{textAlign: "center", width: "76vw"}}>
            <h1 style={{marginBottom: "0px", fontSize: "56px"}}>Peel</h1>
            <div style={{fontSize: "34px"}}>削，刮</div>
        </div>
    </div>
)}

const cutCake =(propThis) => {return(
    <div className="close-door" style={{position: "relative", overflow: "hidden"}} onClick={()=>{propThis.setState({cutArrow: false})}}>
        <img src={cut1} style={{height: "43.4vw",width: "76vw", zIndex: -20,position: "relative"}} alt={"d1"}/>
        <img src={cut2} style={{height: "43.4vw",width: "76vw", zIndex: -20,position: "absolute", left: 0, top: 0}} alt={"d1"}/>
        {propThis.state.cutArrow && <img src={cutAr} style={{height: "43.4vw",width: "76vw", zIndex: 3000,position: "absolute", top: 0, left: 0}}/>}
        <div className="react-draggable">
            <div className="width" id="apple" style={propThis.state.knifeWidth}/>
        </div>
        <Draggable
            axis="x"
            handle=".handle"
            // defaultPosition={{x: -50, y: 25}}
            position={null}
            grid={[5, 25]}
            scale={1}
            // onStart={(e, data)=> {peel_Ar=null}}
            onDrag={(e, data) => {
                let {knifeWidth} = propThis.state
                let computeWidth = Math.max(-18 + data.x, Number(knifeWidth.width.substring(0, knifeWidth.width.length-2)))
                let newAppleWidth = Object.assign({}, knifeWidth, {width: String(computeWidth) + "px"})
                // console.log(newAppleWidth)
                propThis.setState({knifeWidth: newAppleWidth})

                // propThis.setState({appleWidth: data.x})
            }}
            onStop={(e, data)=>{
                propThis.setState({
                    move: false
                })
                if(data.lastX ==0.445*pinmuWidth){
                    message.success('蛋糕切完啦！');
                    let b = propThis.state.audioB
                    let ind = propThis.state.index[propThis.state.i] - 1
                    console.log("啊啊"  + ind)

                    b[ind] = true
                    propThis.setState({
                        audioB: b
                    })
                }
            }}
            bounds={{left: 0, right: 0.445*pinmuWidth}}
        >
            <div>
                <img className="handle" style={{height:"100%", position: "absolute", left: "1%", top:"0.3%", zIndex: 3000}} src={cut3} alt={'syp'} />
            </div>
        </Draggable>
        <div onMouseMove={()=>console.log(123)} style={{textAlign: "center", width: "76vw"}}>
            <h1 style={{marginBottom: "0px", fontSize: "56px"}}>Cut</h1>
            <div style={{fontSize: "34px"}}>切</div>
        </div>
    </div>
)}

const rubBoard =(propThis) => {return(
    <div className="close-door" style={{position: "relative", overflow: "hidden"}} >
        <img src={rub1} style={{height: "43.4vw",width: "76vw", zIndex: -20,position: "relative"}} alt={"d1"}/>
        <img src={rub3} style={{height: "43.4vw",width: "76vw", zIndex: -20,position: "absolute", top: 0, left: 0}}/>
        <img src={propThis.state.rubAr ? rubAr : null} style={{height: "43.4vw",width: "76vw", zIndex: -20,position: "absolute", top: 0, left: 0}}/>
        <div className="react-draggable">
            <div className="width" id="apple" style={propThis.state.boardSize}/>
        </div>
        <Draggable
            axis="both"
            handle=".handle"
            // defaultPosition={{x: -50, y: 25}}
            position={null}
            grid={[5, 5]}
            scale={1}
            // onStart={(e, data)=> {peel_Ar=null}}
            onStart={(e, data)=>propThis.setState({move: !propThis.state.move, rubAr: false})}
            onDrag={(e, data) => {
                let {boardSize} = propThis.state
                let computeWidth = Math.max(25+data.x, Number(boardSize.width.substring(0, boardSize.width.length-2)))
                let computeHeight = Math.max(90+data.y, Number(boardSize.height.substring(0, boardSize.height.length-2)))
                let newAppleWidth = Object.assign({}, boardSize, {width: String(computeWidth) + "px", height: String(computeHeight + "px")})
                // console.log(newAppleWidth)
                propThis.setState({boardSize: newAppleWidth})

                // propThis.setState({appleWidth: data.x})
            }}
            onStop={(e, data)=>{
                propThis.setState({
                    move: !propThis.state.move
                })
                if(data.lastX ==0.27*pinmuWidth){
                    message.success('黑板擦完啦！');
                    let b = propThis.state.audioB
                    let ind = propThis.state.index[propThis.state.i] - 1
                    console.log("啊啊"  + ind)

                    b[ind] = true
                    propThis.setState({
                        audioB: b
                    })
                }
            }}
            bounds={{left: 0, right: 0.27*pinmuWidth, top: 0, bottom: 200}}
        >
            <div>
                <img className="handle" style={{height:"100%", position: "absolute", left: "0%", top:"0%", zIndex: 3000}} src={rub2} alt={'syp'} />
            </div>
        </Draggable>
        <div onMouseMove={()=>console.log(123)} style={{textAlign: "center", width: "76vw"}}>
            <h1 style={{marginBottom: "0px", fontSize: "56px"}}>Rub</h1>
            <div style={{fontSize: "34px"}}>擦</div>
        </div>
    </div>
)}

const paint =(propThis) => {return(
    <div className="close-door" style={{position: "relative", overflow: "hidden"}} onClick={()=>{propThis.setState({paintArrow: false})}}>
        <img src={paint1} style={{height: "43.4vw",width: "76vw", zIndex: -20,position: "relative"}} alt={"d1"}/>
        <img src={paint2} style={{height: "43.4vw",width: "76vw", zIndex: -20,position: "absolute", left: 0, top: 0}} alt={"d1"}/>
        {propThis.state.paintArrow && <img src={paintAr} style={{height: "43.4vw",width: "76vw", zIndex: 3000,position: "absolute", top: 0, left: 0}}/>}
        <div className="react-draggable">
            <div className="width" id="apple" style={propThis.state.paintHeight}/>
        </div>
        <div className="react-draggable">
        <Draggable
            axis="y"
            handle=".handle"
            // defaultPosition={{x: -50, y: 25}}
            position={null}
            grid={[25, 5]}
            scale={1}
            // onStart={(e, data)=> {peel_Ar=null}}
            onDrag={(e, data) => {
                let {paintHeight} = propThis.state
                let computeWidth = Math.max(22 + data.y, Number(paintHeight.height.substring(0, paintHeight.height.length-2)))
                let newAppleWidth = Object.assign({}, paintHeight, {height: String(computeWidth) + "px"})
                // console.log(newAppleWidth)
                propThis.setState({paintHeight: newAppleWidth})

                // propThis.setState({appleWidth: data.x})
            }}
            onStop={(e, data)=>{
                propThis.setState({
                    move: false
                })
                if(data.lastY ==350){
                    message.success('油漆完墙壁啦！');
                    let b = propThis.state.audioB
                    let ind = propThis.state.index[propThis.state.i] - 1
                    console.log("啊啊"  + ind)

                    b[ind] = true
                    propThis.setState({
                        audioB: b
                    })
                }
            }}
            bounds={{left: 0, right: 363, bottom: 350}}
        >
            <div>
                <img className="handle" style={{height:"100%", position: "absolute", left: "1%", top:"0.3%", zIndex: 3000}} src={paint3} alt={'syp'} />
                <img className="handle" style={{height:"100%", position: "absolute", left: "0.3%", top:"0", zIndex: 3000}} src={youqi} alt={'syp'} />
            </div>
        </Draggable>
        </div>
        <div onMouseMove={()=>console.log(123)} style={{textAlign: "center", width: "76vw"}}>
            <h1 style={{marginBottom: "0px", fontSize: "56px"}}>Paint</h1>
            <div style={{fontSize: "34px"}}>油漆</div>
        </div>
    </div>
)}

const tearDown =(propThis) => {return(
    <div className="close-door" style={{position: "relative", overflow: "hidden"}} >
        <img src={tear1} style={{height: "43.4vw",width: "76vw", zIndex: -20,position: "relative"}} alt={"d1"}/>
        <img src={tear2} style={{height: "43.4vw",width: "76vw", zIndex: -20,position: "absolute", left: 0, top: 0}} alt={"d1"}/>
        <img src={tear4} style={{height: "43.4vw",width: "76vw", zIndex: -20,position: "absolute", left: 0, top: 0}} alt={"d1"}/>
        <div className="react-draggable">
        <img src={tearT3} style={{height: "43.4vw",width: "76vw",position: "absolute", left: 0, top: 0}} alt={"d1"}/>
        <img src={tearT1} style={propThis.state.stickStyle} alt={"d1"}/>
        <img src={tear3} style={propThis.state.handStyle} alt={"d1"}/>
        </div>
        <img src={propThis.state.tearAr ? tearAr : null} style={{height: "43.4vw",width: "76vw", zIndex: -20,position: "absolute", top: 0, left: 0}}/>
        <div className="react-draggable">
            <div className="square1" id="apple" style={propThis.state.tearWidth}/>
            <div className="square2" id="apple" style={propThis.state.tearWidth}/>
        </div>
        <Draggable
            axis="x"
            handle=".handle"
            // defaultPosition={{x: -50, y: 25}}
            position={null}
            grid={[5, 25]}
            scale={1}
            onStart={(e, data)=>propThis.setState({move: !propThis.state.move, tearAr: null})}
            onDrag={(e, data) => {
                let apple = document.getElementById("apple")
                // console.log(propThis.state.appleWidth)
                // console.log(apple.style)
                let {tearWidth, stickStyle, handStyle} = propThis.state
                let computeWidth = Math.max(27 + data.x, Number(tearWidth.width.substring(0, tearWidth.width.length-2)))
                let newTearWidth = Object.assign({}, tearWidth, {width: String(computeWidth) + "px"})

                let handX = handStyle.left
                let stickX = stickStyle.left
                console.log(data.x)
                let str = data.x < 10 ? "0" + String(data.x) : String(data.x)
                let strYY = data.x < 10 ? "0" + String(data.x) : String(data.x)
                let strX = data.x < 10 ? "0" + String(data.x*1.2) : String(data.x*1.2)
                let subNum = String(data.x).length + 5
                let xMoveH
                xMoveH = data.x > 99 ? handX.substring(0, handX.length-subNum) + " + " + strX + "px)" : handX.substring(0, handX.length-subNum) + "+ " + str + "px)"

                let xMoveS
                xMoveS = data.x > 99 ? stickX.substring(0, stickX.length-subNum) + " + " + strX + "px)" : stickX.substring(0, stickX.length-subNum) + "+ " + str + "px)"


                let stickY = stickStyle.top
                let yMoveS = data.x > 99 ? stickY.substring(0, stickY.length-subNum) + " + " + strYY + "px)" : stickY.substring(0, stickY.length-subNum) + "+ " + str + "px)"

                let handY = handStyle.top
                let yMoveH = data.x > 99 ? handY.substring(0, handY.length-subNum) + " + " + strYY + "px)" : handY.substring(0, handY.length-subNum) + "+ " + str + "px)"
                console.log(yMoveS)

                let newHandStyle = Object.assign({}, handStyle, {left: xMoveH, top: yMoveH})
                let newStickStyle = Object.assign({}, stickStyle, {left: xMoveS, top: yMoveS})
                propThis.setState({tearWidth: newTearWidth, handStyle: newHandStyle, stickStyle: newStickStyle})

            }}
            onStop={(e, data)=>{
                propThis.setState({
                    move: false
                })
                if(data.lastX ==0.279*pinmuWidth){
                    message.success('胶带撕完啦！');
                    let b = propThis.state.audioB
                    let ind = propThis.state.index[propThis.state.i] - 1
                    console.log("啊啊"  + ind)

                    b[ind] = true
                    propThis.setState({
                        audioB: b
                    })
                }
            }}
            bounds={{left: 0, right: 0.279*pinmuWidth}}
        >
            <div>
                {/*<div style={{height: "200px",width: "200px", backgroundColor: "green", position: "absolute", zIndex: 3000}}></div>*/}
                <img className="handle" style={{height:"7%", position: "absolute", left: "32.4%", top:"28.25%", zIndex: 3000}} src={tearT2} alt={'syp'} />
                <img className="handle" style={{height:"100%", position: "absolute", left: "0", top:"0", zIndex: 3000, clip: "rect(15vw, 40vw, 43.4vw, 20vw)"}} src={tearT3} alt={'syp'} />
            </div>
        </Draggable>
        <div onMouseMove={()=>console.log(123)} style={{textAlign: "center", width: "76vw"}}>
            <h1 style={{marginBottom: "0px", fontSize: "56px"}}>Tear</h1>
            <div style={{fontSize: "34px"}}>撕</div>
        </div>
    </div>
)}

// const imgGroup = [close4, cross4, cut4, haul, paint, peel, push, rub, tear, write]

const dragGroup = [closeDoor, crossWay, cutCake, haulCar, paint, peelApple, pushCar, rubBoard, tearDown, write]
// const dragGroup = [rubBoard, rubBoard, rubBoard, rubBoard, rubBoard, rubBoard, rubBoard, rubBoard, rubBoard, rubBoard]


export default dragGroup

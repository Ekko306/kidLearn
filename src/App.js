import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//Hook概览
// function App(){
//   const [count, setCount] = useState(0);
//   return (
//       <div>
//         <p>You clicked {count} times</p>
//         <button onClick={() => setCount(count + 1)}>
//           Click me
//         </button>
//       </div>
//   )
// }

// function App(){
//   const [count, setCount] = useState(0);
//
//   useEffect(() => {
//     document.title = `You clicked ${count} times`
//   })
//
//   return(
//       <div>
//         <p>You clicked {count} times</p>
//         <button onClick={()=> setCount(count +1)}>
//           Click me
//         </button>
//       </div>
//   )
// }


// function App(props){
//   const [isOnline, setIsOnline] = useState(null);
//
//   function handleStatusChange(status){
//     setIsOnline(status.isOnline)
//   }
//
//   useEffect(() => {
//     ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange)
//     return (() => {
//       ChatAPI.unsubsribeFromFriendStatus(props.friend.id, handleStatusChange)
//     })
//   })
//
//   if (isOnline == null) {
//     return 'Loading...'
//   }
//   return isOnline ? 'Online' : 'Offline'
// }


// function FriendStatusWithCounter(props){
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     document.title = `You clicked ${count} times`
//   })
//
//   const [isOnline, setIsOline] = useState(null);
//   useEffect(() => {
//     ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange)
//     return (() => {
//       ChatAPI.unsubsribeFromFriendStatus(props.friend.id, handleStatusChange)
//     })
//   })
//
//   function handleStatusChange(status){
//     setIsOnline(status.isOnline)
//   }
//   //.....
// }

// class Mouse extends React.Component {
//   constructor(props) {
//     super(props)
//     this.handleMouseMove = this.handleMouseMove.bind(this)
//     this.state = {x:0, y:0}
//   }
//
//
//     handleMouseMove(event) {
//     this.setState({
//       x: event.clientX,
//       y: event.clientY
//     })
//   }
//
//   render() {
//     return (
//         <div style={{height: '100vh'}} onMouseMove={this.handleMouseMove}>
//           {/*<h1>移动鼠标！</h1>*/}
//           <p>当前的鼠标位置是 ({this.state.x},{this.state.y})</p>
//         </div>
//     )
//   }
// }
//
// class App extends React.Component {
//   render(){
//     return (
//         <>
//           <h1>移动鼠标！</h1>
//           <Mouse />
//         </>
//     )
//   }
// }

// class Cat extends React.Component {
//   render() {
//     const mouse = this.props.mouse;
//     return (
//         <img src={"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1275750276,2595822322&fm=26&gp=0.jpg"} style={{position: 'absolute', left: mouse.x, top: mouse.y, width: '100px', height:'100px'}} />
//     )
//   }
// }
//
// class MouseWithCat extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleMouseMove = this.handleMouseMove.bind(this)
//     this.state = {x: 0, y:0}
//   }
//
//   handleMouseMove(event) {
//     this.setState({
//       x: event.clientX,
//       y: event.clientY
//     })
//   }
//
//   render() {
//     return (
//         <div style={{height: '100vh'}} onMouseMove={this.handleMouseMove}>
//           <div>({this.state.x},{this.state.y})</div>
//           <Cat mouse={this.state}/>
//         </div>
//     )
//   }
// }
//
// class MouseTracker extends React.Component {
//   render() {
//     return (
//         <div>
//           <h1>移动鼠标！</h1>
//           <MouseWithCat />
//         </div>
//     )
//   }
// }


// class Cat extends React.Component {
//     render() {
//         const mouse = this.props.mouse;
//         return (
//             <img src={"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1275750276,2595822322&fm=26&gp=0.jpg"} style={{position: 'absolute', left: mouse.x, top: mouse.y, width: '100px', height:'100px'}} />
//         )
//     }
// }
//
// class MouseWithCat extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {x:0,y:0};
//         this.handleMouseMove = this.handleMouseMove.bind(this)
//     }
//
//     handleMouseMove(event) {
//         this.setState({
//             x: event.clientX,
//             y: event.clientY
//         })
//     }
//
//     render() {
//         return (
//             <div style={{height: '100vh'}} onMouseMove={this.handleMouseMove}>
//                 {this.props.syp(this.state)}
//             </div>
//         )
//     }
// }
//
// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>移动鼠标！</h1>
//                 {/*<MouseWithCat render={mouse =>(*/}
//                 {/*    <Cat mouse={mouse}/>*/}
//                 {/*)}/>*/}
//                 {/*<MouseWithCat>*/}
//                 {/*    {mouse => (*/}
//                 {/*        <p>{mouse.x},{mouse.y}</p>*/}
//                 {/*    )}*/}
//                 {/*</MouseWithCat>*/}
//                 <MouseWithCat syp={mouse =>(
//                     <p>{mouse.x},{mouse.y}</p>
//                 )}/>
//
//             </div>
//         )
//     }
// }

// var SetIntervalMixin = {
//     componentWillMount: function () {
//       this.intervals = []
//     },
//     setInterval: function () {
//         this.intervals.push(setInterval.apply(null, arguments))
//     },
//     componentWillUnmount: function() {
//         this.intervals.forEach(clearInterval);
//     }
// }
//
// var createReactClass = require('create-react-class')
//
// var App = createReactClass({
//     mixins: [SetIntervalMixin],
//     getInitialState: function () {
//         return {seconds: 0};
//     },
//     componentDidMount: function() {
//         this.setInterval(this.tick, 1000);
//     },
//     tick: function() {
//         this.setState({seconds: this.state.seconds + 1});
//     },
//     render: function() {
//       return (
//           <p>
//               React has been running for {this.state.seconds} seconds.
//           </p>
//       )
//     }
// })


// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.textInput = null;
//         this.setTextInputRef = element => {
//             this.textInput = element
//         }
//
//         this.focusTextInput = () => {
//             if(this.textInput) this.textInput.focus()
//         }
//     }
//
//     componentDidMount() {
//         this.focusTextInput();
//     }
//
//     render() {
//         return (
//             <div>
//                 <input
//                 type={"text"}
//                 ref={this.setTextInputRef}
//                 />
//                 <input
//                 type={"button"}
//                 value={"Focus the text input"}
//                 onClick={this.focusTextInput}
//                 />
//             </div>
//         )
//     }
// }

// class CommentList extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             comments: DataSource.getComments
//         }
//     }
// }

// import React, { useState } from 'react';

// function App() {
//     // 声明一个叫 "count" 的 state 变量
//     const [count, setCount] = useState(0);
//
//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)}>
//                 Click me
//             </button>
//         </div>
//     );
// }

// class App extends React.Component {
//     constructor(props) {
//         super(props);;
//         this.state = {
//             count: 0
//         }
//     }
//
//     render() {
//         return(
//             <div>
//                 <p>You clicked {this.state.count} times</p>
//                 <button onClick={() => this.setState({count: this.state.count + 1})}>
//                     Click me
//                 </button>
//             </div>
//
//         )
//     }
//
//
// }

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         }
//     }
//     componentDidMount() {
//         document.title = `You clicked ${this.state.count} times`;
//     }
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         document.title = `You click ${this.state.count} times`
//     }
//
//     render() {
//         return (
//             <div>
//                 <p>You clicked {this.state.count} times</p>
//                 <button onClick={()=>this.setState({count: this.state.count + 1})}>
//                     Click me
//                 </button>
//             </div>
//         )
//     }
// }

// function App() {
//     const [count, setCount] = useState(0);
//
//     useEffect(() => {
//         document.title = `You clicked ${count} times`;
//     });
//
//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)}>
//                 Click me
//             </button>
//         </div>
//     );
// }


// class FriendStatus extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {isOnline: null};
//         this.handleStatusChange = this.handleStatusChange.bind(this)
//     }
//     componentDidMount() {
//         ChatAPI.subscribeToFriendStatus(
//             this.props.friend.id,
//             this.handleStatusChange
//         )
//     }
//     componentWillUnmount() {
//         ChatAPI.unsubscribeFromFriendStatus(
//             this.props.friend.id,
//             this.handleStatusChange
//         )
//     }
//     handleStatusChange(status) {
//         this.setState({
//             isOnline: status.isOnline
//         })
//     }
//     render() {
//         if (this.state.isOnline = null) {
//             return 'Loading...';
//         }
//         return this.state.isOnline ? 'Online' : 'Offline';
//     }
// }

// function useFriendStatus(friendID) {
//     const [isOnline, setIsOnline] = useState(null);
//
//     useEffect(() => {
//         function handleStatusChange(status) {
//             setIsOnline(status.isOnline);
//         }
//
//         ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange)
//
//         return () => {
//             ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange)
//         }
//     })
//
//     return isOnline;
// }
//
// const friendList = [
//     { id: 1, name: 'Phoebe' },
//     { id: 2, name: 'Rachel' },
//     { id: 3, name: 'Ross'},
// ]
//
// function ChatRecipientPicker() {
//     const [recipientID, setRecipientID] = useState(1);
//     const isRecipientOnline = useFriendStatus(recipientID);
//     return (
//         <>
//             <Circle color={isRecipientOnline ? 'green' : 'red'} />
//             <select
//                 value={recipientID}
//                 onChange={ e => setRecipientID(Number(e.target.value))}
//             >
//                 {friendList.map(friend => (
//                     <option key={friend.id} value={friend.id}>
//                         {friend.name}
//                     </option>
//                 ))}
//             </select>
//         </>
//     )
// const appRoot = document.getElementById('root');
// const modalRoot = document.getElementById('modal-root');
//
// class Modal extends React.Component {
//     constructor(props) {
//         super(props);
//         this.el = document.createElement('div')
//     }
//     componentDidMount() {
//         modalRoot.appendChild(this.el)
//     }
//     componentWillUnmount() {
//         modalRoot.removeChild(this.el)
//     }
//     render() {
//         return ReactDOM.createPortal(
//             this.props.children,
//             this.el   //<div id="modal-root"></div>
//         )
//     }
// }

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {showModal: false}
//         this.handleHide = this.handleHide.bind(this)
//         this.handleShow = this.handleShow.bind(this)
//     }
//     handleShow() {
//         this.setState({showModal:true})
//     }
//     handleHide() {
//         this.setState({showModal:false})
//     }
//
//     render() {
//         const modal = this.state.showModal ? (
//             <Modal>
//                 <div className={"modal"}>
//                     <div>
//                         苏亚鹏
//                     </div>
//                     666
//                     <button onClick={this.handleHide}>Hide modal</button>
//                 </div>
//             </Modal>
//         ): null;
//
//
//         return (
//             <div className={"app"}>
//                 This div has overflow: hidden.
//                 <button onClick={this.handleShow}>Show modal</button>
//                 {modal}
//             </div>
//         )
//     }
// }

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {clicks: 0};
//         this.handleClick = this.handleClick.bind(this)
//     }
//
//     handleClick() {
//         this.setState(prevState => ({
//             clicks: prevState.clicks + 1
//         }))
//     }
//
//     render() {
//         return (
//             <div onClick={this.handleClick}>
//                 <p>Number of clicks: {this.state.clicks}</p>
//                 <Modal>
//                     <Child/>
//                 </Modal>
//             </div>
//         )
//     }
// }
//
// function Child() {
//     return (
//         <div className={"modal"}>
//             <button>Click</button>
//         </div>
//     )
// }


// class Columns extends React.Component {
//     render() {
//         return (
//             <React.Fragment key={"123"}>
//                 <td>January</td>
//                 <td>$100</td>
//             </React.Fragment>
//         )
//     }
//     // render() {
//     //     return (
//     //         <React.Fragment>
//     //             Some text.
//     //             <h2>A heading</h2>
//     //         </React.Fragment>
//     //     )
//     // }
// }

// function App() {
//     return (
//         <div>
//             <table border="1">
//                 <tr>
//                     <th>Month</th>
//                     <th>Savings</th>
//                 </tr>
//                 <tr>
//                     <Columns/>
//                 </tr>
//                 <tr>
//                     <td>February</td>
//                     <td>$80</td>
//                 </tr>
//             </table>
//         </div>
//     )
// }


// class ScrollingList extends React.Component {
//     constructor(props) {
//         super(props);
//         this.listRef = React.createRef()
//     }
//
//     getSnapshotBeforeUpdate(prevProps, prevState) {
//         if(prevProps.list.length < this.props.list.length) {
//             const list = this.listRef.current;
//             return list.scrollHeight - list.scrollTop;
//         }
//         return null;
//     }
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         if(snapshot !== null){
//             const list = this.listRef.current;
//             list.scrollTop = list.scrollHeight - snapshot
//         }
//     }
//     componentWill
//
//     render() {
//         return (
//             <div ref={this.listRef}>123</div>
//         )
//     }
// }

// class ErrorBoundary extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {hasError: false}
//     }
//     static getDerivedStateFromError(error){
//         //这里返回值 可以更新state 很有用呀
//         return {hasError: true}
//     }
//     render() {
//         if(this.state.hasError){
//             return <h1>Something went wrong.</h1>
//         }
//         return this.props.children;
//     }
// }

// class ErrorBundary extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { hasError: false }
//     }
//
//     static getDerivedStateFromError(error) {
//         return { hasError: true}
//     }
//
//     componentDidCatch(error, info) {
//         logComponentStatckToMyService(info.componentStack)
//     }
//     render(){
//         if(this.state.hasError) {
//             return <h1>Something went wrong</h1>
//         }
//         return this.props.children
//     }
// }

// class CustomButton extends React.Component {
//     //...
//     render(){
//         return <CustomButton color={null}/>
//     }
// }
// CustomButton.defaultProps = {
//     color: 'blue'
// }
//
// class MyComponent extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.inputRef = React.createRef();
//     }
//
//     render() {
//         return <input type={"text"} ref={this.inputRef} />
//     }
//
//     componentDidMount() {
//         this.inputRef.current.focus()
//     }
// }

const OtherComponent = React.lazy(() => import('./OtherComponent'))

function MyComponent() {
    return (
        <React.Suspense fallback={<Spinner />}>
            <div>
                <OtherComponent/>
            </div>
        </React.Suspense>

    )
}



export default App;

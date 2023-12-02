import React from 'react';
import './style.css';
var InterVal;
class Stopwatch extends React.Component {
    constructor(){
        super();
        this.state ={
            hour :0,
            mints :0,
            sec :0,
            isStart: false
        }
    }

    startInterVal=()=>{
        if(this.state.isStart === false){
            this.setState({
                isStart: true
            })
        }
        InterVal = setInterval(()=>{
            this.setState({
                sec : this.state.sec + 1
            })
            if(this.state.sec === 60){
                this.setState({
                    sec: 0,
                    mints: this.state.mints + 1
                })
            if(this.state.mints === 60){
                this.setState({
                    mints: 0,
                    hour: this.state.hour + 1
                })
            }     
            }
        },1000)
    }

    stopInterVal=()=>{
        this.setState({
            isStart: false
        })
        clearInterval(InterVal);
    }

    restInterVal=()=>{
        this.stopInterVal();
        this.setState({
            hour :0,
            mints :0,
            sec :0
        })
    }
    render(){
        let h = this.state.hour
        let m = this.state.mints
        let s = this.state.sec
        return(
            <div className="min-h-screen flex items-center justify-center">
             <div className="w-80 h-72 bg-gray-200 flex items-center justify-center rounded-lg shadow-md">
            <h1 className="text-4xl mb-4 flex items-center justify-center absolute top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {`${h > 9 ? h :"0"+h} : ${m > 9 ? m :"0"+m} : ${s >9 ? s:"0"+s}`}
                </h1>
            <div className="flex flex-col items-center justify-center h-screen">
              <div className="flex space-x-4">
                  <button onClick={this.startInterVal} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                    Start
                  </button>
                    <button onClick={this.stopInterVal}  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                      Stop
                    </button>
                    <button onClick={this.restInterVal}  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                      Reset
                    </button>
              </div>
            </div>
             </div>
            </div>
          );
    }
}

export default Stopwatch;
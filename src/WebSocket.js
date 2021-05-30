import React, { createContext } from 'react'
import { useDispatch } from 'react-redux';
import {InitDataRequest, updateDataRequest } from './actions';

const WebSocketContext = createContext(null)
let socket;

let Channel;
let msg = JSON.stringify({ 
    event: 'subscribe', 
    channel: 'book', 
    symbol: 'tBTCUSD' 
  });
export { WebSocketContext }

export default ({ children }) => {
    let ws; 
    const WS_BASE = "wss://api-pub.bitfinex.com/ws/2"
    const dispatch = useDispatch();
    if (!socket) {
        socket = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
        socket.addEventListener('open', function (event) {
            socket.send(msg);
        });
  
        socket.addEventListener('close', (event) => {
          console.log('The connection has been closed successfully.');
        });
        // Listen for messages
        socket.addEventListener('message', function (event) {
            let msgData = JSON.parse(event.data);
            if(msgData.event == "subscribed"){
                Channel = msgData.chanId;
            }
            if(Channel && msgData[0] == Channel){
                if(msgData[1] && msgData[1].length > 3){
                    dispatch(InitDataRequest(msgData[1]));
                } else {
                    dispatch(updateDataRequest([msgData[1]]));
                 
                }
            }
          
        
        });
  
        socket.addEventListener('error', function (event) {       
          console.log('error from server ', event);
          socket.close();     
        });

        ws = {
            socket: socket            
        }
    }

    return (
        <WebSocketContext.Provider value={ws}>
            {children}
        </WebSocketContext.Provider>
    )
}
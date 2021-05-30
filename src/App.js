import './App.css';
import { Book } from './book';
import { Provider } from 'react-redux'
import WebSocketProvider from './WebSocket';
import store from './store';

function App() {

  console.log("app comp starts")  
  return(
    <Provider store={store}>
    <WebSocketProvider>
      <div className="App">
          <Book></Book>
      </div>
    </WebSocketProvider>
  </Provider>
   
  );
  
}



export default App;

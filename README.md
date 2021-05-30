# ORDER BOOK

This application is demo to showcase that, how can we connect the real time data in React base application using Redux, Web sockets. 

# Commands 

**npm start** - To start the application 

# Details

**Connection** : wss://api-pub.bitfinex.com/ws/2

**Verb**: 

event: 'subscribe', 
      channel: 'book', 
      symbol: 'tBTCUSD' 


Here, real time data will update on page on every 1000ms and when order placed, we ensure that order amount should above zero. 

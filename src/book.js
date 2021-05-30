import {useSelector} from "react-redux"

function customPrecision(num) {
  return parseFloat(num.toPrecision(4));
}

export function Book(){
  const data = useSelector(state => state.data);
  
  return (
    <div className="App">
    <div class="header">ORDER BOOK BTC/USD </div> 
    <table >
      <thead>
      <tr>
      <th>COUNT</th>         
      <th>AMOUNT</th>
      <th>TOTAL</th>
      <th>PRICE</th> 
      </tr>
      </thead>
      <tbody>
      {data.map((number) =>
        <tr > <td>
          {number[1]}
        </td>
       
        <td>
          {customPrecision(number[2])}
        </td>
        <td>
          {customPrecision(number[2] * number[1])}
        </td>
        <td>
          {number[0]}
        </td>
        </tr>
                   
      )}
      </tbody>
    </table>     
    
    </div>
  );
}
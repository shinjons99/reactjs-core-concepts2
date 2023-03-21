import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // const products =[
  //   {name: 'Laptop', price: '54000'},
  //   {name: 'Phone', price: '94000'},
  //   {name: 'Watch', price: '34000'},
  //   {name: 'Tablet', price: '54000'},
  // ]
  return (
    <div className="App">
      <ExternalUsers></ExternalUsers>
      {/* <Counter></Counter> */}
    {/* {
      products.map(product=><Product name={product.name} price={product.price}></Product>)
    } */}
      {/* <Product name="laptop" price="47000"></Product>
      <Product name="Phone" price="75000"></Product>
      <Product name="Watch" price="7000"></Product> */}
    </div>
  );
}

function ExternalUsers(){
  return(
    <div>
      <h2>External Users</h2>
    </div>
  )
}

function Product(props){
  return(
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  const decreaseCount = () => setCount(count - 1);
  const increaseCount = () =>setCount(count + 1);


  // const increaseCount = () =>{
  //   const newCount = count+1;
  //   setCount(newCount);
  // }
  return(
    <div>
      <h1>Count: {count} </h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}
export default App;

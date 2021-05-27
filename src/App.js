import './App.css';
import FizzBuzz from './components/FizzBuzz';

const array = function createArray(){
  const arr = [];
  for(let i = 1; i <= 100; i++){
    arr.push(i);
  }
  return arr;
}();

const setValues = (number) => {
  return (number % 3 === 0 && number % 5 === 0) ? {color: 'green', text: 'FizzBuzz'} : 
  (number % 3 === 0) ? {color: 'red', text: 'Fizz'} :
  (number % 5 === 0) ? {color: 'yellow', text: 'Buzz'} :
  {color: 'default', text: ''}
}

function App(){
  const numbers =  array.map((number) =>{
    const {color, text} = setValues(number);
    return <FizzBuzz count={number} color={color} text={text}/>
  });
  return(
    <div>
      <h1 className="title">FizzBuzz</h1>
      <div className="numbers-container">
       {numbers}
     </div>
    </div>
  )
}

export default App;

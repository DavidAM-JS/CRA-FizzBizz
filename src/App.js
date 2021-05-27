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
  if(number % 3 === 0 && number % 5 === 0) return {color: 'green', text: 'FizzBuzz'}
  else if(number % 3 === 0) return {color: 'red', text: 'Fizz'}
  else if(number % 5 === 0) return {color: 'yellow', text: 'Buzz'}
  return {color: 'default', text: ''}
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

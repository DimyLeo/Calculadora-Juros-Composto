import React, { useState } from 'react';
import './App.css';
import Table from './components/Table';

function App() {
  const [value, setValue] = useState(100);
  const [percentage, setPercentage] = useState(10);
  const [days, setDays] = useState(60);

  const inputValue = (e) => {
    setValue(e.target.value);
  }

  const inputPercentage = (e) => {
    setPercentage(e.target.value);
  }

  const inputDays = (e) => {
    setDays(e.target.value);
  }

  return (
    <div className="App">
      <h1>Juros Composto</h1>
      <div className='head'>
        <label htmlFor='value' className='labels'>
          Valor
          <input type={'number'} value={value} onChange={(e) => {inputValue(e)}} className='inputs' />
        </label>
        <label htmlFor='percentage' className='labels'>
          Porcentagem
          <input type={'number'} value={percentage} onChange={(e) => {inputPercentage(e)}} className='inputs' />
        </label>
        <label htmlFor='days' className='labels'>
          Dias
          <input type={'number'} value={days} onChange={(e) => {inputDays(e)}} className='inputs' />
        </label>
      </div>
      <Table value={Number(value)} percentage={Number(percentage)} days={days} />
    </div>
  );
}

export default App;

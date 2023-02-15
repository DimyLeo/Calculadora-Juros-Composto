import React, { useState } from 'react';
import Table from '../../components/Table/Table';
import logo from '../../utils/Logo.png';
import './DaysManager.css';

function DaysManager() {
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
    <div className="page_days">
      <img className='logo' src={logo} alt='logo' />
      <h1>Juros Composto</h1>
      <div className='head'>
        <label htmlFor='value' className='labels'>
          <p>Valor</p>
          <input placeholder='Insira um valor' type={'number'} value={value} onChange={(e) => {inputValue(e)}} className='inputs' />
        </label>
        <label htmlFor='percentage' className='labels'>
          <p>Porcentagem</p>
          <input placeholder='Insira uma porcentagem' type={'number'} value={percentage} onChange={(e) => {inputPercentage(e)}} className='inputs' />
        </label>
        <label htmlFor='days' className='labels'>
          <p>Dias</p>
          <input placeholder='insira os dias' type={'number'} value={days} onChange={(e) => {inputDays(e)}} className='inputs' />
        </label>
      </div>
      <Table value={Number(value)} percentage={Number(percentage)} days={days} />
    </div>
  );
}

export default DaysManager;

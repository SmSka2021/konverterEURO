import "./App.css";
import React, { useEffect, useState } from "react";
import { Block } from "./components/Block";
import { ColumnHeightOutlined } from "@ant-design/icons";
import BasicRating from "./components/Raiting";

const Base_Url =
  "http://data.fixer.io/api/latest?access_key=5689ff7084520ed3ce0bbc5e2127d5b0";


function App(props) {
  const [coiunt, setCoiunt] = useState([]); 
  const [toCurrency, setToCurrency] = useState();
  const [changeRate, setChangeRate] = useState(1);
  const [amount, setAmount] = useState(1);
  const [amountInFrom, setAmountInFrom] = useState(true);
  const [day, setDay] = useState(new Date().getTime());

  let toAmount, fromAmount;
  if (amountInFrom) {
    fromAmount = amount;
    toAmount = amount * changeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / changeRate;
  }
  useEffect(() => {
    fetch(Base_Url)
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[24];
        setCoiunt([data.base, ...Object.keys(data.rates)]);       
        setToCurrency(firstCurrency);
        setChangeRate(data.rates[firstCurrency]);
        setDay(data.date);
      });
  }, []);
  useEffect(() => {
    if (toCurrency !== undefined) {
      fetch(Base_Url)
        .then((res) => res.json())
        .then((data) => setChangeRate(data.rates[toCurrency]));
    }
  }, [toCurrency]);

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFrom(true);
  }
  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFrom(false);
  }

  return (
    <>
      <div className="title">
        <h1 className="title_item"> Конвертер валюты на {day}</h1>
      </div>
      <BasicRating />
      <div className="allBlock">
        <Block
          onChangeAmount={handleFromAmountChange}
          amount={fromAmount}         
          coiunt={coiunt}
          selectedCurrency="EUR"        />
        <div className="ant">
          <ColumnHeightOutlined />
        </div>
        <Block
          onChangeAmount={handleToAmountChange}
          amount={toAmount}
          onChangeCurrency={(e) => setToCurrency(e.target.value)}
          coiunt={coiunt}
          selectedCurrency={toCurrency}
        />
      </div>
    </>
  );
}

export default App;

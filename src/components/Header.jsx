import React, { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

export default function Header({ setCurrency, currency }) {
  const updateCurrency = (e) => {
    setCurrency(e.target.value);
    console.log(e.target.value);
  };

  return (
    <header>
      <span className="brand">Cryptoview</span>
      <div className="select">
        <select name="currency" id="currency" onChange={updateCurrency}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="dkk">DKK</option>
        </select>
        <TiArrowSortedDown />
      </div>
    </header>
  );
}

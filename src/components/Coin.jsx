import React, { useState } from "react";

export default function Coin({
  rank,
  image,
  coin,
  ticker,
  price,
  priceChange,
  marketCap,
  currency,
}) {
  const getFiatCurrency = (currency) => {
    if (currency == "eur") {
      return "€";
    }
    if (currency == "dkk") {
      return "DKK ";
    }
    if (currency == "jpy") {
      return "JPY ";
    }
    if (currency == "btc") {
      return "BTC ";
    } else {
      return "$";
    }
  };

  return (
    <div className="coin-container">
      <div className="coin-info">
        <span className="coin-rank">#{rank}</span>
        <img src={image} alt={coin} className="coin-image" />
        <p className="coin-name">{coin}</p>
        <span className="coin-ticker">{ticker}</span>
      </div>
      <div className="coin-data">
        <p className="coin-price">
          {getFiatCurrency(currency)}
          {price}
        </p>
        {priceChange < 0 ? (
          <p className="coin-price-change red">{priceChange.toFixed(2)}%</p>
        ) : (
          <p className="coin-price-change green">{priceChange.toFixed(2)}%</p>
        )}
        <p className="coin-market-cap">${marketCap.toLocaleString()}</p>
      </div>
    </div>
  );
}

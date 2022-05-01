import React from "react";

export default function Coin({
  rank,
  image,
  coin,
  ticker,
  price,
  priceChange,
  marketCap,
}) {
  return (
    <div className="coin-container">
      <div className="coin-info">
        <span className="coin-rank">{rank}</span>
        <img src={image} alt={coin} className="coin-image" />
        <p className="coin-name">{coin}</p>
        <span className="coin-ticker">{ticker}</span>
      </div>
      <div className="coin-data">
        <p className="coin-price">${price}</p>
        <p className="coin-price-change">{priceChange.toFixed(2)}%</p>
        <p className="coin-market-cap">${marketCap.toLocaleString()}</p>
      </div>
    </div>
  );
}

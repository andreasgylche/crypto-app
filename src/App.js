import CoinGrid from "./components/CoinGrid";
import Header from "./components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import Search from "./components/Search";
import Coin from "./components/Coin";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [currency, setCurrency] = useState("usd");

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <Header setCurrency={setCurrency} currency={currency} />
      <Search setSearch={setSearch} />
      <div className="coins-container">
        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              rank={coin.market_cap_rank}
              coin={coin.name}
              image={coin.image}
              ticker={coin.symbol}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              marketCap={coin.market_cap}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

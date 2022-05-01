import React, { useState } from "react";

export default function Header() {
  const [currency, setCurrency] = useState("USD");

  return (
    <header>
      <span className="brand">Cryptoview</span>
      <select
        name="currency"
        id="currency"
        onChange={(e) => setCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="DKK">DKK</option>
      </select>
    </header>
  );
}

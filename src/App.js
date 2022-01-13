import { useEffect, useState } from "react/cjs/react.development";

function App() {
  const [load, setLoad] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((data) => {
        setCoins(data);
        setLoad(false);
      });
  }, []);

  const [money, setMoney] = useState(0);
  const inputMoney = (event) => {
    setMoney(event.target.value);
  };
  const [selected, setSelected] = useState("select coin!");
  const selectedOpt = (event) => {
    setSelected(event.target.value);
  };

  const [hide, setHide] = useState(true); //계산 결과 숨기기/표시하기
  const onClick = () => {
    if (money > 0 && selected !== "select coin!") {
      setHide(false);
    }
  };

  return (
    <div>
      <h1>The Coins!({coins.length})</h1>
      {load ? (
        <strong>loading...</strong>
      ) : (
        <div>
          <select onChange={selectedOpt} value={selected}>
            <option>select coin!</option>
            {coins.map((item) => (
              <option key={item.id}>
                {item.name} ({item.symbol}) : ${item.quotes.USD.price}
              </option>
            ))}
          </select>
          <hr />
          <span>보유 금액($): </span>
          <input type="number" placeholder="write your money" value={money} onChange={inputMoney}></input>
          <button onClick={onClick}>계산</button>
          {hide ? null : (
            <h2>{`$${money}로 
            ${selected.substring(selected.indexOf("("), selected.indexOf(")") + 1)}코인을 
            ${money / selected.substring(selected.indexOf("$") + 1)}개 살 수 있습니다.`}</h2>
          )}
        </div>
      )}
    </div>
  );
}

export default App;

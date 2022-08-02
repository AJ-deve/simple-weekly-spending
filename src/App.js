import "./style.scss";
import logo from "./logo.svg";
import { useState } from "react";

function App() {
  const data = [
    {
      day: "mon",
      amount: 17.45,
      checked: false,
      visibility: "hidden",
    },
    {
      day: "tue",
      amount: 34.91,
      checked: false,
      visibility: "hidden",
    },
    {
      day: "wed",
      amount: 52.36,
      checked: false,
      visibility: "hidden",
    },
    {
      day: "thu",
      amount: 31.07,
      checked: false,
      visibility: "hidden",
    },
    {
      day: "fri",
      amount: 23.39,
      checked: false,
      visibility: "hidden",
    },
    {
      day: "sat",
      amount: 43.28,
      checked: false,
      visibility: "hidden",
    },
    {
      day: "sun",
      amount: 25.48,
      visibility: "hidden",
    },
  ];

  const [list, setList] = useState(data);
  const [bgColor, setbgColor] = useState(true);

  const mouseIn = (amount) => {
    const newList = list.map((item) => {
      if (item.amount === amount) {
        const updatedList = {
          ...item,
          visibility: "visible",
        };
        return updatedList;
      }
      return item;
    });
    setList(newList);
  };

  const colorChanger = (amount) => {
    const newList = list.map((item) => {
      if (item.amount === amount) {
        const updatedList = {
          ...item,
          checked: !item.checked,
        };
        return updatedList;
      }
      return item;
    });
    setList(newList);
  };

  const mouseOut = () => {
    const list1 = list.map((item) => {
      const list2 = {
        ...item,
        visibility: "hidden",
      };
      return list2;
    });
    setList(list1);
  };
  return (
    <div className="App">
      <header className="header">
        <div className="header-content" style={{ height: "100px" }}>
          <div>
            <p>My balance</p>
            <h1>$921.48</h1>
          </div>
          <img src={logo} alt="logo" />
        </div>
      </header>
      <main className={"data"}>
        <div className="data-in">
          <div>
            <h1 className="title">Spending - Last 7 days</h1>
            <ul>
              {list.map((item, index) => (
                <div key={index}>
                  <li
                    style={{
                      visibility: item.visibility,
                      transition: "all 0.4s",
                    }}
                    className="bar-amount"
                  >
                    {item.amount}
                  </li>
                  <div
                    onMouseOver={() => mouseIn(item.amount)}
                    onMouseOut={() => mouseOut(item.amount)}
                    onClick={() => colorChanger(item.amount)}
                    className="bar"
                    style={{
                      height: 3 * item.amount + "px",
                      backgroundColor: item.checked
                        ? "hsl(186, 34%, 60%)"
                        : "hsl(10, 79%, 65%)",
                    }}
                  ></div>
                  <li style={{ color: "hsl(28, 10%, 53%)" }}>{item.day}</li>
                </div>
              ))}
            </ul>
            <hr />
          </div>
          <div className="summary">
            <div>
              <p>Total this month</p>
              <h1 className="title">$478.33</h1>
            </div>
            <div>
              <h3>+2.4%</h3>
              <p>from last month</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

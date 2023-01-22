import React, { useState, useEffect } from "react";
import "./Burger.scss";

const Burger = () => {
  const [products, setProducts] = useState([
    {
      name: "green",
      price: 0.1,
      number: 0,
    },
    {
      name: "tomato",
      price: 0.4,
      number: 0,
    },
    {
      name: "cheese",
      price: 0.6,
      number: 0,
    },
    {
      name: "meat",
      price: 1.2,
      number: 0,
    },
  ]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = 0;
    products.map((prod) => {
      const { price, number } = prod;
      return (sum += price * number);
    });
    setTotal(Math.trunc(sum * 10) / 10);
  }, [products]);

  const add = (index) => {
    let newProds = products.map((item, idx) => {
      const { name, price, number } = item;
      if (index === idx) {
        return { name, price, number: number + 1 };
      }
      return item;
    });
    setProducts(newProds);
  };

  const remove = (index) => {
    let newProds = products.map((item, idx) => {
      const { name, price, number } = item;
      if (index === idx) {
        return { name, price, number: number > 0 ? number - 1 : 0 };
      }
      return item;
    });
    setProducts(newProds);
  };

  return (
    <div className="container">
      <div className="totalSum">
        Jami hisob: <span>${total}</span>
      </div>
      <div className="burgerContainer">
        <div className="products">
          {products.map((product, idx) => {
            const { name, price } = product;
            return (
              <div className="product" key={idx}>
                <h2>
                  <span>{name}: </span>  <span>${price}</span>
                </h2>
                <div className="btnGroup">
                  <button onClick={() => remove(idx)}>remove</button>
                  <button onClick={() => add(idx)}>add</button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="burger">
          <div className="topBread">
            <span></span>
            <span></span>
          </div>
          {products.map((product, idx) => {
            const { name, number } = product;
            const arr = [];
            for (let i = 1; i <= number; i++) {
              arr.push(i);
            }
            return (
              <div className={name} key={idx}>
                {arr.map((num, i) => (
                  <div key={i} className={name + "Item"}>
                    {num + "-" + name}
                  </div>
                ))}
              </div>
            );
          })}
          <div className="bottomBread"></div>
        </div>
      </div>
    </div>
  );
};

export default Burger;

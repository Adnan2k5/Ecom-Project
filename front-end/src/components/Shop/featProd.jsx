import React, { useEffect, useState } from "react";
import "./home.css";
import "animate.css";
import { Cart } from "./Cart";

export function FeatProd({ products }) {
  const [currProd, setProd] = useState(0);
  const [animate, setanimate] = useState(false);

  let length = products.length - 1;

  function prev() {
    setProd(currProd === 0 ? length : currProd - 1);
  }

  function next() {
    setProd(currProd === length ? 0 : currProd + 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setanimate(true);
      setTimeout(() => {
        setanimate(false);
      }, 5000);
      setProd((prevProd) => (prevProd + 1) % products.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [products.length]);

  const product = products[currProd];
  return (
    <div className="featured-product  w-full flex p-28">
      <div className="product-details  w-[50%]">
        <h1
          className={`text-6xl ${
            animate ? "animate__animated animate__fadeIn" : ""
          } ml-12 mt-12 w-fit font-mono`}
        >
          {product.name}
        </h1>
        <h1
          className={`text-5xl ${
            animate ? "animate__animated animate__fadeIn" : ""
          }  ml-12 w-fill`}
        >
          {product.series}
        </h1>
        <p className="text-xl ml-12 w-fit">{product.description}</p>
        <p className="price ml-12 w-fit mt-12 font-mono text-5xl">${product.price}</p>
        <Cart products={product} />
      </div>
      <div className="prod-img  w-[50%]">
        <div className="card w-[100%]  flex-col items-end justify-end ">
          <img
            src={product.image}
            alt={product.name}
            className={`featured-image p-6 rounded-[3rem] ${
              animate ? "animate__animated animate__fadeInRightBig" : ""
            }  overflow-hidden `}
          />
        </div>
        <div className="slider w-full justify-around flex">
            <input type="button" onClick={prev} value="<-" />
            <input type="button" onClick={next} value="->" />
        </div>
      </div>
    </div>
  );
}

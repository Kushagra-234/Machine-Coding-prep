import React, { useEffect, useState } from "react";

const AutoComplete = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [debouncedVal, setDebouncedVal] = useState("");

  useEffect(() => {
    if (!inputVal) {
      return;
    }
    let timerId;

    timerId = setTimeout(() => {
      setDebouncedVal(inputVal);
    }, 300);

    return () => clearTimeout(timerId);
  }, [inputVal]);

  useEffect(() => {
    if (!debouncedVal) {
      setProductsData([]);
      return;
    }

    async function fetchData() {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${debouncedVal}`
        );
        const jsonFied = await res.json();
        setProductsData(jsonFied.products);
        console.log(jsonFied.products);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [debouncedVal]);

  return (
    <div className="w-full justify-center items-center flex flex-col gap-5">
      <h3>AutoComplete</h3>
      <div className="flex flex-col gap-5">
        <input
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="border-2 border-black"
        />

        {isLoading && <div>Loading...</div>}
        {!isLoading &&
          productsData &&
          productsData.map((productItem) => {
            return <div key={productItem.id}>{productItem.title}</div>;
          })}
      </div>
    </div>
  );
};

export default AutoComplete;

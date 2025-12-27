import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { VerticalGraph } from "./VerticalGraph";
import api from "../api";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    api.get("/allOrders").then((res) => {
      setAllOrders(res.data);
    });
  }, []);

  const labels = allOrders.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allOrders.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };


    return (
      <>
        <h3 className="title">Holdings ({allOrders.length})</h3>
  
        <div className="order-table">
          <table>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>price.</th>
              <th>mode.</th>
            </tr>
  
            {allOrders.map((stock, index) => {
              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price}</td>
                  <td>{stock.mode}</td>
                </tr>
              );
            })}
          </table>
        </div>
        <VerticalGraph data={data} />
      </>
    );
};

export default Orders;

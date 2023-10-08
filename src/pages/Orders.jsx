import React, { useState } from "react";
import "./Orders.css";
import OrderItem from "../components/OrderItem.jsx";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  const generateOrder = () => {
    setOrders([...orders, <OrderItem key={orders.length} />]);
  };

  return (
    <main className="orders-main">
      <div className="order-details">
        <button className="order-button" onClick={generateOrder}>
          Generate Recent Orders
        </button>
        <h4 className="order-title"></h4>
      </div>
      <ul className="order-list">
        {orders.map((order, index) => (
          <React.Fragment key={index}>{order}</React.Fragment>
        ))}
      </ul>
    </main>
  );
}

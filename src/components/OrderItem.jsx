import React from "react";
import "./OrderItem.css";

export default function OrderItem() {
  return (
    <li className="order-item">
      <h4 className="txn-account">txn account</h4>
      <h4 className="person-name">person name</h4>
      <h5 className="order-date">Date</h5>
      <p className="order-comments">comments</p>
      <h5 className="order-rating">rating</h5>
    </li>
  );
}

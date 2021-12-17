import React, { useState } from "react";
import img1 from "../../img/Home/HomeStore/1.jpg";
import img2 from "../../img/Home/HomeStore/2.jpg";
import img3 from "../../img/Home/HomeStore/3.webp";
import img4 from "../../img/Home/HomeStore/4.jpg";
import img5 from "../../img/Home/HomeStore/5.webp";
import img6 from "../../img/Home/HomeStore/6.jpg";

function HomeNewArrival() {
  const [Store, setStore] = useState([
    {
      img: img1,
      sub: "Canvas",
      header: "Lorem Ipsum Dolar",
      star: 4,
      price: "150$",
    },
    {
      img: img2,
      sub: "Canvas",
      header: "Lorem Ipsum Dolar",
      star: 4,
      price: "150$",
    },
    {
      img: img3,
      sub: "Canvas",
      header: "Lorem Ipsum Dolar",
      star: 4,
      price: "150$",
    },
    {
      img: img4,
      sub: "Canvas",
      header: "Lorem Ipsum Dolar",
      star: 4,
      price: "150$",
    },
    {
      img: img5,
      sub: "Canvas",
      header: "Lorem Ipsum Dolar",
      star: 4,
      price: "150$",
    },
    {
      img: img6,
      sub: "Canvas",
      header: "Lorem Ipsum Dolar",
      star: 4,
      price: "150$",
    },
  ]);
  return (
    <section id="home-new-arrival">
      <header className="container">
        <h2>new arrival</h2>
        <ul>
          <li>All</li>
          <li>men</li>
          <li>women</li>
          <li>shoes</li>
        </ul>
      </header>
      <main id="new-arrival-row" className="row">
        {Store.map((item) => {
          return (
            <div className="col-4">
              <div className="new-arrival-item">
                <img src={item.img}></img>
                <div className="new-arrival-imglayer">
                  <div className="new-arrival-item-content">
                    <h4>{item.sub}</h4>
                    <h3>{item.header}</h3>
                    <div className="new-arrival-item-star">{item.star}</div>
                    <span>{item.price}</span>
                    <ul className="new-arrival-item-fav">
                      <li>
                        <i class="far fa-heart"></i>
                      </li>
                      <li>
                        <i class="far fa-plus-square"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </section>
  );
}

export default HomeNewArrival;

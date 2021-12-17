import React, { useState } from "react";
import img1 from "../../src/img/Home/Footer/footer-1.jpg";
import img2 from "../../src/img/Home/Footer/footer-2.jpg";
import img3 from "../../src/img/Home/Footer/footer-3.jpg";
import img4 from "../../src/img/Home/Footer/footer-4.jpg";
import img5 from "../../src/img/Home/Footer/footer-5.jpg";

function Footer() {
  const [SosialMedia, setSosialMedia] = useState([
    {
      img: img1,
      class: "fab fa-instagram",
    },
    {
      img: img2,
      class: "fab fa-instagram",
    },
    {
      img: img3,
      class: "fab fa-instagram",
    },
    {
      img: img4,
      class: "fab fa-instagram",
    },
    {
      img: img5,
      class: "fab fa-instagram",
    },
  ]);
  return (
    <footer>
      <div id="sosial-media">
        {SosialMedia.map((item) => {
          return (
            <div className="col sosial-media-col">
              <div className="sosial-media-item">
                <img src={item.img}></img>
                <div className="sosial-media-item-layer">
                  <i class={item.class}></i>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div id="footer-content">
        <div className="container">
          <div className="row">
            <div className="col-2 footer-content-item">
              <h4>Category</h4>
              <ul>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
              </ul>
            </div>
            <div className="col-2 footer-content-item">
              <h4>Company</h4>
              <ul>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
              </ul>
            </div>
            <div className="col-4 footer-content-item">
              <h4>Adress</h4>
              <ul>
                <li>lorem ipsum dolar</li>
                <li>+10 456 78 90</li>
                <li><a>exmaple@example.com</a></li>
              </ul>
            </div>
            <div className="col-4 footer-content-item">
              <h4>Newsletter</h4>
              <form id = 'footer-content-input-block' >
                  <div id ='footer-content-input'>
                  <input type = 'text' placeholder = 'Email Adress'></input>
                  <input type = 'submit' value = 'Subscribe'></input>
                  </div>
              </form>
              <div id = 'footer-sosial-media-block'>
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-twitter"></i>
              </div>
            </div>
          </div>
          <hr/>
          <p>Made with <i class="far fa-heart"></i> by <a href = 'github.com/Nazaralieff'>Nazaraliyev</a></p>
        </div>
      </div>
    </footer>
  ); 
}

export default Footer;

import React from "react";

function Header() {
  return (
    <header>
      <nav >
          <div id = "logo">
              <a href = "#">Winter</a>
          </div>
          <ul id = "menu">
              <li>home</li>
              <li className = "sub-manu">shop<i class="fas fa-caret-down"></i>
              <ul id = "drop-manu">
                      <li>lorem</li>
                      <li>lorem</li>

                  </ul>
              </li>
              <li className = "sub-manu">pages<i class="fas fa-caret-down"></i>
              <ul id = "drop-manu">
                      <li>lorem</li>
                      <li>lorem</li>
                      <li>lorem</li>
                      <li>lorem</li>
                  </ul>
              </li>
              <li className = "sub-manu">blog<i class="fas fa-caret-down"></i>
              <ul id = "drop-manu">
                      <li>lorem</li>
                      <li>lorem</li>
                      <li>lorem</li>
                      <li>lorem</li>
                      <li>lorem</li>
                      <li>lorem</li>
                  </ul>
              </li>
              <li>contact</li>
          </ul>
          <ul id = "menu-icon">
              <li><i class="fas fa-search"></i></li>
              <li><i class="fas fa-shopping-basket"></i></li>
          </ul>
      </nav>
    </header>
  );
}

export default Header;

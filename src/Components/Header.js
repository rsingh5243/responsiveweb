import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
function Header() {
  return (
    <>
      <section className="navbar-dark bg-info header">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <nav class="navbar navbar-expand-sm ">
                <a class="navbar-brand text-red" href="#">
                  Web-Site Name
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#my"
                  aria-controls="my"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="my">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item ">
                      <a class="nav-link " href="#about">
                        About
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#product">
                        Product
                      </a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link" href="#course">
                        Course
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link " href="#contact">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Header;

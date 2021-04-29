import React from "react";

function index(props) {
  return (
    <>
      <div class="content-top">
        <div class="container ">
          <div class="row">
            {props.data.map((data) => (
              <div class="col-md-6 col-xs-6 text-center animate-box">
                <div class="product">
                  <a>
                    <img className="default-img" src={data.image} width="300"  height="480" alt="#" />
                  </a>
                  <div class="inner">
                    <p>
                      <a href="single.html" class="icon">
                        <i class="icon-shopping-cart"></i>
                      </a>
                      <a href="single.html" class="icon">
                        <i class="icon-eye"></i>
                      </a>
                    </p>
                  </div>

                  <div class="desc">
                    <h3>
                      <a href="single.html">{data.title}</a>
                    </h3>
                    <span class="price">{data.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default index;

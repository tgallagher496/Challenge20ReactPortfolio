import React from "react";
import img from "../../images/IMG_3789.jpg";

export default function AboutMe() {
  return (
    <div>
      <h1>About Page</h1>
      <p>
        <div class="container">
          <div class="row">
            <div class="col-sm">
            <div className="card" style= {{width: '18rem'}}>
              <img src={img} />
            </div>
            <div class="col-sm">
              <p>
                Hi! My name is Tammy Gallagher. This is my second year teaching
                PLTW for Great Oaks at North College Hill. I live with my
                husband and three children in Milford, Ohio. I have a degree in
                Secondary Education with emphasis in math and computer science.
              </p>
            </div>
            </div>
          </div>
        </div>
      </p>
    </div>
  );
}

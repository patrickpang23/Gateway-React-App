import React from "react";

const LandingPage = () => {
  return (
    <div class="lake-image">
      {/* <!-- *HERO IMAGE* IMPORTANT--> */}
      <div class="lake-text">
        <h1>Have you ever heard about Đà Lạt?</h1>
        <p> Let me take you to a place filled with</p>
        <strong>
          <i>adventure</i>
        </strong>
        and lots of fun!
        <div class="horizontal">
          {/* <!-- IMPORTANT. relative from top: 20px, padding, height. --> */}
          <br>
            <h1>Want to know more?</h1>
            <p class="desc">
              This gorgeous city is located in the South Central Highlands of
              Vietnam. Some call it the "honeymoon" capital of the country. The
              area has a nice view of mountains, lakes, and even waterfalls!
            </p>
          </br>

          <div class="cta-button">
            <a href="todo.html">
              <strong>Click Here to Learn More</strong>
            </a>
          </div>
          <div class="horizontal"></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

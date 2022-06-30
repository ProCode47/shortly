import React from "react";
import hero from '../images/illustration-working.svg'

export default function Hero() {
  return (
    <>
      <div class="hero col-sm-r">
        <div class="hero-text col-item p-sm text-center">
          <h1 class="text-md m-sm">More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button class="m-center text-sm">Get Started</button>
        </div>
        <div class="hero-img col-item">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </>
  );
}

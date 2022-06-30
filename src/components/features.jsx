import React from "react";
import feature1 from '../images/icon-brand-recognition.svg'
import feature2 from '../images/icon-detailed-records.svg'
import feature3 from '../images/icon-fully-customizable.svg'


export default function Features() {
  return (
    <>
      <div class="features col-sm p-sm line-sm">
        <div class="card col-item text-center">
          <img
            class="ml-0"
            src={feature1}
            alt="feat"
          />
          <span class="card-text">
            <h3 class="card-heading mt-sm">Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </span>
        </div>
        <div class="card mt-md col-item text-center">
          <img
            class="ml-0"
            src={feature2}
            alt="feat"
          />
          <span class="card-text">
            <h3 class="card-heading mt-sm">Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </span>
        </div>

        <div class="card mt-md col-item text-center">
          <img
            class="ml-0"
            src={feature3}
            alt="feat"
          />
          <span class="card-text">
            <h3 class="card-heading mt-sm">Fully Customizable</h3>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </span>
        </div>
      </div>
    </>
  );
}

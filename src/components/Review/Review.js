import { useState } from "react";
import "./Review.css";
import {data} from "../../utils/data";

function Review() {
  var [people, setPeople] = useState(data)
  var [num, setNum] = useState(0);

  const increaseNum = () => {
    if (num < people.length - 1) {
      setNum(num + 1);
      if (num === people.length - 1) {
        setNum(0)
      }
    } else {
      setNum(0)
    }
  }

  const reduceNum = () => {
    if (num >= people.length - 1) {
      setNum(num - 1);
      if (num === 0) {
        setNum(people.length - 1)
      }
    } else if (num !== 0) {
      setNum(num - 1)
    } else {
      setNum(people.length - 1)
    }
  }

  const randomView = () => {
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }
    setNum(Math.round(getRandomArbitrary(0, people.length - 1)))
  }

    return (
      <>
        <div className="review-content">
            <div>
              <h2>Our Reviews</h2>
              <div className="underline"></div>
            </div>
            <article className="review-content__card">
              <div className="image-container">
                <img src={people[num].img} alt={people[num].name} class="person-img" />
                <span className="quote-icon">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
                  </svg>
                </span>
              </div>
              <div>
                <h4 className="name">{people[num].name}</h4>
                <h4 className="job">{people[num].position}</h4>
                <p>{people[num].desc}</p>
              </div>
              <div className="button-container">
                <button className="prev-btn" onClick={() => reduceNum()}>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
                  </svg>
                </button>
                <button className="next-btn" onClick={() => increaseNum()}>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                  </svg>
                </button>
              </div>
              <button className="random-btn" onClick={() => randomView()}>Surprise me</button>
            </article>
        </div>
      </>
    );
  }
  
  export default Review;
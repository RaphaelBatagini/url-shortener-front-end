// @ts-nocheck
import React, { useState, useEffect } from 'react';

const Carousel = ({ delay, children }) => {
  var [currentIndex, setCurrentIndex] = useState(0);
  let interval;

  useEffect(() => {
    if (!children.length) {
      return;
    }

    if (delay) {
      clearInterval(interval);
      interval = setInterval(() => navigate(1), delay);
      return () => { clearInterval(interval) };
    }
  }, [currentIndex]);

  const navigate = (direction) => {
    const steps = direction === 'backward' ? -1 : 1;
    setCurrentIndex((currentIndex) => getChildrenIndexBySteps(currentIndex, steps));
  }

  const getChildrenIndexBySteps = (currentIndex, steps) => {
    if (children.length === 0) {
      return 0;
    }

    if (currentIndex + steps < 0) {
      return children.length - 1;
    }

    if (children[currentIndex + steps] === undefined) {
      return 0;
    }

    return currentIndex + steps;
  }

  return (
    <div className="carousel">
      { children.length > 0 && (
        <div className="current">
          { children[currentIndex] }
        </div>
      ) }
      { children.length > 1 && (
        <div className="buttons">
          <button className="button-previous" onClick={ () => navigate('backward') }>Previous</button>
          <button className="button-next" onClick={ () => navigate('forward') }>Next</button>
        </div>
      ) }
    </div>
  );
};

export default Carousel;

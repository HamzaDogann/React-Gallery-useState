import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  let hasPrev = index > 0;
  let hasNext = index < sculptureList.length - 1;

  function handlePrevClick() {
    if (hasPrev) {
      setIndex(index - 1);
    }
  }

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <div className='generalBox'>


      <h2>
         {sculpture.name} 
        by {sculpture.artist}
      </h2>

      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>

        
       <div className='photoBox'>

        <button className='wayButton' onClick={handlePrevClick} display={!hasPrev}>
          Previous
        </button>

        <img
          src={sculpture.url}
          alt={sculpture.alt}
        />

        <button className='wayButton' onClick={handleNextClick} display={!hasNext}>
          İleri
        </button>

      </div>
      <button className='details-button' onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
    </div>
  );
}

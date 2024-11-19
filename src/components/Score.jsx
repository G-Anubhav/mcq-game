import React from 'react';

const Score = ({ score, totalQuestions }) => {
  return (
    <div className='score-section'>
      <h2>Your Score</h2>
      <p>
        You scored {score} out of {totalQuestions}
      </p>
    </div>
  );
};

export default Score;

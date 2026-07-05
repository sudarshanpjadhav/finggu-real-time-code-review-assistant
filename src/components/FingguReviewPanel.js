import React from 'react';
import useFingguFeedback from '../hooks/useFingguFeedback';

const FingguReviewPanel = () => {
  const { feedback } = useFingguFeedback();

  return (
    <div className='finggu-review-panel'>
      <h2>Code Review Suggestions</h2>
      <ul>
        {feedback.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FingguReviewPanel;
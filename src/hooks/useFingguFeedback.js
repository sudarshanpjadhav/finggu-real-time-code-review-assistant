import { useState } from 'react';

const useFingguFeedback = () => {
  const [feedback, setFeedback] = useState([]);
  return { feedback, setFeedback };
};

export default useFingguFeedback;
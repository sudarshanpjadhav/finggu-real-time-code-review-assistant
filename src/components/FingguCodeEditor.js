import React, { useEffect } from 'react';
import { finggu_fetchFeedback } from '../api/FingguApi';
import useFingguFeedback from '../hooks/useFingguFeedback';

const FingguCodeEditor = () => {
  const { feedback, setFeedback } = useFingguFeedback();

  const handleCodeChange = (code) => {
    finggu_fetchFeedback(code).then(response => {
      setFeedback(response.data);
    });
  };

  return (
    <textarea onChange={(e) => handleCodeChange(e.target.value)} />
  );
};

export default FingguCodeEditor;
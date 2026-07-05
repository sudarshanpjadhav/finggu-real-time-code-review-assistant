import React from 'react';
import FingguCodeEditor from './components/FingguCodeEditor';
import FingguReviewPanel from './components/FingguReviewPanel';

class FingguApp extends React.Component {
  render() {
    return (
      <div className='finggu-app'>
        <FingguCodeEditor />
        <FingguReviewPanel />
      </div>
    );
  }
}

export default FingguApp;
import React, { useEffect } from 'react';

const GenerateResume = () => {
  useEffect(() => {
    redirectToIndex();
  }, []);

  const redirectToIndex = () => {
    window.location.href = 'http://localhost:5500/src/Components/GenerateResume/index.html';
  };

  return <div>Redirecting to index.html...</div>;
};

export default GenerateResume;

import React from 'react' ;
import LeetcodeCPStats from '../assets/LeetcodeCPStats';
import CodeforcesStats from '../assets/CodeforcesStats';

function CPStats() {
  return (
    <div className="gap-20">
      <LeetcodeCPStats />
      <CodeforcesStats />
    </div>
  )
};

export default CPStats ;
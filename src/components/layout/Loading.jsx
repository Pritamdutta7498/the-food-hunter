import React from 'react';

const Loading = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div className='text-center h-[50vh] w-[50vh] flex justify-center items-center'>
        <progress className="progress w-56"></progress>
      </div>
    </div>

  );
};

export default Loading;
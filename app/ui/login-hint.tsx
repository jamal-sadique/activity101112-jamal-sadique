'use client';

import { useState } from 'react';
import { KeyIcon } from '@heroicons/react/24/outline';

export default function LoginTooltip() {
  
  const [isTooltipVisible, setTooltipVisible] = useState<boolean>(false);

  // Toggle the tooltip visibility on click
  const handleClick = () => {
    setTooltipVisible(prevState => !prevState);
  };

  return (
    <main>
      <button 
        onClick={handleClick}  // Toggle tooltip visibility on click
        type="button"
        className="mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:bg-blue-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Hint
      </button>

      {/* Tooltip */}
      <div
        id="tooltip-right"
        role="tooltip"
        className={`absolute z-10 inline-block px-1 py-1 text-xs font-medium text-white bg-gray-900 rounded-lg shadow-sm transition-opacity duration-300 ${isTooltipVisible ? 'opacity-100 visible' : 'opacity-0 invisible'} dark:bg-gray-700`}
      >
        @ :  user@nextmail.com<br></br>
        <div className="flex items-center"><KeyIcon className='h-[16px] w-[12px ] -pr-2' /><span className="ml-1">: 123456</span>
        </div>
        
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </main>
  );
}
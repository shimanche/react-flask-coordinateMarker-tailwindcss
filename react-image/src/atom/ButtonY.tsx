// src/components/Button.tsx

import React, { ButtonHTMLAttributes } from 'react';
import { MdArrowDropUp } from 'react-icons/md';
import { MdArrowDropDown } from 'react-icons/md';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger'; // ボタンのバリエーション
  onClickTop: () => void;
  onClickDown: () => void;
}

export const ButtonY: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  onClickTop,
  onClickDown,
  ...rest
}) => {
  // Tailwind CSSのクラスを動的に変更する
  let colorClass = '';
  switch (variant) {
    case 'primary':
      colorClass = 'bg-gray-200 text-white hover:bg-gray-400';
      break;
    case 'secondary':
      colorClass = 'bg-gray-500 text-white hover:bg-gray-600';
      break;
    case 'danger':
      colorClass = 'bg-red-500 text-white hover:bg-red-600';
      break;
    default:
      colorClass = 'bg-blue-500 text-white hover:bg-blue-600';
      break;
  }

  return (
    <>
      <div>
        <button
          className={`shadow-inner items-center rounded-t-sm focus:outline-none ${colorClass}`}
          onClick={onClickTop}
          {...rest}
        >
          <MdArrowDropUp className='w-4 h-4' />
          {children}
        </button>
      </div>
      <div style={{ marginTop: '-0.4rem' }}>
        {/* <div className="border-l border-gray-100 "></div> */}
        <button
          className={`  shadow-inner items-center rounded-b-sm focus:outline-none ${colorClass}`}
          onClick={onClickDown}
          {...rest}
        >
          <MdArrowDropDown className='w-4 h-4' />
          {children}
        </button>
      </div>

      {/* <button
    className={` rounded-md focus:outline-none ${colorClass}`}
    {...rest}
  >
    <MdArrowLeft className="w-10 h-5 " />
    {children}
  </button>
  <button
    className={` rounded-md focus:outline-none ${colorClass}`}
    {...rest}
  >
    <MdArrowRight className="w-10 h-5 " />
    {children}
  </button> */}
    </>
  );
};

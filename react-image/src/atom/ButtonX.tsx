// src/components/Button.tsx

import React, { ButtonHTMLAttributes } from 'react';
import { MdArrowLeft } from 'react-icons/md';
import { MdArrowRight } from 'react-icons/md';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger'; // ボタンのバリエーション
  onClickLeft:()=>void;
  onClickRight?:()=>void;
}

export const ButtonX: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  onClickLeft,
  onClickRight,
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
      <div className='flex'>
        <button
          className={`flex shadow-inner items-center rounded-l-sm focus:outline-none ${colorClass}`}
          onClick={onClickLeft}
          {...rest}
        >
          <MdArrowLeft className='w-6 h-4' />
          {children}
        </button>
        <div className="border-l border-gray-100 "></div>
        <button
          className={`flex  shadow-inner items-center rounded-r-sm focus:outline-none ${colorClass}`}
          onClick={onClickRight}
          {...rest}
        >
          <MdArrowRight className='w-6 h-4' />
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


import React, { useState, ChangeEvent, useEffect } from 'react';
import axios from 'axios'; // axiosをインポート
import { sendCoordinates } from '../api/apiClient';

import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import {
  ButtonXAdjustCoordinate,
  ButtonYAdjustCoordinate,
} from '../components/ButtonXYAdjustCoordinate';
// import ButtonAdjustCoordinates from '../components/ButtonAdjustCoordinates';

interface Props {
  xValues: string[];
  setXValues: React.Dispatch<React.SetStateAction<string[]>>;
  yValues: string[];
  setYValues: React.Dispatch<React.SetStateAction<string[]>>;
}

const MarkerCoordinates: React.FC<Props> = ({
  xValues,
  setXValues,
  yValues,
  setYValues,
}) => {
  const handleXChange = (index: number, value: string) => {
    const updatedXValues = [...xValues];
    updatedXValues[index] = value;
    setXValues(updatedXValues);
  };
  const handleYChange = (index: number, value: string) => {
    const updatedYValues = [...yValues];
    updatedYValues[index] = value;
    setYValues(updatedYValues);
  };

  const handleSendCoordinates = () => {
    sendCoordinates(xValues, yValues)
      .then((res): any => {
        console.log('from', res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleXCoordinatesMinus = (num: number) => {
    const newXCoordinatesMinus: number[] = xValues.map(Number);
    newXCoordinatesMinus[num] = newXCoordinatesMinus[num] - 2;
    setXValues(newXCoordinatesMinus.map(String));
  };
  const handleXCoordinatesPlus = (num: number) => {
    const newXCoordinatesPlus: number[] = xValues.map(Number);
    newXCoordinatesPlus[num] = newXCoordinatesPlus[num] + 2;
    setXValues(newXCoordinatesPlus.map(String));
  };

  const handleYCoordinatesMinus = (num: number) => {
    const newYCoordinatesMinus: number[] = yValues.map(Number);
    newYCoordinatesMinus[num] = newYCoordinatesMinus[num] - 2;
    setYValues(newYCoordinatesMinus.map(String));
  };
  const handleYCoordinatesPlus = (num: number) => {
    const newYCoordinatesPlus: number[] = yValues.map(Number);
    newYCoordinatesPlus[num] = newYCoordinatesPlus[num] + 2;
    setYValues(newYCoordinatesPlus.map(String));
  };

  return (
    <div className='container mx-auto p-6 max-w-3000 max-h-3000 relative'>
      <h1 className='text-2xl font-bold mb-4'>Marker Coordinates</h1>

      <div className='grid grid-cols-[1rf 30rf]  grid-rows-[1rf 10rf] gap-1'>
        <div className='col-start-1 col-end-2 row-start-1 row-end-2'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center'
            onClick={handleSendCoordinates}
          >
            <svg
              className='w-4 h-4 mr-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
            <span>Send to Flask</span>
          </button>
        </div>{' '}
        {/* 左上の空白 */}
        <div className='col-start-2 col-end-3 '>
          <h2 className='text-xl font-semibold'>X Coordinates</h2>

          {/* <ButtonAdjustCoordinates
            onClickLeft={() => handleXCoordinatesMinus(0)}
          ></ButtonAdjustCoordinates>
                    <ButtonAdjustCoordinates
            onClickLeft={() => handleXCoordinatesMinus(1)}
          ></ButtonAdjustCoordinates> */}
          <div className='flex'>
            {xValues.map((value, index) => (
              <input
                key={index}
                type='number'
                value={value}
                onChange={(e) => handleXChange(index, e.target.value)}
                className='mx-1 input input-bordered rounded-md border border-gray-400 mb-2 block w-20'
              />
            ))}
          </div>
        </div>
        <div className='row-start-2 row-span-3'>
          <h2 className='text-xl font-semibold'>Y Coordinates</h2>
          {yValues.map((value, index) => (
            <input
              key={index}
              type='number'
              value={value}
              onChange={(e) => handleYChange(index, e.target.value)}
              className='mx-1 input input-bordered rounded-md border border-gray-400 my-2 block w-20'
            />
          ))}
        </div>
        <div
          className='absolute left-56 top-40 '
          style={{ width: '2000px', height: '3000px' }}
        >
          <div
            className='absolute  top-40 '
            style={{ left: '770px', top: ' 300px', zIndex: 1 }}
          >
            <ButtonXAdjustCoordinate
              handleXCoordinatesMinus={handleXCoordinatesMinus}
              handleXCoordinatesPlus={handleXCoordinatesPlus}
            />
          </div>
          <div
            className='absolute  top-40 '
            style={{ left: '500px', top: ' 390px', zIndex: 1 }}
          >
            <ButtonYAdjustCoordinate
              handleYCoordinatesMinus={handleYCoordinatesMinus}
              handleYCoordinatesPlus={handleYCoordinatesPlus}
            />
          </div>

          <h2 className='text-xl font-semibold mb-2'>Image with Markers</h2>
          <div className='absolute  '>
            <div className='relative bg-gray-300 shadow-2xl '>
              <img
                src='./image_1.JPG'
                alt='Placeholder'
                className=' w-full h-full shadow-lg'
              />

              {/* ダミーのマーカー */}
              {xValues.map((x, xIndex) =>
                yValues.map((y, yIndex) => (
                  <div
                    key={`${xIndex}-${yIndex}`} // 一意なキーを設定
                    className='absolute border border-red-500 ' // 四角のサイズを30pxに変更
                    style={{
                      left: `${x}px`, // x位置を調整して中心に配置
                      top: `${y}px`, // y位置を調整して中心に配置
                      borderRadius: '1px', // 角を丸める
                      width: '30px',
                      height: '30px',
                    }}
                  ></div>
                )),
              )}
              {/* {xValues.map((x, xIndex) =>
                yValues.map((y, yIndex) => (
                  <div
                    key={`${xIndex}-${yIndex}`} // 一意なキーを設定
                    className='absolute bg-red-500 w-1 h-1 rounded-full'
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                    }}
                  ></div>
                )),
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkerCoordinates;

import React from 'react';

import { ButtonX } from '../atom/ButtonX';
import { ButtonY } from '../atom/ButtonY';

interface PropsX {
  handleXCoordinatesMinus: (num: number) => void;
  handleXCoordinatesPlus: (num: number) => void;
}

interface PropsY {
  handleYCoordinatesMinus: (num: number) => void;
  handleYCoordinatesPlus: (num: number) => void;
}

export const ButtonXAdjustCoordinate: React.FC<PropsX> = ({
  handleXCoordinatesMinus,
  handleXCoordinatesPlus,
}) => {
  return (
    <>
      <div className='grid grid-cols-5' style={{ width: '550px' }}>
        <ButtonX
          onClickLeft={() => handleXCoordinatesMinus(0)}
          onClickRight={() => handleXCoordinatesPlus(0)}
        ></ButtonX>
        <ButtonX
          onClickLeft={() => handleXCoordinatesMinus(1)}
          onClickRight={() => handleXCoordinatesPlus(1)}
        ></ButtonX>
        <ButtonX
          onClickLeft={() => handleXCoordinatesMinus(2)}
          onClickRight={() => handleXCoordinatesPlus(2)}
        ></ButtonX>
        <ButtonX
          onClickLeft={() => handleXCoordinatesMinus(3)}
          onClickRight={() => handleXCoordinatesPlus(3)}
        ></ButtonX>
        <ButtonX
          onClickLeft={() => handleXCoordinatesMinus(4)}
          onClickRight={() => handleXCoordinatesPlus(4)}
        ></ButtonX>
      </div>
    </>
  );
};

export const ButtonYAdjustCoordinate: React.FC<PropsY> = ({
  handleYCoordinatesMinus,
  handleYCoordinatesPlus,
}) => {
  return (
    <>
      <div className='grid grid-row-34 ' style={{ height: '850px' }}>
        <div className='row-span-1'>
          <ButtonY
            onClickTop={() => handleYCoordinatesMinus(0)}
            onClickDown={() => handleYCoordinatesPlus(0)}
          ></ButtonY>
        </div>

        <div className='row-span-1'>
          <ButtonY
            onClickTop={() => handleYCoordinatesMinus(1)}
            onClickDown={() => handleYCoordinatesPlus(1)}
          ></ButtonY>
        </div>
        <div className='row-span-6'></div>
        <div className='row-span-1'>
          <ButtonY
            onClickTop={() => handleYCoordinatesMinus(2)}
            onClickDown={() => handleYCoordinatesPlus(2)}
          ></ButtonY>
        </div>
        <div className='row-span-1'>
          <ButtonY
            onClickTop={() => handleYCoordinatesMinus(3)}
            onClickDown={() => handleYCoordinatesPlus(3)}
          ></ButtonY>
        </div>
        <div className='row-span-6'></div>
        <div className='row-span-1'>
          <ButtonY
            onClickTop={() => handleYCoordinatesMinus(4)}
            onClickDown={() => handleYCoordinatesPlus(4)}
          ></ButtonY>
        </div>
        <div className='row-span-1'>
          <ButtonY
            onClickTop={() => handleYCoordinatesMinus(5)}
            onClickDown={() => handleYCoordinatesPlus(5)}
          ></ButtonY>
        </div>
        <div className='row-span-6'></div>
        <div className='row-span-1'>
          <ButtonY
            onClickTop={() => handleYCoordinatesMinus(6)}
            onClickDown={() => handleYCoordinatesPlus(6)}
          ></ButtonY>
        </div>
        <div className='row-span-1'>
          <ButtonY
            onClickTop={() => handleYCoordinatesMinus(7)}
            onClickDown={() => handleYCoordinatesPlus(7)}
          ></ButtonY>
        </div>
        <div className='row-span-6'></div>
        <div className='row-span-1'>
          <ButtonY
            onClickTop={() => handleYCoordinatesMinus(8)}
            onClickDown={() => handleYCoordinatesPlus(8)}
          ></ButtonY>
        </div>
        <div className='row-span-1'>
          <ButtonY
            onClickTop={() => handleYCoordinatesMinus(9)}
            onClickDown={() => handleYCoordinatesPlus(9)}
          ></ButtonY>
        </div>
      </div>
    </>
  );
};

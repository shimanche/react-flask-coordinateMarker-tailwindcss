// LineWithDrag.tsx
import React, { useState } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

const LineWithDrag: React.FC = () => {
  return(
    <div></div>
  )
  
  // const [linePos, setLinePos] = useState({ x1: 50, y1: 50, x2: 200, y2: 100, startX: 0, startY: 0 });

  // const { attributes, listeners, setNodeRef, transform } = useDraggable({
  //   onDragStart: (event) => {
  //     console.log('Drag start');
  //     const startX = event.clientX;
  //     const startY = event.clientY;
  //     setLinePos((prevPos) => ({ ...prevPos, startX, startY }));
  //   },
  //   onDragMove: (event) => {
  //     const newX = event.clientX;
  //     const newY = event.clientY;
  //     setLinePos((prevPos) => ({
  //       ...prevPos,
  //       x1: prevPos.x1 + newX - prevPos.startX,
  //       y1: prevPos.y1 + newY - prevPos.startY,
  //       x2: prevPos.x2 + newX - prevPos.startX,
  //       y2: prevPos.y2 + newY - prevPos.startY,
  //       startX: newX,
  //       startY: newY,
  //     }));
  //   },
  //   onDragEnd: () => {
  //     console.log('Drag end');
  //   },
  // });

  // return (
  //   <svg
  //     className="absolute"
  //     width="100%"
  //     height="100%"
  //     onMouseDown={(e) => {
  //       setNodeRef(e.currentTarget);
  //     }}
  //     style={{
  //       touchAction: 'none',
  //       userSelect: 'none',
  //       width: '100%',
  //       height: '100%',
  //     }}
  //     {...attributes}
  //     {...listeners}
  //   >
  //     <image
  //       href='./image_1.JPG' // 画像のパスを指定
  //       width="100%"
  //       height="100%"
  //       preserveAspectRatio="xMidYMid slice"
  //     />
  //     <line
  //       x1={linePos.x1}
  //       y1={linePos.y1}
  //       x2={linePos.x2}
  //       y2={linePos.y2}
  //       strokeWidth="2"
  //       stroke="red"
  //       style={{
  //         transform: CSS.Transform.toString(transform),
  //       }}
  //     />
  //   </svg>
  
};

export default LineWithDrag;

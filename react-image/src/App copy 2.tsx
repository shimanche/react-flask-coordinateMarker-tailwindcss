import React, { useState, ChangeEvent, useEffect } from 'react';
import axios from 'axios'; // axiosをインポート
import { DndContext } from '@dnd-kit/core';
import { arrayMove, SortableContext } from '@dnd-kit/sortable';
import SimpleSortableItem from './components/SimpleSortableItem';
import ItemForNameCompany from './components/ItemForNameCompany';
import { downloadCSV } from './utils/csvDownloader';
import { doubleList } from './utils/doubleList';




const App: React.FC = () => {
  const xinit = [775, 887, 993, 1104, 1219];
  const yinit = [377, 415, 560, 598, 739, 776, 924, 958, 1100, 1140];

  const [xValues, setXValues] = useState<string[]>(xinit.map(String));
  const [yValues, setYValues] = useState<string[]>(yinit.map(String));

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

  return (
    <div className='container mx-auto p-6 max-w-3000 max-h-3000 relative'>
      <h1 className='text-2xl font-bold mb-4'>Marker Coordinates</h1>

      <div className='grid grid-cols-[1rf 30rf]  grid-rows-[1rf 10rf] gap-1'>
        <div className='col-start-1 col-end-2 row-start-1 row-end-2'></div>{' '}
        {/* 左上の空白 */}
        <div className='col-start-2 col-end-3 '>
          <h2 className='text-xl font-semibold'>X Coordinates</h2>
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
        <div className='absolute left-56 top-40 'style={{ width: '2000px', height: '3000px' }}>
          <h2 className='text-xl font-semibold mb-2'>Image with Markers</h2>
          <div className='absolute  '>
            <div className='relative bg-gray-300 p-1'>
              <img
                src='./image_1.JPG'
                alt='Placeholder'
                className=' w-full h-full '
              />

              {/* ダミーのマーカー */}
              {xValues.map((x, xIndex) =>
                yValues.map((y, yIndex) => (
                  <div
                    key={`${xIndex}-${yIndex}`} // 一意なキーを設定
                    className='absolute bg-red-500 w-4 h-4 rounded-full'
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                    }}
                  ></div>
                )),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

{
  /* <div>
<h2 className="text-xl font-semibold mb-2">Image with Markers</h2>

<h1>Sortable List</h1>
<input type='file' onChange={handleFileChange} />
<button onClick={sendItemshandler}>upload</button>
<button onClick={() => downloadCSV(responseData)}>Download CSV</button>
<button onClick={() => downloadCSV(responseDataDouble)}>
 Download CSV double
</button>
{/* 受け取ったデータを表示 */
}

// <h2>Response Data:</h2>

// <div style={{ marginBottom: '10px' }}>
//  {/* <button onClick={getMsg}>send</button> */}
// </div>
// {/* <DndContext collisionDetection={closestCenter} modifiers={[restrictToVerticalAxis]}> */}
// <DndContext
//  onDragEnd={(event) => {
//    const { active, over } = event;
//    if (over == null) {
//      return;
//    }
//    if (active.id !== over.id) {
//      setResponseData((items) => {
//        const oldIndex = items!.findIndex(
//          (item) => item.No === active.id,
//        );
//        const newIndex = items!.findIndex((item) => item.No === over.id);
//        return arrayMove(items!, oldIndex, newIndex);
//      });
//    }
//  }}
// >
//  <SortableContext items={responseData ?? []}>
//    {responseData?.map((data, index) => (
//      <div
//        style={{
//          display: 'flex',
//          alignItems: 'center',
//          marginBottom: '5px', // アイテム間のマージンを追加
//          padding: '10px',
//          border: '1px solid #ccc',
//          borderRadius: '5px',
//          transition: 'background-color 0.3s ease',
//        }}
//      >
//        <div style={{ marginRight: '10px', fontWeight: 'bold' }}>
//          {index + 1}
//        </div>
//        <ItemForNameCompany key={data.id} item={data} />
//      </div>
//    ))}
//  </SortableContext>
// </DndContext>
// <hr
//  style={{
//    border: 'none',
//    height: '2px', // 線の太さ
//    backgroundColor: '#333', // 線の色
//    margin: '20px 0', // 上下の余白
//  }}
// />

// {/* <DndContext collisionDetection={closestCenter} modifiers={[restrictToVerticalAxis]}> */}
// <DndContext
//  onDragEnd={(event) => {
//    const { active, over } = event;
//    if (over == null) {
//      return;
//    }
//    if (active.id !== over.id) {
//      setItems((items) => {
//        const oldIndex = items.findIndex((item) => item.id === active.id);
//        const newIndex = items.findIndex((item) => item.id === over.id);
//        return arrayMove(items, oldIndex, newIndex);
//      });
//    }
//  }}
// >
//  <SortableContext items={items}>
//    {items.map((item, index) => (
//      <div
//        style={{
//          display: 'flex',
//          alignItems: 'center',
//          marginBottom: '5px', // アイテム間のマージンを追加
//          padding: '10px',
//          border: '1px solid #ccc',
//          borderRadius: '5px',
//          transition: 'background-color 0.3s ease',
//        }}
//      >
//        <div style={{ marginRight: '10px', fontWeight: 'bold' }}>
//          {index + 1}
//        </div>
//        <SimpleSortableItem key={item.id} item={item} />
//      </div>
//    ))}
//  </SortableContext>
// </DndContext>
// <button onClick={getMsg}>Check Flask Connection</button>
// </div> */}

// // interface ResponseData {
// //   file_content: string;
// //   error?: string;
// // }

// // const handleDouble = () => {
// //   responseData && setResponseDataDouble(doubleList(responseData));
// //   console.log('responseDataDouble', responseDataDouble);
// // };

// // {responseData && (
// //   <div>
// //     <h2>Response Data:</h2>
// //     {responseData.map((data: any, index: any) => (
// //       <div key={index}>
// //         <p>No: {data.No}</p>
// //         <p>Name: {data.name}</p>
// //         <p>Company: {data.company}</p>
// //         {/* 他のデータも表示します */}
// //       </div>
// //     ))}
// //   </div>
// // )}

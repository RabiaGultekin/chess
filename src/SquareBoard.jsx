import React from 'react'
import { DragPreviewImage, useDrag } from 'react-dnd'

const SquareBoard = ({ brd, positionCntrl }) => {
  const [{isDragging}, drag, dragPreview] = useDrag({
    type: 'chess',
    item: { id: `${positionCntrl}_${brd.type}_${brd.color}` },
    collect: (monitor) => {
      return {isDragging : !! monitor.isDragging}
    }
  })
  const pieceImage = require(`../public/assets/images/${brd.type}_${brd.color}.png`)
  console.log("brddd", brd);
  return (
    <div ref={drag}>
      <DragPreviewImage src={pieceImage} connect={dragPreview} />
      <img className='w-[50px]' src={pieceImage} alt="" />
    </div>
  )
}

export default SquareBoard

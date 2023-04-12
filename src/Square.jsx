import React from 'react'
import { useDrop } from 'react-dnd'
import { move } from './Game'

const Square = ({children, colorValue,positionCntrl}) => {
    console.log(positionCntrl, "positionCntrl")
    const[,drop] = useDrop({
    accept: 'chess',
    drop : (item) => {
      const [fromPosition] = item.id.split('_')
      move(fromPosition, positionCntrl)
    }
  })
    
  return (
      <div ref={drop} className={`${colorValue ? 'bg-green-800' : 'bg-green-100'} w-[80px] h-[80px] flex items-center justify-center cursor-grab`}>{children}</div>
  )
}

export default Square

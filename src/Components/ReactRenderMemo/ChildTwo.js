import React from 'react'

export const ChildTwo = ({children,name}) => {
  console.log('ChildTwo Render');
  return (
    <div>
      {children} {name}
    </div>
  )
}

export const MemoizedChildTWo = React.memo(ChildTwo)

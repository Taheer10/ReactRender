import React from 'react'

export const ChildFive = ({name}) => {
    console.log('ChildRender Five')
  return (
    <div>Hello

        {name}
        {/* {person.fname}
        {person.lname} */}

    </div>
  )
}


export const MemoizedChildFive = React.memo(ChildFive)
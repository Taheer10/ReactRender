import React,{useState} from 'react'
import { Child } from './Child'
import { Parent } from './Parent'

export const GrandParent = () => {
    const [newCount, setnewCount] = useState(0)
    console.log('Grand Parent Render');

  return (
    <div>


        <button onClick={()=> setnewCount(nc=>nc+1)}>GrandParent COunt -{newCount}</button>
        <Parent>
          <Child/>
        </Parent>
    </div>
  )
}

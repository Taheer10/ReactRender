import React,{useState} from 'react'
import { MemoizedChildTWo } from './ChildTwo';


export const ParentTwo = () => {
    const [count, setcount] = useState(0)
    const [name, setname] = useState('Tahir')

    console.log('ParentTwo Render');
  return (
    <div>



        <button onClick={()=> setcount(c => c+1)}>Count - {count}</button>
        <button onClick={()=> setname('Hussain')}>ChangeName </button>
         <MemoizedChildTWo name={name}/>
    </div>
  )
}

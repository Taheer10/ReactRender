import React,{useState} from 'react'
import { MemoizedChildFour } from './ChildFour'


export const ParentThree = () => {
    const [count, setcount] = useState(0)
    const [name, setname] = useState('Tahir')

    console.log('ParentThree Render');
  return (
    <div>



        <button onClick={()=> setcount(c => c+1)}>Count - {count}</button>
        <button onClick={()=> setname('Hussain')}>ChangeName </button>

        <MemoizedChildFour name={name}/>
      
        {/* <MemoizedChildThree name={name}> */}

        {/*    Wrong way to do
        three is no need to wrap child components with 
        react memo if the child itself has children elements
                <strong>Hello</strong>  
                 No need to wrap
                */}
{/* 
                Hello
             </MemoizedChildThree> */}
    </div>
  )
}

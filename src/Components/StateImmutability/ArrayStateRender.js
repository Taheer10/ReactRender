import React,{useState} from 'react'

  const initState = ['Eden','Hazard']

export const ArrayStateRender = () => {
    const [persons, setperson] = useState(initState)

   
    const changeName =()=>{
        // person.push ("Eden")
        // person.push("Hariiadsn")

        // setperson(person)  --Mistake(Wrong way to change state)

        const NewPerson = {...persons}
        persons.push ("David")
        persons.push("Beckham")
        setperson(NewPerson)
    }

    console.log('ArrayState Render')

  return (
    <div>
        <button onClick={changeName}>Click</button>
        {
            persons.map((person)=>
               <div key={person}> {person} </div>
            )
        }
    </div>
  )
}

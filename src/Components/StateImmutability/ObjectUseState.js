import React,{useState} from 'react'

  const initState = {
      fname:'Cristiano',
      lname:'Ronaldo'
  }

export const ObjectUseState = () => {
    const [person, setperson] = useState(initState)

   
    const changeName =()=>{
        // person.fname = "Eden",
        // person.lname = "Hazard"

        // setperson(person)  --Mistake(Wrong way to change state)

        const NewPerson = {...person}
        NewPerson.fname = 'Eden'
        NewPerson.lname = 'Hazard'
        setperson(NewPerson)
    }

    console.log('ObjectSTate Render')

  return (
    <div>
        <button onClick={changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}

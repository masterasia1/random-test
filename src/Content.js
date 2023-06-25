import React from 'react';
import { useState } from 'react';

const Content = () => {

  const [items, setItems] = useState([

    {id: 1,
     item: 'bag of rice',
     checked: false, 
    
    },
    {id: 2,
      item: 'cereal',
      checked: false, 
     
     },
     {id: 3,
      item: 'watermelon',
      checked: false, 
     
     }

  ])


  const handleCheck = (id) => {
    const itemList= items.map((item) => item.id === id ? {...item, checked: !item.checked} : item)
    setItems(itemList)
  
  }

  const handleDelete = (id) => {
    const itemList = items.filter((item) => item.id !== id)
    setItems(itemList)
  }

  return (
    <main> 

    <ul>
      {items.map((item) => (
      <ul className='item' key={item.id}>
        
        <input type="checkbox" checked={item.checked} onChange={() => handleCheck(item.id)} />
        <label onDoubleClick={() => handleCheck(item.id)} style={ (item.checked) ? {textDecoration: 'underline'} : null}>{item.item}</label>
        <button onClick={() => handleDelete(item.id)}>dumb</button>

      </ul>))}
    </ul>
   




    </main>
  )
}

export default Content
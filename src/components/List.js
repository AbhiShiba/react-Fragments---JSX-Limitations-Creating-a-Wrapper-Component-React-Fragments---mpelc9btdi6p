import React from 'react';
import ListItems from './ListItems';

 const List = ({listx}) =>{
  const listVal = (l) => {
   return  l.map((item,index) => {
          return <ListItems  valuex={item} keys={index}/>
    })
  }

  return(
    // code here
    <>
      {listx === [] ? "" : listVal(listx)}
     
      </>
    
  )
}

export default List;
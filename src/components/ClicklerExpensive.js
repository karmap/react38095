import React, { useEffect } from 'react'

const ClicklerCard = ( {children} ) => {

  useEffect(() => {
    console.log('Render: ClicklerCard');
  } )

  return (
    <div className='font-bold'>
        { children }
    </div>
  )
}

const ClicklerExpensive = React.memo(() => {

  useEffect(() => {
    console.log('Render: ClicklerExpensive');
  } )
  
  return (
    <div className='m-6'>
        <h1>
            ClicklerExpensive
        </h1>
        <ClicklerCard>1</ClicklerCard>
        <ClicklerCard>2</ClicklerCard>
        <ClicklerCard>3</ClicklerCard>
        <ClicklerCard>4</ClicklerCard>
    </div>
  )
})

export default ClicklerExpensive
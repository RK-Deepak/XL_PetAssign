import React from 'react'
import Cat from './Cat';
import  dog3 from "../../assets/dog2.png"

const Category3 = () => {
    const heading="Pet DayCare";
    const description="Pet grooming is the process of maintaining your pet’s hygiene and enhancing their physical appearance, which includes tasks like washing, brushing, trimming fur, and clipping nail"
    const buttontxt="Get Started"

  return (
    <div className='category-1-div'>
    <Cat heading={heading} description={description} buttontxt={buttontxt}/>
    
    <div className='category-1-img dog3'> 
       <img src={dog3} alt=''/>
    </div>
    </div>
  )
}

export default Category3
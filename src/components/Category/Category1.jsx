import React from 'react'
import Cat from './Cat'
import dog1 from "../../assets/dog1.png"
const Category1 = () => {
    
    const heading="Pet Gromming";
    const description="Pet grooming is the process of maintaining your pet’s hygiene and enhancing their physical appearance, which includes tasks like washing, brushing, trimming fur, and clipping nail"
    const buttontxt="Get Started"

  return (
    <div className='category-1-div'>
    <Cat heading={heading} description={description} buttontxt={buttontxt}/>

    <div className='category-1-img dog1'> 
       <img src={dog1} alt=''/>
    </div>
    </div>
  )
}

export default Category1
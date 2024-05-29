import React from 'react'
import Cat from './Cat';
import dog2 from "../../assets/dog1.1.png"

const Category2 = () => {
    const heading="Pet Cleaning";
    const description="The pet clinic offers comprehensive veterinary services, including medical consultations, vaccinations, and surgical procedures, ensuring the well-being of furry companions. The clinic provides compassionate care and support to pets and their owners."
    const buttontxt="Get Started"

  return (
    <div className='category-1-div'>
    <Cat heading={heading} description={description} buttontxt={buttontxt}/>
    
    <div className='category-1-img dog2'> 
       <img src={dog2} alt=''/>
    </div>
    </div>
  )
}

export default Category2
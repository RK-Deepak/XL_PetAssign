import React from 'react'
import Cat from './Cat';
import  dog4 from "../../assets/doglast.png"

const Category4 = () => {
    const heading="Pet Training";
    const description="Pet training encompasses teaching animals essential behaviors and commands, fostering obedience and good manners. Training sessions focus on positive reinforcement techniques, such as rewards and praise."
    const buttontxt="Get Started"

  return (
    <div className='category-1-div'>
    <Cat heading={heading} description={description} buttontxt={buttontxt}/>
    
    <div className='category-1-img dog4'> 
       <img src={dog4} alt=''/>
    </div>
    </div>
  )
}

export default Category4
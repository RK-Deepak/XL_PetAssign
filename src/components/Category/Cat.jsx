import React from 'react'
import "./Category.css"
const Cat = ({heading,description,buttontxt}) => {
  return (
    <div className='category-hero'>
       
        <div className='category-hero-inner'>
            <span className='heading'>{heading}</span>
            <span className='desc'>{description}</span>
            <button>{buttontxt}</button>
        </div>
        </div>
  )
}

export default Cat
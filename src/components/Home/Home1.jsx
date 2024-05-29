import React from 'react'
import img1 from "../../assets/pic1.png"
import img2 from "../../assets/pic2.png"
import img3 from "../../assets/pic3.png"
import img4 from "../../assets/pic4.png"
import img5 from "../../assets/pic5.png"

const Home1 = () => {
  return (
    <div className='home1 homex'>
     <p className='animated-text1'>Taking care for your pets !</p>
     <div className='side-images imghome-1'>
      <img src={img1} alt=''/>
      <img src={img2} alt=''/>
      <img src={img3} alt=''/>
      <img src={img4} alt=''/>
      <img src={img5} alt=''/>
     </div>
    </div>
    
  )
}

export default Home1
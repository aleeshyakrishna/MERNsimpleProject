// import React from 'react'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.jpg'
import image7 from '../assets/image7.jpg'

function Places() {
  return (
    <>
    <section className="grid">
    <h3>We are currently in 46 countries</h3>
    <div className="grid-items">
    {/* <div>
        <img src={image4} alt="" />
        <h4>fly to aruba</h4>
        <p>gdjfvnxxkcjxvhkdjgbvhxbvkxjc,bvn mc bkjkjxdbfkhdb</p>
    </div> */}

    <div>
        <img src={image5} alt="" />
        <h4>fly to aruba</h4>
        <p>gdjfvnxxkcjxvhkdjgbvhxbvkxjc,bvn mc bkjkjxdbfkhdb</p>
    </div>

    <div>
        <img src={image6} alt="" />
        <h4>Experience mombasa</h4>
        <p>gdjfvnxxkcjxvhkdjgbvhxbvkxjc,bvn mc bkjkjxdbfkhdb</p>
    </div>

    <div>
        <img src={image7} alt="" />
        <h4>fly to aruba</h4>
        <p>gdjfvnxxkcjxvhkdjgbvhxbvkxjc,bvn mc bkjkjxdbfkhdb</p>
    </div>
    </div>
    </section>
    </>
  )
}

export default Places
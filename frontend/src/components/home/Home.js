import React from 'react'
import "./home.css"


const Home = () => {
  return <div className='home d-flex justify-content-center align-items-center'>
    <div className="container d-flex justify-content-center align-items-center flex-column">
        <h1 className='text-center'>
            Lorem, ipsum dolor. <br /> Lorem ipsum dolor sit amet.
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur <br /> Todo app</p>
        <button className='home-btn p-2'>Make TodoList</button>
    </div>
  </div>
}

export default Home

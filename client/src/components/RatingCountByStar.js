import React from 'react';
import {Line} from 'rc-progress';
import '../styles/ReviewList.css'

const RatingCountByStar = () => {
  return (
    <div>
      <div>
        5 Stars
        <input type="checkbox"></input>
        <Line className='percentBar' percent={40} strokeWidth={5} strokeColor='blue' trailWidth={5}/>
      </div>
      <div>
        4 Stars
        <input type="checkbox"></input>
        <Line className='percentBar' percent={40} strokeWidth={5} strokeColor='blue' trailWidth={5}/>
      </div>
      <div>
        3 Stars
        <input type="checkbox"></input>
        <Line className='percentBar' percent={40} strokeWidth={5} strokeColor='blue' trailWidth={5}/>
      </div>
      <div>
        2 Stars
        <input type="checkbox"></input>
        <Line className='percentBar' percent={40} strokeWidth={5} strokeColor='blue' trailWidth={5}/>
      </div>
      <div>
        1 Stars
        <input type="checkbox"></input>
        <Line className='percentBar' percent={40} strokeWidth={5} strokeColor='blue' trailWidth={5}/>
      </div>
    </div>
  )
}

export default RatingCountByStar
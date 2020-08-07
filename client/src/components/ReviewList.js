import React from 'react';
import '../styles/ReviewList.css';
import StarRatings from 'react-star-ratings';
import {Line} from 'rc-progress';

var ReviewList = () => {
  return (

    <div>
      <div className='reviewStats'>
        <div className='rating summary'>
          Customer Rating
          <div className='avgRatingScore'>
            4.7
          </div>
          <div className='starRatings'>
            <StarRatings
              rating={2.5}
              starRatedColor="yellow"
              // changeRating={this.changeRating}
              numberOfStars={5}
              name='rating'
              starDimension="20px"
              starSpacing="3px"
              ////////this is the exact SVG icon that bestBuy uses, but having trouble with the sizing of it////////
              // svgIconPath="M10.5 5.3L8.4.5 6.3 5.3c-.1.3-.4.4-.6.4H.5l4 4c.1.2.2.5.1.7l-1 5.1L8 13c.2-.2.4-.2.6 0l4.6 2.6-1.2-5.1c0-.2 0-.5.2-.6l4-4H11a.6.6 0 01-.6-.5h0z"
            />
            50 ratings
          </div>
          92% would recommend to a friend.
        </div>
        <div className='rating stars'>
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
        <div className ='rating pros'>
          Pros / Cons
        </div>
        <div className = 'rating expertRating'>
          Expert Rating
        </div>
      </div>
    </div>
    )
}

export default ReviewList
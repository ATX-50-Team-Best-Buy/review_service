import React from 'react';
import {Line} from 'rc-progress';
import '../styles/ReviewList.css'
import StarRatings from 'react-star-ratings';

const RatingCountByStar = ({reviewAvg, reviewCounts, reviews}) => {
  // console.log(reviewAvg)
  var numRecommended = 0
  reviews.forEach( review => {
    if (review.reviewRecommended === true) {
      numRecommended++;
    }
  });

  let percentRecommended = numRecommended / reviews.length * 100 || 0;

  return (
    <div>
    <div className='averageRatings'>
      Customer Rating
      <div className='avgRatingScore'>
        {reviewAvg}
      </div>
      <div className='starRatings'>
        <StarRatings
          rating={reviewAvg}
          starRatedColor="yellow"
          // changeRating={this.changeRating}
          numberOfStars={5}
          name='rating'
          starDimension="20px"
          starSpacing="3px"
          ////////this is the exact SVG icon that bestBuy uses, but having trouble with the sizing of it////////
          // svgIconPath="M10.5 5.3L8.4.5 6.3 5.3c-.1.3-.4.4-.6.4H.5l4 4c.1.2.2.5.1.7l-1 5.1L8 13c.2-.2.4-.2.6 0l4.6 2.6-1.2-5.1c0-.2 0-.5.2-.6l4-4H11a.6.6 0 01-.6-.5h0z"
          />
        <br></br>
        {`${reviews.length} reviews`}
        <br></br>
        {`${percentRecommended}% would recommend to friends`}
        </div>
      </div>
      <div className='countByStars'>
        <div>
          5 Stars
          <input type="checkbox"></input>
          <Line className='percentBar' percent={reviewCounts[5]} strokeWidth={5} strokeColor='blue' trailWidth={5}/>
        </div>
        <div>
          4 Stars
          <input type="checkbox"></input>
          <Line className='percentBar' percent={reviewCounts[4]} strokeWidth={5} strokeColor='blue' trailWidth={5}/>
        </div>
        <div>
          3 Stars
          <input type="checkbox"></input>
          <Line className='percentBar' percent={reviewCounts[3]} strokeWidth={5} strokeColor='blue' trailWidth={5}/>
        </div>
        <div>
          2 Stars
          <input type="checkbox"></input>
          <Line className='percentBar' percent={reviewCounts[2]} strokeWidth={5} strokeColor='blue' trailWidth={5}/>
        </div>
        <div>
          1 Stars
          <input type="checkbox"></input>
          <Line className='percentBar' percent={reviewCounts[1]} strokeWidth={5} strokeColor='blue' trailWidth={5}/>
        </div>
      </div>
    </div>
  )
}

export default RatingCountByStar
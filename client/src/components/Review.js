import React from 'react';
import '../styles/Review.css';
import StarRatings from 'react-star-ratings';


const Review = ( {review} ) => {
  return (
    <div className='reviewContainer'>
      <div className='reviewHeader'>
        <div className="username">
          <strong>Username</strong>
        </div>
        <br></br>
        <div className="reviewHeaderText">
          <strong>Pros mentioned</strong>
          <div></div>
          small battery, bad laptop
        </div>
        <br></br>
        <div className="reviewHeaderText">
          <strong>Cons mentioned</strong>
          <div></div>
          Looks sweet
        </div>
      </div>

      <div className='reviewBody'>
        <StarRatings
          className='reviewRating'
          rating={review.rating}
          starRatedColor="yellow"
          // changeRating={this.changeRating}
          numberOfStars={5}
          name='rating'
          starDimension="20px"
          starSpacing="3px"
        />
        <div className="reviewBody header">
         <strong>Review Body Header</strong>
        </div>
        <div>
        <br></br>
        Posted 1 month ago.
        </div>
        <br></br>
      {review.reviewText}
      <br></br>
      <div className='reviewBody footer'>
        <button style={{border: '1px solid #c5cbd5', padding: '0 7px'}}className="reviewButtons">helpful ({review.helpful})</button>
        <button className="reviewButtons">unhelpful ({review.unhelpful})</button>
        <button style={{borderLeft: '1px solid #040c13'}} className="reviewButtons">report</button>
        <button style={{borderLeft: '1px solid #040c13'}} className="reviewButtons">comment</button>
        <button style={{borderLeft: '1px solid #040c13'}}className="reviewButtons">show comment</button>
      </div>
      </div>
    </div>
  )
}

export default Review;
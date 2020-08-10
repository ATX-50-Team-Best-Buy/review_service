import React from 'react';
import '../styles/ReviewList.css';
import StarRatings from 'react-star-ratings';
import RatingCountByStar from './RatingCountByStar';
import FilterReview from './FilterReview';
import Review from './Review';
import axios from 'axios'

class ReviewList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      reviews: []
    };

    this.getAllReviews = this.getAllReviews.bind(this);
  }

  componentDidMount() {
    this.getAllReviews();

  }

  getAllReviews() {
    axios.get('http://localhost:1963/reviews')
    .then(reviews => {
      this.setState({
        reviews: reviews.data
      });
      console.log(this.state);
    })
    .catch(error => {
      console.log('Error retrieving reviews: ', error);
      console.log(error)
    })
  }

  writeReview() {
    axios.post('http://localhost:1963/reviews')
    .then(confirmation => {
      console.log('Review successfully posted: ', confirmation);
    })
    .catch(error => {
      console.log('Error posting review: ', error);
    })
  }

  render() {

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
              rating={4}
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
            (50 ratings)
          </div>
          92% would recommend to a friend.
        </div>
        <div className = 'rating stars'>
          <RatingCountByStar />
        </div>
        <div className ='rating pros'>
          <div className="ProsAndCons">
            Pros mentioned
            <button className="proButtons">Pro #1</button>
            <button className="proButtons">Pro #2</button>
            <button className="proButtons">Pro #3</button>
          </div>
          <div className="ProsAndCons">
            Cons mentioned
            <button className="proButtons">Con #1</button>
            <button className="proButtons">Con #1</button>
            <button className="proButtons">Con #1</button>
          </div>
        </div>
        <div className = 'rating expertRating'>
          Expert Rating
          <br></br>
          <div className='avgRatingScore'>
            4.7
          </div>
          <div className='starRatings'>
            <StarRatings
              rating={4}
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
            (50 ratings)
          </div>
        </div>
      </div>
      <div style={{borderBottom: '1px solid rgb(197, 203, 213)'}}>
        <FilterReview />
      </div>
      {this.state.reviews.map( (review, idx) =>
      <Review review={review}  key={idx} />
      )}
      <div>
        <button>Write Review</button>
      </div>
    </div>
    )
  }
}

  export default ReviewList
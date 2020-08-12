import React from 'react';
import '../styles/ReviewList.css';
import StarRatings from 'react-star-ratings';
import RatingCountByStar from './RatingCountByStar';
import FilterReview from './FilterReview';
import Review from './Review';
import axios from 'axios';
import ReviewForm from './ReviewForm';

class ReviewList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      reviews: [],
      productID: 4,
      reviewHeading: '',
      reviewText: '',
      reviewUsername: '',
      reviewRating: 0,
      reviewRecommended: false,
      reviewQuality: 0,
      reviewValue: 0,
      reviewEaseOfUse: 0,
      reviewImages: []
    };

    this.getReviewsByProductID = this.getReviewsByProductID.bind(this);
    this.getAllReviews = this.getAllReviews.bind(this);
    this.addReviewPart = this.addReviewPart.bind(this);
    this.addReviewQuality = this.addReviewQuality.bind(this);
    this.addReviewValue = this.addReviewValue.bind(this);
    this.addReviewEaseOfUse = this.addReviewEaseOfUse.bind(this);
    this.addReviewRating = this.addReviewRating.bind(this);
    this.writeReview = this.writeReview.bind(this);
    this.changeProduct = this.changeProduct.bind(this);
  }

  componentDidMount() {
    // this.getAllReviews();
    this.getReviewsByProductID(this.state.productID);
  }

  getReviewsByProductID(state){
    console.log(111111)
    axios.get('./reviews', {
      params: {
        productID: state
      }
    })
    .then(reviews => {
      this.setState({
        reviews: reviews.data
      });
    })
    .catch(error => {
      console.log('Error retrieving reviews: ', error);
    })
  }

  getAllReviews() {
    axios.get('/reviews')
    .then(reviews => {
      this.setState({
        reviews: reviews.data
      });
      // console.log(this.state);
    })
    .catch(error => {
      console.log('Error retrieving reviews: ', error);
      console.log(error)
    })
  }

  writeReview(event) {
    event.preventDefault();
    axios.post('/reviews' , {
      productID: this.state.productID,
      reviewHeading: this.state.reviewHeading,
      reviewText: this.state.reviewText,
      reviewRating: this.state.reviewRating,
      reviewUsername: this.state.reviewUsername,
      reviewRecommended: this.state.reviewRecommended,
      reivewQuality: this.state.reviewQuality,
      reviewValue: this.state.reviewValue,
      reviewEaseOfUse: this.state.reviewEaseOfUse,
      reviewImages: this.state.reviewImages
    })
    .then(confirmation => {
      console.log('Review successfully posted: ', confirmation);
    })
    .catch(error => {
      console.log('Error posting review: ', error);
    })
  }

  addReviewPart(event) {
    let reviewPart = event.target.className
      this.setState({
        [reviewPart]: event.target.value
      });
  }

  addReviewQuality(rating) {
    this.setState({
      reviewQuality: rating
    })
  }

  addReviewValue(rating) {
    this.setState({
      reviewValue: rating
    })
  }

  addReviewEaseOfUse(rating) {
    this.setState({
      reviewEaseOfUse: rating
    })
  }
  addReviewRating(rating) {
    this.setState({
      reviewRating: rating
    })
  }

  changeProduct(event) {
    let newProductID = event.target.value;
    this.setState({
      productID: newProductID
    }, () => {
      this.getReviewsByProductID(this.state.productID)
    })
  }


  render() {

    return (
      <div>
        <input onChange={this.changeProduct} type='text'></input>
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
          <button onClick={() => console.log(this.state)}>Write Review</button>
        </div>
        <ReviewForm
          // review={this.state.addReview}
          addReviewPart={this.addReviewPart}
          reviewQuality = {this.addReviewQuality}
          reviewValue = {this.addReviewValue}
          reviewEaseOfUse = {this.addReviewEaseOfUse}
          reviewRating = {this.addReviewRating}
          writeReview = {this.writeReview}
        />
    </div>
    )
  }
}

  export default ReviewList
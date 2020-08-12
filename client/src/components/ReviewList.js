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
      reviewImages: [],
      reviewAvg: 0,
      reviewCounts: {}
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
    this.toggleReview = this.toggleReview.bind(this);
  }

  componentDidMount() {
    // this.getAllReviews();
    this.getReviewsByProductID(this.state.productID);
  }

  getReviewsByProductID(state){
    axios.get('./reviews', {
      params: {
        productID: state
      }
    })
    .then(reviews => {
      this.setState({
        reviews: reviews.data
      });
      return reviews;
    })
    .then(() => {
      var sum = 0
      var counts = {
        5: 0,
        4: 0,
        3: 0,
        2: 0,
        1: 0
      }
      this.state.reviews.forEach(review => {
        sum += review.reviewRating
        counts[review.reviewRating]++
      });

      for (var key in counts) {
        counts[key] = (counts[key] / this.state.reviews.length) * 100;
      }

      if (sum !== 0) {
        this.setState({
          reviewAvg: sum / this.state.reviews.length,
          reviewCounts: counts
        })
      } else {
        this.setState({
          reviewAvg: 0,
          reviewCounts: counts
        });
      }
      console.log(this.state)
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
      this.getReviewsByProductID(this.state.productID);
      // this.getAverageRating();
    })
  }

  toggleReview(event) {
    event.preventDefault();
    let reviewDiv = document.getElementById('writeReviewForm')
    if (reviewDiv.className === 'rw-hidden' || !reviewDiv.className ) {
      reviewDiv.className = 'rw-visible'
    } else {
      reviewDiv.className = 'rw-hidden'
    }
  }
  render() {

    return (
      <div>
        <input onChange={this.changeProduct} type='text'></input>
        <div className='reviewStats'>
          <div className = 'ratingSummary'>
            <RatingCountByStar
            reviewAvg = {this.state.reviewAvg}
            reviewCounts = {this.state.reviewCounts}
            />
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
                numberOfStars={5}
                name='rating'
                starDimension="20px"
                starSpacing="3px"
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
        <div style={{textAlign: 'center'}}>
          <button className='showReviewButtons show' >Show More</button>
          <button className ='showReviewButtons' onClick={this.toggleReview}>Write a Review</button>
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
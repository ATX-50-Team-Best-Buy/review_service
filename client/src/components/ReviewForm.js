import React from 'react';
import Rating from 'react-rating';
import '../styles/ReviewForm.css'


const ReviewForm = ( {review, addReviewPart, reviewQuality, reviewValue, reviewEaseOfUse, reviewRating, writeReview} ) => {

  return (
    <div>
      <div>
        Overall rating:
        <Rating className='reviewRating' onClick={reviewRating} />
      </div>
      <div>
        Summary
        <br></br>
        <input type="text" className='reviewHeading' onChange={addReviewPart}></input>
        <br></br>
        Example: Great Camera for beginners!
      </div>
      <br></br>
      <div>
        Your review
        <br></br>
        <textarea className='reviewText' onChange={addReviewPart}></textarea>
        <br></br>
        Minimum required characters: 50
      </div>
      <br></br>
      <div>
        Would you recommend this to a friend?
        <br></br>
        <input className='reviewRecommended' onChange={addReviewPart}type='radio' id='yes' name='recommended' value={true} ></input>
        <label htmlFor='yes'>Yes</label><br></br>
        <input className='reviewRecommended' onChange={addReviewPart} type='radio' id='no' name='recommended' value={false} ></input>
        <label htmlFor='no'>No</label><br></br>
      </div>
      <div>
        Help us break it down
        <br></br>
        Quality: <Rating onClick={reviewQuality} /> <br></br>
        Value: <Rating onClick={reviewValue} /> <br></br>
        Ease of Use: <Rating onClick={reviewEaseOfUse}/> <br></br>
      </div>
      <br></br>
      <div>
        Add a photo
        <br></br>
        <input type='file'></input>
      </div>
      <br></br>
      <div>
        Tell us a little about yourself.
        <br></br>
        Create a nickname
        <br></br>
        <input className='reviewUsername' type='text'onChange={addReviewPart}></input>
      </div>
      <button onClick={writeReview} className='submit'>Submit Review</button>

    </div>
    )
}

export default ReviewForm;
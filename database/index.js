const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bestbuy');
const mock = require('../reviewData.js');

const db = mongoose.connection;

db.on('error', console.error.bind('console', 'connection error:'));
db.once('open', () => {
console.log('hello');

  let productSchema = mongoose.Schema({
    uniqueID: Number,
    name: String,
    description: String,
    brand: String,
    department: String,
    color: String,
    subDept: String,
    sku: Number,
    price: Number,
    avgRating: Number,
    colors: [],
    reviews: [],
    questions: {
      question: String,
      answer: String
    },
    images: [],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: Boolean
})

  let Product = mongoose.model('Product', productSchema);



  let reviewSchema = mongoose.Schema({
    productID: Number,
    reviewHeading: String,
    reviewText: String,
    reviewUsername: String,
    reviewRating: Number,
    reviewRecommended: Boolean,
    reviewHelpful: Number,
    reviewUnhelpful: Number,
    reviewQuality: Number,
    reviewValue: Number,
    reviewEaseOfUse: Number,
    reviewImages: Array,
    reviewCreatedAt: Date
  })

  let Review = mongoose.model('Review', reviewSchema);

  let saveReviewToDB = (review) => {
    var product = new Review({
      productID: review.productID,
      reviewHeading: review.reviewHeading,
      reviewText: review.reviewText,
      reviewUsername: review.reviewUsername,
      reviewRating: review.reviewRating,
      reviewRecommended: review.reviewRecommended,
      reviewHelpful: review.reviewHelpful,
      reviewUnhelpful: review.reviewUnhelpful,
      reviewQuality: review.reviewQuality,
      reviewValue: review.reviewValue,
      reviewEaseOfUse: review.reviewEaseOfUse,
      reviewImages: review.reviewImages,
      // reviewCreatedAt: review.createdAt
    });
   return product.save();
    console.log('CREATED: ', review.productID)
  }

  // let saveToDB = (model) => {
  //   var product = new Product({
  //     uniqueID: model.uniqueID,
  //     name: model.name,
  //     description: model.description,
  //     brand: model.brand,
  //     department: model.department,
  //     color: model.color,
  //     subDept: model.subDept,
  //     sku: model.sku,
  //     price: model.price,
  //     avgRating: model.avgRating,
  //     colors: [],
  //     reviews: [],
  //     questions: {
  //       question: model.questions.question,
  //       answer: model.questions.answer
  //     },
  //     images: [],
  //     peopleAlsoBought: [],
  //     peopleAlsoViewed: [],
  //     recentlyViewed: model.recentlyViewed
  //   });
  //   product.save();
  //   console.log('CREATED: ', model.uniqueID)
  // }

  let getAllReviews = () =>{
    return Review.find()
  }

  let getReviewsByProductID = (query) =>{
    return Review.find(query)
  }

  // let writeReview = (review => {
  //   let newReview = new Review({
  //     productID: review.productID,
  //     reviewText: review.reviewText,
  //     reviewRating: review.rating,
  //     reviewRecommended: review.Recommended,
  //     reviewHelpful: review.helpful,
  //     reviewUnhelpful: review.unhelpful,
  //     reviewQuality: review.quality,
  //     reviewValue: review.value,
  //     reviewEaseOfUse: review.easeOfUse,
  //     reviewCreatedAt: review.createdAt
  //   })
  //   return newReview.save();
  // })
  // mock.data.map(item => {
  //   saveReviewToDB(item);
  // })

  // module.exports.seed = seed;
  module.exports.productSchema = productSchema;
  module.exports.Product = Product;
  module.exports.getAllReviews = getAllReviews;
  module.exports.saveReviewToDB = saveReviewToDB;
  module.exports.getReviewsByProductID = getReviewsByProductID;
})
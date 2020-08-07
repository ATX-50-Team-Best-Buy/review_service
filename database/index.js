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
    uniqueID: Number,
    reviewText: String,
    rating: Number,
    recommended: Boolean,
    helpful: Number,
    unhelpful: Number,
    quality: Number,
    value: Number,
    easeOfUse: Number,
    createdAt: Date
  })

  let Review = mongoose.model('Review', reviewSchema);

  let saveReviewToDB = (review) => {
    var product = new Review({
      uniqueID: review.uniqueID,
      reviewText: review.reviewText,
      rating: review.rating,
      recommended: review.Recommended,
      helpful: review.helpful,
      unhelpful: review.unhelpful,
      quality: review.quality,
      value: review.value,
      easeOfUse: review.easeOfUse,
      createdAt: review.createdAt
    });
    product.save();
    console.log('CREATED: ', review.uniqueID)
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

  // mock.data.map(item => {
  //   saveReviewToDB(item);
  // })

  // module.exports.seed = seed;
  module.exports.productSchema = productSchema;
  module.exports.Product = Product;
  module.exports.getAllReviews = getAllReviews;
})
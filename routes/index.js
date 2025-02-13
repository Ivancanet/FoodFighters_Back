const express = require('express');
const app = require('../app');
const router = express.Router();
const Admin = require('../models/Admin');
const Restaurant = require('../models/Restaurants');
const Wines = require('../models/Wines');
const Posts = require('../models/Posts');

//#region Home Page

// Get of Home Page
router.get('/', (req, res, next) => {
  res.send('Home')
});

//#endregion

//Create posts

router.post('/post/create', (req, res, next) => {
  const post = req.body;
  Posts.create(post)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    })
})


//#region Blog Page

router.get('/foodie', (req,res,next)=>{
  Posts.find({type: 'foodie'})
  .then((foodies)=>{
    res.send(foodies)
  })
  .catch((err)=>{
    res.send(err);
  });

});

//#endregion

//#region Restaurants Page

//View all restaurants
router.get('/restaurants', (req,res,next) =>{
  Restaurant.find({})
  .then((restaurants)=>{
    res.send(restaurants);
  })
  .catch((err)=>{
    res.send(err);
  });
});

//Create a restaurant
router.post('/restaurant-create', (req, res, next) => {
  const restaurant = req.body;
  Restaurant.create(restaurant)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    })
})

//#endregion

//#region Wines Page

//View all Wines
router.get('/wines', (req, res, next) => {
  Wines.find({})
    .then((wines) => {
      res.send(wines);
    })
    .catch((err) => {
      res.send(err);
    });
});



//Create a Wine
router.post('/wines/create', (req, res, next) => {
  const wine = req.body;
  console.log(wine);
  Wines.create(wine)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    })
})


//#endregion

//#region Formations Page

router.get('/formation', (req,res,next)=>{
  Posts.find({type: 'formation'})
  .then((formations)=>{
    res.send(formations);
  })
  .catch((err)=>{
    res.send(err);
  });

});
//#endregion

//#region Experiencies Page

router.get('/experiencie', (req,res,next)=>{
  Posts.find({type: 'experiencie'})
  .then((experiencies)=>{
    res.send(experiencies);
  })
  .catch((err)=>{
    res.send(err);
  });

});

//#endregion

//#region About us Page
router.post('/post', (req, res, next) => {
  const id = req.body.id;
  console.log(id);
  Posts.findById(id)
    .then((posts) => {
      res.send(posts);
    })
    .catch((err) => {
      res.send(err);
    });
});
//#endregion

//#region Contact Page

//#endregion




module.exports = router;

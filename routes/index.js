const express = require('express');
const app = require('../app');
const router = express.Router();
const Admin = require('../models/Admin');
const Wines = require('../models/Wines');

//#region Home Page

// Get of Home Page
router.get('/', (req, res, next) => {
  res.send('Home')
});

//#endregion

//#region Blog Page

//#endregion

//#region Restaurants Page

//#endregion

//#region Wines Page

//Create a Wine
router.post('/wine-create', (req, res, next) => {
  const wine = req.body;
  Wines.create(wine)
  .then((result)=>{
    res.send(result);
  })
  .catch((err)=>{
    res.send(err);
  })
})


//#endregion

//#region Formations Page

//#endregion

//#region Experiencies Page

//#endregion

//#region About us Page

//#endregion

//#region Contact Page

//#endregion




module.exports = router;

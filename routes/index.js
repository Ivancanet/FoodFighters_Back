const express = require('express');
const app = require('../app');
const router = express.Router();
const Admin = require('../models/Admin');

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

//#endregion

//#region Formations Page

//#endregion

//#region Experiencies Page

//#endregion

//#region About us Page

//#endregion

//#region Contact Page

//#endregion

//#region Admin Page (Log In)

router.post('/admin', (req, res, next) => {

  const { username, password } = req.body;

  /* Test -->  */ //res.send(`Username: ${username}, Password: ${password}`);

  Admin.findOne({ username })
    .then((result => {

      if (result){
        password === result.password ? res.send('Loggged In') : res.send('Incorrect Password')
      }
      
      
    }))
    .catch((err) => {
      res.send(err);
    })
})

//#endregion



//#region Create admins (Only developer)

//Post to create admins

router.post('/new-user', (req, res, next) => {
  Admin.create(req.body)
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.send(err)
    });

});

//#endregion

module.exports = router;

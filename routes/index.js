const express = require('express');
const router = express.Router();

const isAuthenticated = (req, res, next) => {
  if (req.session.isAuthenticated) {
    next();
  } else {

    res.redirect('/')
  }

}
router.get('/', isAuthenticated, function (req, res,) {

  let product=[
    {
      brand:"Van Heusen",
      name:"Men Sweatshirt",
      price:"₹849",
      image:"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71eDe5I+B-L._AC_UL480_FMwebp_QL65_.jpg",
      
    },
    {
      brand:"DAMENSCH",
      name:"Sweatshirt",
      image:"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71ExHfuQKqL._AC_UL480_FMwebp_QL65_.jpg",
      price:"₹1,506",
      
    },
    {
      brand:"Allen Solly",
      name:"Sweatshirt",
      image:"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71nkap6IJ2L._AC_UL480_FMwebp_QL65_.jpg",
      price:"₹819",
      
    },
    {
      brand:"LEOTUDE",
      name:"Sweatshirt",
      image:"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/6185LCNxqUL._AC_UL480_FMwebp_QL65_.jpg",
      price:"₹349",
      
    },
    {
      brand:"Van Heusen",
      name:"Sweatshirt",
      discription:"",
      image:"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Dz6Obc9SL._AC_UL480_FMwebp_QL65_.jpg",
      price:"₹1,329",
      
    },
    {
      brand:"Allen Solly",
      name:"Sweatshirt",
      image:"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51aR4MSBLXL._AC_UL480_FMwebp_QL65_.jpg",
      price:"₹949",
      
    },
    {
      brand:"EYEBOGLER",
      name:"Sweatshirt",
      image:"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/512b9uw5P0L._AC_UL480_FMwebp_QL65_.jpg",
      price:"₹389 ",
      
    },
    {
      brand:"The Indian Garage Co",
      name:"Sweatshirt",
      image:"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61h4SHk39kL._AC_UL480_FMwebp_QL65_.jpg",
      price:"₹599 ",
      
    }
  ]

  res.render('index', {product,user});
});

const user = 'john';
const pass = '123';
console.log(user)
router.post('/', (req, res) => {
  const { userName, password } = req.body;
  if (userName === user && password === pass) {

    req.session.isAuthenticated = true
    res.redirect('/index');
  } else {
    res.render('./login', { error: 'ERROR' })
   
  }
});






module.exports = router;

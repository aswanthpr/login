const express = require('express');
const router = express.Router();



const Authenticated = (req,res,next) => {
    if(req.session.isAuthenticated){
     res.redirect('/index')
    }
   else{
    next();
   }
}
router.get('/', Authenticated,function(req, res, next) {
   res.render('login', { title: 'Login' });
});


 
 


module.exports = router;

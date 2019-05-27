module.exports = (app) => {
   app.get('/home', (req, res, next) => {
      res.render('home');
   });
   app.get('/product', (req, res, next) => {
      res.render('product');
   });
   app.get('/contact', (req, res, next) => {
      res.render('contact');
   });
   app.get('/test', (req, res, next) => {
      res.render('test');
      // res.send();
      // console.log("Hej")
   });
};


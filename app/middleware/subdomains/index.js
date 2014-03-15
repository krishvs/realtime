var User = require('clayjs').db.User
  , app = require('clayjs').app;

function execute(app)
{
 console.log('I am going to execute the subdomain handler '); 
 app.use(function(req,res,next)
  {
    var subdomains = req.subdomains
    var url = '';
    console.log('I am in the subdomain middleware');
    if(subdomains.length>0){
      subdomains.forEach(function(subdomain)
      {
        url = url+'/'+subdomain;
      });
      url = url+req.originalUrl;
      req.url = url;
      console.log('The value of hte url is '+req.url);
    }
    next();
  });
}

module.exports.execute = execute;
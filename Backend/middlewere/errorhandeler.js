const errorhandler =( err,req,res,next ) => {
    const statuscode = res.statusCode;
   res.json({messege : err.message, stack : err.stack }); 
}

module.exports = errorhandler;
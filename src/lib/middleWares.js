let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "https://my-app-chi-inky.vercel.app");
    res.header('Access-Control-Allow-Headers', "*");
    next();
}


module.exports = {
    allowCrossDomain
}
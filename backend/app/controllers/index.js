
var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.home = async function (req, res) {
    try {
    sendJsonResponse(res,200,{message:"Server is up..."})
    }
    catch(err) {
        sendJsonResponse(res,400,err)
    }

}
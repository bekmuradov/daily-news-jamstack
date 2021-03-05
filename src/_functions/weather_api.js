const axios = require("axios");

exports.handler = async function(event, context, callback) {

  const { lat, lon } = event.queryStringParameters;
  const url = `https://api.airvisual.com/v2/nearest_city?lat=${latitude}&lon=${longitude}&key=${process.env.AIR_API_KEY}`;

  const response = await axios.get(url);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(response.data)
  });

}
const axios = require('axios')
const countries = require('./countries.json')
require('dotenv').config()


module.exports = async function() {
    try {
        const res = await axios.get(`https://gnews.io/api/v4/top-headlines?country=us&max=6&token=${process.env.GNEWS_API_KEY}`)
        return res.data
    } catch (err) {
        console.error(err)
    }
}
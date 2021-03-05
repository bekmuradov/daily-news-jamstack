const axios = require("axios");
const countries = require("./countries.json");
require("dotenv").config();

async function getNews(country) {
  try {
    // const res = await axios.get(
    //   `https://gnews.io/api/v4/top-headlines?country=${country}&max=6&token=${process.env.GNEWS_API_KEY}`
    // );
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.NEWS_API_KEY}`
    )
    return {
      country: country,
      articles: res.data.articles,
    };
  } catch (err) {
    console.error(err);
  }
}

module.exports = async function () {
  let newsPromises = countries.map(getNews);
  return Promise.all(newsPromises).then((newsObjects) => {
    return [].concat.apply([], newsObjects);
  });
};

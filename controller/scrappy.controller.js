const openai = require("../config/openai.js");

const cheerio = require("cheerio");

const axios = require("axios");

exports.convertToKeywords = async (req, res) => {
  try {
    const response = await axios.get("https://nuxtjs.org");

    const keywords = await completion(getParsedHtmlAsText(response.data));

    res.send(keywords);
  } catch (error) {
    res.send(error.response);
  }
};

async function completion(data) {
  const options = {
    model: "text-davinci-002",
    prompt: `Create keywords for SEO from ${data}`,
  };

  try {
    const response = await openai.createCompletion(options);
    return response.data;
  } catch (error) {
    throw error;
  }
}

function getParsedHtmlAsText(html) {
  const $ = cheerio.load(html);
  const data = $("heading").text();
  return data;
}

const openai = require("../config/openai.js");

const cheerio = require("cheerio");

const axios = require("axios");

exports.convertToKeywords = async (req, res) => {
  const { website, tag } = req.body;

  try {
    const response = await axios.get(`${website}`);

    const keywords = await completion(getParsedHtmlAsText(response.data, tag));

    res.send(keywords);
  } catch (error) {
    res.send(error.response.data);
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

function getParsedHtmlAsText(html, tag) {
  const $ = cheerio.load(html);
  const data = $(`${tag}`).text();
  return data;
}

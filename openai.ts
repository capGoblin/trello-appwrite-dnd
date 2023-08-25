import OpenAIApi from "openai";
import Configuration from "openai";
const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY,
});
const openai = new OpenAIApi(configuration);


export default openai;
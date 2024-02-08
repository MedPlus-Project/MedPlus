const OpenAI = require("openai");
const OPENAI_API_KEY = process.env.OPENAI_SECRET_KEY;
const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

async function callOpenAI(userInput) {
  const userInputString = JSON.stringify(userInput);
  try {
    const systemMessage =
      "This is a medical support application. Here, we offer a feature to collect users' basic medical data and provide advice. Below is the user's data for your analysis:\n\n" +
      "Please provide analysis in the following JSON format:\n\n" +
      "{\n" +
      '  "status": "Critical",\n' +
      '  "analysis": ["Analysis line1"],\n' +
      '  "metrics": {\n' +
      '    "measurement1": { "label": "Sugar Level", "value": "", "status": "" },\n' +
      '    "measurement2": { "label": "", "value": "", "status": "" },\n' +
      '    "measurement3": { "label": "", "value": "", "status": "" }\n' +
      "  },\n" +
      '  "tips": ["your health tips"]\n' +
      "}\n\n" +
      "for Status , Provide overall health status of the user. one of these two Critical or Normal " +
      "Do the analysis and give tips only on provided data. (for ex: if only sugar level provided talk only about that, Give insights on all fields user provided .(colosterol,sugar,blood pressure)" +
      "The 'analysis' section should contain comparative medical data. For example, if the sugar level is within the normal range, provide insight into blood pressure, and so forth. Keep the analysis concise, preferably within 3 lines, making it understandable even for individuals without a medical background. Please address the user directly, such as 'your sugar level,' rather than 'the user's sugar level. tell if user needs to meet a doctor'\n\n" +
      "The 'tips' section should consist of healthy advice, regardless of the user's health condition. Include up to a maximum of 3 tips aimed at maintaining overall health.\n\n" +
      "Ensure the accuracy of the metrics provided. Only return measurement items for the measurements provided by the user ,seperate varities of blood sugar messurements into two items  , if any of these are critical include that in analysis. Dont return items or just labels if value is not given , create appropriate labels for measurements\n\n" +
      "Please note: Users' medical data should be accurately represented." +
      "If user has provided data addtional to what i have mentioned (like colesterol). try to give analysis on those. and if messurement avalible create the matrics also . with values and label" +
      "Dont return dummy values that i have provided ,like label2,label3, if any of those empty avoid creating that measurement field. Return only the JSON string and nothing else.";
    const prompt = `${systemMessage}\n\nUser's medical Data: ${userInputString}`;
    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [{ role: "system", content: prompt }],
    });
    return completion.choices[0].message.content;
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    throw error;
  }
}

module.exports = { callOpenAI };

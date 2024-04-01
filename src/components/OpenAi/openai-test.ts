import OpenAI from "openai";
const openai = new OpenAI({apiKey:'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',dangerouslyAllowBrowser: true});

async function searching(question:string) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "Ask any question am willing to help." }, {
          role: "user",
          content: question,
        },],
    model: "gpt-3.5-turbo",
  });

  return({message:completion.choices[0].message.content});
}

export default searching;
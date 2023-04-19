export const arrayItems = [
  {
    name: 'Explain code',
    id: 'ExpCode',
    description: 'Explain a complicated piece of code.',
    option: {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 150,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["\"\"\""],
    }
  },
  {
    name: 'Translate programming languages',
    id: 'TransToPL',
    description: 'To translate from one programming language to another we can use the comments to specify the source and target languages.',
    option: {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 150,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["###"],
    }
  },
  {
    name: 'Python to natural language',
    id: 'pyToNL',
    description: 'Explain a piece of Python code in human understandable language.',
    option: {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 150,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    }
  },
  {
    name: 'Python bug fixer',
    id: 'PyBug',
    description: "There's a number of ways of structuring the prompt for checking for bugs. Here we add a comment suggesting that source code is buggy, and then ask codex to generate a fixed code.",
    option: {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 182,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["###"],
    }
  },
  {
    name: 'JavaScript helper chatbot',
    id: 'jsHelper',
    description: 'This is a message-style chatbot that can answer questions about using JavaScript. It uses a few examples to get the conversation started.',
    option: {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 150,
      top_p: 1.0,
      frequency_penalty: 0.5,
      presence_penalty: 0.0,
      stop: ["You:"],
    }
  },
  {
    name: 'JavaScript to Python',
    id: 'jsToPy',
    description: 'Convert simple JavaScript expressions into Python.',
    option: {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    }
  },
  {
    name: 'JavaScript one line function',
    id: 'jsOneLine',
    description: 'Turn a JavaScript function into a one liner.',
    option: {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: [";"],
    }
  },
  {
    name: 'Calculate Time Complexity',
    id: 'calTC',
    description: 'Find the time complexity of a function.',
    option: {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["\n"],
    }
  },
  {
    name: 'Interview questions',
    id: 'interviewQues',
    description: 'Create interview questions.',
    option: {
      model: "text-davinci-003",
      temperature: 0.5,
      max_tokens: 150,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    }
  },
]
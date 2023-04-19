import './App.css';
import { Configuration, OpenAIApi } from 'openai';
import OptionSelection from './components/OptionSelection';
import MainPage from './components/MainPage';
import { arrayItems } from './All_Tools';
import { useState } from 'react';


function App() {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });
  const openai = new OpenAIApi(configuration);

  const [option, setOption] = useState({});
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [home, setHome] = useState(true);

  const selectOption = (option) => {
    setOption(option);
  }

  const btnClick = async () => {
    let obj = {...option, prompt: input};
    console.log(obj);
    const response = await openai.createCompletion(obj);
    setResult(response.data.choices[0].text);
  };
  const homePage = (val) => {
    setHome(val);
  }
  return (
    <div className="App">
      {home ? (<OptionSelection arrayItems={arrayItems} selectOption={selectOption} homePage={homePage}/>) :
              (<MainPage btnClick={btnClick} setInput={setInput} result={result} homePage={homePage}/>)}
    </div>
  );
}

export default App;



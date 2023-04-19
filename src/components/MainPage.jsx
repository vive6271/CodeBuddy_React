import React from "react";

export default function MainPage({btnClick, setInput, result, homePage}) {
    return (
        <div className="mainPage">
            <div className="homeBtn" onClick={() => homePage(true)}>
                <h1 className="heading">CodeBuddy <span>Powered by OpenAI</span></h1>
            </div>
            <div className="form">
                <textarea className="textArea" placeholder="Enter Your Question" onChange={(e) => setInput(e.target.value)}></textarea>
                <h3 className="resultText">{result.length > 0 ? result : "Output"}</h3>
            </div>
            <button className="actionBtn" onClick={() => btnClick()}>Send</button>
        </div>
    )
}

/*


*/
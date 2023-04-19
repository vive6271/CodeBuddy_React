import React from "react";

export default function OptionSelection({arrayItems, selectOption, homePage}) {
    return (
        <div className="option">
          <h1 className="heading">CodeBuddy <span>Powered by OpenAI</span></h1>
          <div className="gridOption" onClick={() => homePage(false)}>
            {arrayItems.map((item) => {
              return (
                <div className="gridChild"
                  onClick={() => selectOption(item.option)}
                >
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                </div>
              );
            })}
          </div>     
        </div>
    );
}
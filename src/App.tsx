import React from 'react';
import './App.css';
import {Question} from "./models";
import MultiAnswerQuestion from "./MultiAnswerQuestion";
import OneAnswerQuestion from "./OneAnswerQuestion";
import CustomQuestion from "./CustomQuestion";

function App() {
    const question1 = new Question("Choose a number", ["1", "458", "87454"], [1, 0]);
    const question2 = new Question("Choose a number", ["14", "48", "854"], [1, 0]);
    const question3 = new Question("Choose a number", ["144", "484", "8544"], [1, 0]);
    return (
        <div className="container">

            <div className="col-4 offset-5">
                <MultiAnswerQuestion question={question1}/>
                <OneAnswerQuestion question={question2}/>
                <CustomQuestion question={question3}/>
            </div>
        </div>
    );
}

export default App;

import { Button } from "@material-ui/core";
import { useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import './Question.css'

function Question({currQues, setCurrQues,questions, options, correct, score, setScore, setQuestions }) {


    const [selected, setSelected] = useState()
    const [error, setError] = useState(false)

    function handleSelect(item){
        if (selected === item && selected === correct){
            return "select"
        }
        else if (selected === item && selected !== correct){
            return "wrong"
        }else if (item === correct){
            return "select"
        }
    }
    function handleCheck(item){
        setSelected(item)
        if(item === correct) setScore(score +1)
        setError(false)
    }
    return(
        <div className="question">
            <h1>Question {currQues +1}</h1>
            <div className="singleQuestion">
                <h2>{questions[currQues].question}</h2>

                <div className="options">
                {error && <ErrorMessage>Please fill all the fields</ErrorMessage>}
                    {options && options.map((item) => 
                    <button onClick={handleCheck} className={`singleOption ${selected && handleSelect(item)}`} key={item} disabled={selected}>{item}</button>)}
                
                </div>
                <div className="controls">
                    <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    style={{width: 185}}
                    href="/"
                    >Quit</Button>
                    <Button
                     variant="contained"
                     color="primary"
                     size="large"
                    >Next Question</Button>
                </div>
            </div>
        </div>
    )
}

export default Question;

import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import Question from "../../Question/Question";
import './Quiz.css'

function Quiz ({name, score, questions, setQuestions, setScore}){
    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0)
    //currQues is to be set to zero 
    
    useEffect(() => {
      setOptions(
        questions &&
          handleShuffle([
            questions[currQues]?.correct_answer,
            ...questions[currQues]?.incorrect_answers,
          ])
      );
    }, [currQues, questions]);

    function handleShuffle (options) {
      return options.sort(() => Math.random() - 0.5);
    };



    return(
        <div className="quiz">
            
            <span className="subtitle">Welcome, {name}</span>

            {questions ? (
        <>
          <div className="quizInfo">
            <span>{questions[currQues].category}</span>
            <span>
              {/* {questions[currQues].difficulty} */}
              Score : {score}
              
            </span>
          </div>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}

             {/* <div> {questions && questions?.map((item) => (
              // <h1> {item.catego ry}</h1>
              <div  style={{paddingLeft: "20px"}} >
                <ul>

                
                  
            Options: {item.incorrect_answers.map((inc) => (
                <li>
<button>{inc}</button>
{console.log(inc, "hey")}
</li>
            ) )}
                </ul>
              <h6>Answers: {item.correct_answer}</h6>
</div>
            ) )}</div> */}
           
        </div>
    )
}
export default Quiz;
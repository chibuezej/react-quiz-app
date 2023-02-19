import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import Question from "../../Question/Question";
import './Quiz.css'

function Quiz ({name, score, questions, setQuestions, setScore}){
    const [options, setOptions] = useState([]);
    const [currQues, setCurrQues] = useState(0)
    //currQues is to be set to zero 
    

    

    useEffect(() => {
      
       //not getting my options  
        setOptions(questions && 
          handleShuffle([questions[currQues]?.correct_answer,
            ...questions[currQues]?.incorect_answers]))
        
    }, [questions])
console.log(options)
//i.e when i console log my options 
    


    function handleShuffle(optionss){
        return optionss.sort(() => Math.random() - 0.5)
    }


    return(
        <div>
            
            <span className="subtitle">Welcome, {name}</span>
           
        </div>
    )
}
export default Quiz;
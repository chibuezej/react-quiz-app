
import { useEffect, useState } from "react";
import './Quiz.css'

function Quiz ({name, score, questions, setQuestions, setScore}){
    const [options, setOptions] = useState([]);
    const [currQues, setCurrQues] = useState(0)
    //currQues is to be set to zero 
    

    

    // useEffect(() => {

    //   // setOptions(questions && 
    //   //   handleShuffle([...questions]))
    //   // handleShuffle([questions[currQues]?.correct_answer,
    //   //   ...questions[currQues]?.incorect_answers]))
    
      
    //    //not getting my options  
    //     setOptions(questions && 
    //       handleShuffle([questions[currQues]?.correct_answer,
    //         ...questions[currQues]?.incorect_answers]))
        
    // }, [questions])
// console.log(options, "options")
console.log(questions, "questions")
//i.e when i console log my options 
    


    function handleShuffle(optionss){
      console.log(questions.sort(() => Math.random() - 0.5))

        // console.log(optionss.sort(() => Math.random() - 0.5), "random")
    }


// handleShuffle([...questions])

    return(
        <div>
            
            <span className="subtitle">Welcome, {name}</span>

             <div> {questions && questions?.map((item) => (
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
            ) )}</div>
           
        </div>
    )
}
export default Quiz;
import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Categories from "../../Data/Categories";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import "./Home.css"

function Home({name, setName, fetchQuestions}){
    const [category, setCategory] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()
    

    function handleSubmit(){
        if(!category||!difficulty||!name) {
            setError(true);
            return;
        } 
        else{
            setError(false)
            fetchQuestions(category, difficulty);
            navigate("/quiz")
        }
    }

    return(
        <div className="content">
           <div className="settings">
            <span style={{fontSize: 30}}>Quiz settings</span>
            </div> 
            <div className="settings_select">

            {error && <ErrorMessage>Please fill all the fields</ErrorMessage>}

                <TextField 
                style={{marginBottom: 25}} 
                label="Enter your Name" 
                variant="outlined"
                onChange={(e) => setName(e.target.value)} 
                value={name}
                />
                <TextField 
                select
                variant="outlined"
                style={{marginBottom: 30}}
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                >
                    {Categories.map((cat) => (
                        <MenuItem key={cat.category} value={cat.value}>
                            {cat.category}
                            </MenuItem>
                    ))}
                    
                </TextField>
                <TextField 
                select
                label="Select Difficulty"
                variant="outlined"
                style={{marginBottom: 30}}
                onChange={(e) => setDifficulty(e.target.value)}
               value={difficulty}
                >
                    <MenuItem key="Easy" value="Easy">Easy</MenuItem>
                    <MenuItem key="Meduium" value="Medium">Medium</MenuItem>
                    <MenuItem key="Hard" value="Hard">Hard</MenuItem>

                   
                   

                </TextField>
                <Button variant="contained" color="primary" size="large" onClick={handleSubmit}>Start Quiz</Button>
            </div>
            <img src="/quiz.svg" className="banner" alt="quiz app"/>
        </div>
    )
}
export default Home;
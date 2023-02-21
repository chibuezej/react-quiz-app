import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Result.css"

function Result ({name, score}){
    const navigate = useNavigate()

    useEffect(() => {
    if(!name){
        navigate("/");
    }
    },[name, score])

    return(

        <div className="result">
            
            <span className="title">Final score: {score}</span>
            <Button 
            variant="contained"
            color="secondary"
            size="large"
            style={{alignSelf: "center", marginTop: 20}}
          
            ><Link to="/">Go to Home page</Link></Button>
        </div>
    )
}

export default Result;
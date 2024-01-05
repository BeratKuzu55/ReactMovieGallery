import React from "react";

function Appbar(props){

    
    const appBarStyle = {
        margin : 0 , 
        color : "white" ,  
        height : 75 , 
    }
    return(
        <>
        <div className="appBarClass" style={appBarStyle}>
            <h1
            onClick={props.enbMoviesum}
            >Movie Sum</h1>
            <div>
                <h2 
                onClick={props.route}
                >About Me</h2>
                
            </div>
        </div>


        </>
    )
}
export default Appbar;

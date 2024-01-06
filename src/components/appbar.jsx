import React from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useState } from "react";
function Appbar(props){

    const [isRotated, setIsRotated] = useState(false);

    const handleIconClick = () => {
        setIsRotated(!isRotated);
        if(!isRotated)
        {
            document.body.style.backgroundColor = "#7c7c7c";
        }
        else {
            document.body.style.backgroundColor = "#F3F2F2";
        }
        
    };
    const appBarStyle = {
        margin : 0 , 
        background : "white" ,  
        height : 75 , 
    }

    const appBarStyleDark = {
        margin : 0 ,   
        height : 75 ,
        background: "#484848", 
    }
    return(
        <>
        <div className={'appBarClass'} style={!isRotated ? appBarStyle : appBarStyleDark}>
            <h1
            onClick={props.enbMoviesum}
            >Movie Sum</h1>
            <div>
                <h2 
                onClick={props.route}
                >About Me</h2>

            </div>

        <DarkModeIcon
            className={isRotated ? 'rotate-icon' : 'darkicon'}
            onClick = {handleIconClick}
        ></DarkModeIcon>
        </div>

        </>
    )
}
export default Appbar;

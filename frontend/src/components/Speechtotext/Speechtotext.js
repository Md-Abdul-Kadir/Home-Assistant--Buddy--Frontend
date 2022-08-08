import React from 'react';
import mic from '../../images/mic.png'
import Fab from '@mui/material/Fab';
import { pink } from '@mui/material/colors';
import './SpeechtoText.css'


const Pink = pink[500];

const Speechtotext = () => {
    

    return (
        <div className="mb-5">

            
            <Fab sx={{marginTop:"35px"}} color={Pink} aria-label="SpeechIcon">

</Fab>
            <Fab color={Pink} aria-label="SpeechIcon" >

                <img className="speechIcon" src={mic} alt="" />
                
            </Fab>

            <h5 className="marginExtra text-light">Please Command your buddy</h5>

            
            
           

        </div>
    );
};

export default Speechtotext;
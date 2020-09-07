import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

function WorkHoursSlider() {
    return (
        <> 
        <Typography id='discrete-slider-small-steps' gutterBottom>
          Arbeitsstunden/Woche
        </Typography>
        <Slider
          defaultValue={40}
        //   getAriaValueText='Arbeitsstunden'
          aria-labelledby='discrete-slider-small-steps'
          step={1}
          min={1}
          max={80}
          valueLabelDisplay='auto'
        />
        </>
             );
  }
  
  export default WorkHoursSlider;
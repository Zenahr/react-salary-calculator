import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

function WorkHoursSlider() {
    return (
        <> 
        <Typography id='discrete-slider-small-steps' gutterBottom>
          Small steps
        </Typography>
        <Slider
          defaultValue={0.00000005}
        //   getAriaValueText='Arbeitsstunden'
          aria-labelledby='discrete-slider-small-steps'
          step={10.0}
          min={0.0}
          max={6000.0}
          valueLabelDisplay='auto'
        />
        </>
             );
  }
  
  export default WorkHoursSlider;
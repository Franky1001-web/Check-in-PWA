import React from 'react'
import { TextField } from "@material-ui/core"
import {
  withStyles,
} from '@material-ui/core/styles';


function BoxInput({ label, ...rest }) {
  const CustomTextField = withStyles({
    root: {
      '& input:valid + fieldset': {
        borderColor: 'white',
        borderWidth: 2,
      },
      '& input:invalid + fieldset': {
        borderColor: 'white',
        borderWidth: 2,
      },
      '& input:valid:focus + fieldset': {
        borderWidth: 4,
        padding: '4px !important', // override inline-style
      },
      width: "60px"
    },
  })(TextField);
  return (
    <div>
      <CustomTextField
        variant="outlined"
        label={label}
        {...rest}
      />
    </div>
  )
}

export default BoxInput

import React from 'react'
import { TextField } from "@material-ui/core"
import {
  withStyles,
} from '@material-ui/core/styles';


function Basic({ label, onChange, ...rest }) {
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
        borderLeftWidth: 6,
        padding: '4px !important', // override inline-style
      }
    },
  })(TextField);
  return (
    <div>
      <TextField
        variant="outlined"
        label={label}
        onChange={onChange}
        {...rest}
      />
    </div>
  )
}

export default Basic

import React from 'react'
import { TextField } from "@material-ui/core"
import {
  withStyles,
} from '@material-ui/core/styles';



function BoxInput({ isAutofocus,ref1,ref2,label, ...rest }) {
  const CustomTextField = withStyles({
    root: {
      '& input': {
        color: 'white',
        fontSize: "1.3em",
        textAlign: "center",
      },
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
        inputRef={ref1}
        inputProps={{maxLength: 1},{
          onKeyPress: event => {
            const { key } = event;
            console.log(key);
            if (key === "Enter") {
              ref2.current.focus();
            }
          }}}
        autoFocus={isAutofocus}
        {...rest}
      />
    </div>
  )
}

export default BoxInput

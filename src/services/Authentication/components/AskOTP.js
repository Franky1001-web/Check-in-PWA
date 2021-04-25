import React, {useState} from 'react'
import { Grid } from "@material-ui/core"
import { connect } from "react-redux"

import BoxInput from "../../../shared/components/TextInput/BoxInput"
import Button from "../../../shared/components/Button/Basic"
import { _set_state } from '../middleware'



function AskOTP(props) {
  const { setState } = props
  const handleVerify = () => {
    setState({
      askingProfileDetails: true,
      askingContact: false,
      askingOTP: false
    })
  }

  return (
    <div>
      <Grid spacing={1} container >
        <Grid item xs={1} >

        </Grid>
        <Grid item xs={10} >
          <Grid spacing={3} container >
            <Grid item xs={12} >
              <div style={{ fontSize: 20, textAlign: "left" }} ><span style={{ fontWeight: 100 }}>OTP sent to </span>9997867899</div>
            </Grid>
            <Grid item xs={12} >
              <Grid spacing={3} container >
                 <Grid className="text-left" item xs={3} >
                  <BoxInput isAutofocus={true} />
                </Grid>
                <Grid className="text-left" item xs={3} >
                  <BoxInput   />
                </Grid>
                <Grid className="text-left" item xs={3} >
                  <BoxInput  />
                </Grid>
                <Grid className="text-left" item xs={3} >
                  <BoxInput  />
                </Grid> 
              </Grid>
            </Grid>
            <Grid item xs={12} >
              <Button
                fullWidth
                onClick={handleVerify}
                style={{ textTransform: 'uppercase', color: '#ff5656' }}              >
                Verify
          </Button>
            </Grid>
            <Grid item xs={14} >
              <div style={{ fontWeight: 400, fontSize: 12 }} >
                Didn’t recieve the verification OTP? <a className="a-tag" href="#" >Resend Again</a>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={0} >

        </Grid>
      </Grid>
      <br />

    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    state: state.authentication.signup
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setState: (obj) => dispatch(_set_state(obj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AskOTP)
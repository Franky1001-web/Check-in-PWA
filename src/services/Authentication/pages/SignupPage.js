import React from 'react'
import { connect } from "react-redux"
import { Grid, Paper, Hidden } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

import MarketImage from "../../../assets/authentication/market.png"
import Logo from "../../../assets/authentication/logo.png"
import WaveShapeImage from "../../../assets/authentication/path_2.jpg"
import BottomDisplay from "../../../assets/authentication/bottomdisplay.jpg"


import { useSelector } from "react-redux"
import AskContact from '../components/AskContact'
import AskOTP from '../components/AskOTP'
import AskProfileDetails from '../components/AskProfileDetails'
import LandingPage from '../components/LandingPage'
import { _authenticate_via_number } from '../middleware';

function SignupPage(props) {

  const { state } = props

  const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://www.itl.cat/pngfile/big/290-2906065_indian-food-wallpaper-hd.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  const classes = useStyles();
  if (state.showLandingPage)
    return <LandingPage />
  return (
    <div>
      <Grid component="main" className={classes.root} container>
        <>
          {
            window.innerWidth >= 800 ?
              <Grid className={classes.image} item sm={8} xs={12} >
              </Grid>
              :
              null
          }
        </>

        <Grid item style={{ backgroundColor: "#ff5656" }} sm={4} xs={12} >
          <div style={{ backgroundColor: "#fff" }} className={classes.paper}>
            <img width="100%" src={MarketImage} />
            <div className="text-center" style={{ marginTop: "10px" }} >
              <img width="100" src={Logo} />
              <div style={{ letterSpacing: "0.95sp", fontSize: "28px", fontWeight: "bold", color: "#ff5656" }} >
                Checkin
              </div>
            </div>
            <div style={{ width: "100%", backgroundColor: "#ff5656" }} >
              <img width="100%" src={WaveShapeImage} />
              <div className="text-center text-light" >
                {
                  state.askingContact ?
                    <AskContact />
                    :
                    null
                }
                {
                  state.askingOTP ?
                    <AskOTP />
                    :
                    null
                }
                {
                  state.askingProfileDetails ?
                    <AskProfileDetails />
                    :
                    null
                }
                <br />
                <br />
                <img width="100%" src={BottomDisplay} />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

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
    _authenticate_via_number: (number) => dispatch(_authenticate_via_number(number))
  }
}

export default connect(mapStateToProps, null)(SignupPage)

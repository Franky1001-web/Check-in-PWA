import React from 'react'
// import RoundedButton from '../../../shared/components/Button/Rounded'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { connect } from "react-redux"
import { useHistory } from 'react-router-dom'
import FastForwardIcon from '@material-ui/icons/FastForward'

function AbsoluteComponents({ cart }) {
  const history = useHistory()
  const amount = cart.items.data.reduce((init, item) => init + item.price, 0).toFixed(2)
  if (cart.items.data.length)
    return (
      <div style={{
        width: "100%",
        height: "45px",
        overflow: "hidden",
        position: "sticky",
        bottom: 0,
        backgroundColor: "#32c282",

      }}>
        <div className="d-flex justify-content-between" style={{ margin: '8px', color: "#fff" }}>
          <div className="d-flex">
            <div> <ShoppingCartOutlinedIcon /></div>
            <div style={{
              justifyContent: 'space-between',
              display: 'flex'
            }}>
              <div style={{
                marginLeft: '5px',
                marginTop: '5px',
                color: '#fff'
              }}>
                {cart.items.data.length} Items&nbsp;|&nbsp; &#8377;{amount}
              </div>
            </div>
          </div>
          <div>
            <div style={{
              display: "flex",
            }}>
              <span
              style={{
                display: "inline-block",
                fontSize: "20px",
                padding: "6px"
              }}
              onClick={() => history.push("/viewcart")}
            >
              Continue</span><span style = {{
                display: "inline-block",
                padding: "5px"
              }}><FastForwardIcon fontSize="small"/>
            </span>
            </div>
          </div>
        </div>
      </div>
    )
  return <div></div>
}

const mapStateToProps = (state) => ({
  cart: state.cart
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AbsoluteComponents)

import React from 'react'
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import { Widgets } from '@material-ui/icons';

function BillingBottomBar() {
    return (
        <div style={{ color: "#fff"}} >
            <div style={{ display: "flex", justifyContent: "space-between", marginRight: "5px" }} >
                <div style={{ margin: "8px", display: "flex" }}> <ReceiptOutlinedIcon /><div style={{ marginTop: "7px", marginLeft: "6px" }}>Settle Bill</div> </div>
                <div style={{ marginTop: "15px", marginRight: "6px" }}>Total: &#8377;123.0</div>
            </div>
        </div >
    )
}

export default BillingBottomBar

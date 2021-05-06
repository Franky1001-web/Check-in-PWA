import Veg from '../../../assets/home/vegicon.png';
import nonVeg from '../../../assets/home/nonvegicon.jpg';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import MenuCustomisation from "./MenuCustomisation"

import { addItem, removeItem } from "../../Cart/actions/actionCreator"
import { connect } from 'react-redux'

function Displaydish(props) {
    // const [loading, setloading] = useState(true);
    const { _add_item, _remove_item } = props
     console.log(props);
    let Width = window.innerWidth;
    const [value, setValue] = React.useState(0);
    const history = useHistory()
    const [Items, setItems] = React.useState(props.obj.data);
     console.log(Items)
    const handleIncrease = (index) => {
        console.log(Items[index].name)
        const recItems = JSON.parse(JSON.stringify(Items))
        if (recItems[index].isCustomised === true)
            return handleOpenSlides(true)
        const cartValue = recItems[index].cartValue
        console.log(recItems[index].cartValue)
        recItems[index].cartValue = cartValue + 1
        setItems(recItems)
        
        _add_item(recItems[index])
        console.log(Items[index].cartValue) 
    }
    const handleDecrease = (index) => {
        
        const recItems = JSON.parse(JSON.stringify(Items))
        const cartValue = recItems[index].cartValue
        console.log(cartValue)
        recItems[index].cartValue = cartValue - 1
        
        setItems(recItems)
        console.log(Items[index].cartValue)
        _remove_item(recItems[index].id)
    }
    const handleOpenSlides = (isCustomised) => {
        if (isCustomised === true) {

            // history.push("/sides")
        }
        console.log(Items.isCustomised)
    }
    const seeImage = () => (
        document.getElementById("container").style.filter = "blur(4px)"
    )

    // setloading(false)
     //console.log(Items)


    return (

        <div id = {props.obj.categoryName} style={{ marginBottom: '50px', width: "100%"}}>
            <h3 style={{ color: '#6d6d6d', marginLeft: "5px" }}>&nbsp;{props.obj.categoryName}</h3>

            {Items.map((item, index) =>
                <div style={{ height: '150px', width: "100%", marginLeft: "2px"}}>
                    <div style={{ display: 'flex', justifyContent: "space-between" }}>
                        <div style={{ display: 'flex', marginLeft: "5px" }} >
                            <div>  {item.mealtype === "veg" ?
                                (<img style={{ height: "15px", width: "15px", marginLeft: "5px" }} src={Veg} />)
                                : (<img style={{ height: "15px", width: "15px", marginLeft: "5px" }} src={nonVeg} />)}</div>
                            <div style={{ width: "140px"}} >
                                <div

                                    style={{
                                        height: '18px',
                                         width: (item.type === "MUSTTRY" ? "80px" : "120px"),
                                        marginLeft: '12px',
                                        borderRadius: '10px 4px 4px 10px',
                                        marginBottom: '10px',
                                        backgroundColor: item.type === "MUSTTRY" ? "#ff5656" : "#ffc850"
                                    }}>
                                    <div >

                                        <div><div style={{ height: '2px' }}>{item.type === "MUSTTRY" ?
                                            (<WhatshotIcon style={{ height: '14px', color: '#fff', marginTop: '2px' }} />) : (<ThumbUpIcon style={{ height: '14px', color: '#fff', marginTop: '2px', }} />)}
                                        </div> <span style={{ color: '#fff', marginBottom: '10px', marginLeft: '25px', fontSize: 10 }}>  {item.type}</span> </div>
                                    </div>

                                </div>

                                <div style={{ marginLeft: '-16px' }} onClick={() => handleOpenSlides(item.isCustomised)}>
                                    <div style={{ marginTop: '0', color: '#6d6d6d' }} >{item.name}</div>
                                    <div style={{ marginTop: '10px', color: '#6d6d6d' }}> &#8377;{item.price}</div>
                                    <div style={{color: "grey", opacity: "0.8", fontSize: "0.8em", marginTop: "5px"}}>
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div style = {{ paddingTop: "95px", marginRight: "20px"}}>
                            {item.image === "" ? (<div style={{marginLeft: "100px", marginTop: "-55px"}}>
                                <div style={{
                                    height: '20px',
                                    width: '70px',
                                    backgroundColor: '#ffefef',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    border: ' 1px solid #ff5656',
                                }}

                                >
                                    {item.cartValue === 0 ?
                                        (
                                            item.isCustomised ?
                                                <MenuCustomisation variants={item.variants} />
                                                :
                                                <div
                                                    style={{ paddingTop: '5px', paddingLeft: '20px', paddingRight: '20px', fontSize: '14px', color: '#ff5656', fontWeight: 700 }}
                                                    onClick={() => handleIncrease(index)}
                                                >
                                                    ADD
                                                </div>
                                        )
                                        : (
                                            <div style={{
                                                backgroundColor: '#ff5656', height: '21px',
                                                cursor: 'pointer', width: '71px', borderRadius: '5px'
                                            }}>
                                                <div style={{ display: 'flex', color: '#fff' }}>
                                                    <div ><RemoveIcon style={{ width: '16px', marginLeft: '5px' }} onClick={() => handleDecrease(index)} /></div>
                                                    <div style={{ marginTop: '5px', marginLeft: '10px', }} >{item.cartValue}</div>
                                                    <div ><AddIcon style={{ width: '16px', marginLeft: '10px' }} onClick={() => handleIncrease(index)} /></div>
                                                </div>

                                            </div>

                                        )}
                                </div>
                            </div>) :

                                (<div style={{ zIndex: -1, marginTop: "-105px" }}>
                                    <div style={{ paddingTop: "10px"}}><img style={{
                                        
                                        //border: "2px solid black",
                                        height: '80px',
                                        marginTop: '4px',
                                        borderRadius: '5px',
                                        marginLeft: '40px',
                                        position: 'absolute',
                                        right: "5px",
                                        pointerEvents: "all"
                                    }} src={item.image}  />
                                        <div style={{ marginLeft: "100px", position: 'relative', paddingTop: '75px' }} >
                                            <div style={{
                                                height: '20px',
                                                width: '70px',
                                                backgroundColor: '#ffefef',
                                                borderRadius: '5px',
                                                cursor: 'pointer',
                                                border: ' 1px solid #ff5656',

                                                // marginBottom: '-140px'
                                            }}

                                            >
                                                {item.cartValue === 0 ?
                                                    (
                                                        item.isCustomised ?
                                                            <MenuCustomisation variants={item.variants} />
                                                            :
                                                            <div
                                                                style={{ paddingTop: '5px', paddingLeft: '20px', fontSize: '14px', color: '#ff5656', fontWeight: 700 }}
                                                                onClick={() => handleIncrease(index)}
                                                            >
                                                                ADD
                                                </div>
                                                    )
                                                    : (
                                                        <div style={{
                                                            backgroundColor: '#ff5656', height: '21px',
                                                            cursor: 'pointer', width: '71px', borderRadius: '5px'
                                                        }}>
                                                            <div style={{ display: 'flex', color: '#fff' }}>
                                                                <div onClick={() => handleDecrease(index)}><RemoveIcon style={{ width: '16px', marginLeft: '5px' }} /></div>
                                                                <div style={{ marginTop: '5px', marginLeft: '10px', }} >{item.cartValue}</div>
                                                                <div onClick={() => handleIncrease(index)}><AddIcon style={{ width: '16px', marginLeft: '10px' }} /></div>
                                                            </div>

                                                        </div>
                                                    )}
                                            </div>
                                        </div>
                                    </div>

                                </div>)}
                        </div>
                    </div>
                </div>
            )
            }
        </div >
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    _add_item: (item) => dispatch(addItem(item)),
    _remove_item: (id) => dispatch(removeItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Displaydish)
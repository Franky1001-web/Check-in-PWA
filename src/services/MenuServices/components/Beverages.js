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


function Recommended(props) {
    // const [loading, setloading] = useState(true);
    const { _add_item, _remove_item } = props
    console.log(props);
    let Width = window.innerWidth;
    const [value, setValue] = React.useState(0);
    const history = useHistory()
    const [Items, setItems] = React.useState(
        [
            {
                "pk": 85,
                "name": "Coke",
                "type": "RECOMMENDED",
                "types": [
                    "Veg",
                    "Egg",
                    "Paneer"
                ],
                "costs": [
                    "99.00",
                    "119.00",
                    "119.00"
                ],
                "tags": [],
                "available_meals": [
                    "brkfst",
                    "lunch",
                    "dinner",
                    "nhtlfe"
                ],
                "image": "",
                "description": "Have a tasty Fried Rice (egg or paneer)",
                "ingredients": [],
                "is_available": false,
                "customizations": [],
                "item_type": 0,
                "group": 16,
                "created": "2019-06-24T12:08:56.801840Z",
                "modified": "2020-11-06T14:27:20.370306Z",
                "menus": [
                    2
                ],
                mealtype: 'veg',
                cartValue: 0,
                id: 85,
                variants: [
                    
                ],
                price: 85.00,
                isCustomised: false,
            },
            {
                mealtype: 'veg',
                type: 'MUSTTRY',
                name: 'Sprite',
                price: 75.00,
                discreption: '',
                image: '',
                isCustomised: false,
                cartValue: 0,
                id: "hakanoodle",
                variants: [
                   
                ]
            },
            {
                mealtype: 'veg',
                type: 'RECOMMENDED',
                name: 'Juices',
                price: 175.00,
                discreption: 'Lettuce, totmato, caramelized onion, veggie, cheddar cheese.',
                image: 'https://hips.hearstapps.com/hmg-prod/images/190416-chicken-burger-082-1556204252.jpg',
                isCustomised: true,
                variants: [
                    {
                        name: "Orange",
                        price: 123.00,
                        type: "veg",
                        variantId: "orangejuice",
                        id: "orangej"
                    }
                ],
                cartValue: 0,
                id: "JUICE"
            },
            {
                mealtype: 'veg',
                type: 'MUSTTRY',
                name: 'Appy',
                price: 180.98,
                discreption: '',
                image: '',
                isCustomised: false,
                cartValue: 0,
                id: "applejuice"
            },
        ]);
    const handleIncrease = (index) => {
        const recItems = JSON.parse(JSON.stringify(Items))
        if (recItems[index].isCustomised === true)
            return handleOpenSlides(true)
        const cartValue = recItems[index].cartValue
        recItems[index].cartValue = cartValue + 1
        setItems(recItems)
        _add_item(recItems[index])
    }
    const handleDecrease = (index) => {
        const recItems = JSON.parse(JSON.stringify(Items))
        const cartValue = recItems[index].cartValue
        recItems[index].cartValue = cartValue - 1
        setItems(recItems)
        _remove_item(recItems[index].id)
    }
    const handleOpenSlides = (isCustomised) => {
        if (isCustomised === true) {

            // history.push("/sides")
        }
        console.log(Items.isCustomised)
    }

    // setloading(false)
    console.log(Items)


    return (

        <div id="Beverages"style={{ marginBottom: '50px', width: Width+"px"}}>
            <h3 style={{ color: '#6d6d6d', marginLeft: "5px" }}>&nbsp;Beverages</h3>

            {Items.map((item, index) =>
                <div style={{ height: '150px', width: Width + 'px', marginLeft: "10px"}}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex' }} >
                            <div>  {item.mealtype === "veg" ?
                                (<img style={{ height: "15px", width: "15px", marginLeft: "5px" }} src={Veg} />)
                                : (<img style={{ height: "15px", width: "15px", marginLeft: "5px" }} src={nonVeg} />)}</div>
                            <div >
                                <div

                                    style={{
                                        height: '18px',
                                        width: '100%',
                                        marginLeft: '12px',
                                        borderRadius: '10px 4px 4px 10px',
                                        marginBottom: '10px',
                                        backgroundColor: item.type === "MUSTTRY" ? "#ff5656" : "#ffc850"
                                    }}>
                                    <div>

                                        <div><div style={{ height: '2px', }}>{item.type === "MUSTTRY" ?
                                            (<WhatshotIcon style={{ height: '14px', color: '#fff', marginTop: '2px' }} />) : (<ThumbUpIcon style={{ height: '14px', color: '#fff', marginTop: '2px' }} />)}
                                        </div> <span style={{ color: '#fff', marginBottom: '10px', marginLeft: '25px', fontSize: 10 }}>  {item.type}</span> </div>


                                    </div>

                                </div>

                                <div style={{ marginLeft: '-16px' }} onClick={() => handleOpenSlides(item.isCustomised)}>
                                    <div style={{ marginTop: '0', color: '#6d6d6d' }} >{item.name}</div>
                                    <div style={{ marginTop: '10px', color: '#6d6d6d' }}> &#8377;{item.price}</div>
                                </div>
                            </div>
                        </div>
                        <div style = {{ paddingTop: "95px"}}>
                            {item.image === "" ? (<div style={{marginLeft: item.type==="MUSTTRY" ? Width*0.45 +'px' : Width*0.35+'px'}}>
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
                                        marginRight: '10px',
                                        borderRadius: '5px',
                                        marginLeft: Width * 0.28 + 'px',
                                        position: 'absolute',

                                    }} src={item.image} />
                                        <div style={{ marginLeft: item.type==="MUSTTRY" ? Width*0.45 +'px' : Width*0.35+'px', position: 'relative', paddingTop: '75px' }} >
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

export default connect(mapStateToProps, mapDispatchToProps)(Recommended)

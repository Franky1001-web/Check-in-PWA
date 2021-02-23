import React from 'react'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Veg from '../../../assets/home/vegicon.png';
import nonVeg from '../../../assets/home/nonvegicon.jpg'
import RoundedButton from '../../../shared/components/Button/Rounded'
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ScrollMenu from "react-horizontal-scrolling-menu";

export default function Trending() {
    let items = [
        {
            itemname: "Chicken Biryani",
            imageUrl: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/06/Mutton-Biryani-Recipe.jpg",
            rate: "300",
            type: "nonveg"

        },
        {
            itemname: "veg-Biryani",
            imageUrl: "https://i1.wp.com/vegecravings.com/wp-content/uploads/2016/07/veg-biryani-recipe-step-by-step-instructions.jpg?fit=3563%2C2976&quality=65&strip=all&ssl=1",
            rate: "200",
            type: "veg"
        },
        {
            itemname: "Fried Rise",
            imageUrl: "https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Fried-Rice-min.jpg",
            rate: "250",
            type: "nonveg"
        },
        {
            itemname: "Chicken-wings",
            imageUrl: "https://img.taste.com.au/CNP6TO6O/taste/2016/11/crunchy-buttermilk-and-rosemary-chicken-wings-102769-1.jpeg",
            rate: "400",
            type: "nonveg"
        },

    ]

    return (
        <div>
            <div>
                <h3>Trending Dishes</h3>
            </div>
            <div style={{ display: "flex", overflow: "scroll", marginLeft: "0" }} >
                <ScrollMenu

                    data={items.map(res =>
                        <Card style={{ height: "120px", width: "180px", marginRight: "5px", marginLeft: "3px" }}>
                            <CardMedia
                                style={{ height: "70px" }}
                                image={res.imageUrl}
                                title="Item"
                            />
                            <Typography variant="subtitle1" color="textSecondary">
                                <div style={{ display: "flex" }}>   <div >{res.type === "veg" ? (<img style={{ height: "10px", width: "10px", marginLeft: "5px" }} src={Veg} />) : (<img style={{ height: "10px", width: "10px", marginLeft: "5px" }} src={nonVeg} />)}</div>
                                    <div style={{ fontSize: 14, marginLeft: "6px", marginTop: "2px", marginBottom: "0", color: "#000000" }}> {res.itemname}</div>
                                    <div></div>
                                </div>
                            </Typography>

                            <Typography variant="subtitle1" color="textSecondary">
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div style={{ fontSize: 14, marginLeft: "20px", marginTop: "0", color: "#000000" }}>&#8377; {res.rate}</div>
                                    {/* <IconButton color="primary" aria-label="add to shopping cart"> */}
                                    <div style={{ marginBottom: "5px", color: "#0295aa" }}>    <AddCircleOutlineIcon /> </div>
                                    {/* </IconButton> */}
                                </div>
                            </Typography>
                        </Card>
                    )} />
            </div>

        </div>
    )
}
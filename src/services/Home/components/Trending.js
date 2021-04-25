import React from 'react'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// import Tooltip from '@material-ui/core/Tooltip';
// import AddIcon from '@material-ui/icons/Add';
// import Fab from '@material-ui/core/Fab';
import Veg from '../../../assets/home/vegicon.png';
import nonVeg from '../../../assets/home/nonvegicon.jpg'
// import RoundedButton from '../../../shared/components/Button/Rounded'
// import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ScrollMenu from "react-horizontal-scrolling-menu";
import Skeleton from '@material-ui/lab/Skeleton';
import { connect } from "react-redux"

function Trending({ home }) {
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

    const trendingDishes = home.trendingDishes

    return (
        <div >
            <div style={{ marginLeft: '10px', color: '#6d6d6d', marginTop: '40px', fontSize: '14px', }}>
                <h3>Trending Dishes</h3>
            </div>
            {
                trendingDishes.isLoading ?
                    <div className="d-flex" >
                        {
                            [1, 2].map(() => {
                                return (
                                    <div>
                                        <Skeleton style={{ marginLeft: "10px" }} variant="rect" width={180} height={110} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    :
                    <div style={{ display: "flex", overflow: "scroll", marginLeft: "0" }} >
                        <ScrollMenu

                            data={trendingDishes.data.map(dish =>
                                <Card style={{ height: "120px", width: "180px", marginRight: "5px", marginLeft: "3px" }}>
                                    <CardMedia
                                        style={{ height: "70px" }}
                                        image={dish.image}
                                        title="Item"
                                    />
                                    <div variant="subtitle1" color="textSecondary">
                                        <div style={{ display: "flex", bottom: 0 }}>
                                            <div >{dish.item_type === 0 ? (<img style={{ height: "10px", width: "10px", marginLeft: "5px" }} src={Veg} />) : (<img style={{ height: "10px", width: "10px", marginLeft: "5px" }} src={nonVeg} />)}</div>
                                            <div style={{ fontSize: '10px', marginLeft: "6px", marginTop: "5px", marginBottom: "0", color: "#6d6d6d" }}> {dish.name}</div>
                                            {/* <div></div> */}
                                        </div>
                                        {/* </Typography> */}

                                        {/* <Typography variant="subtitle1" color="textSecondary"> */}
                                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                                            <div style={{ fontSize: '12px', fontWeight: 600, marginLeft: "20px", marginTop: "5px", color: "#6d6d6d" }}>&#8377; {dish.costs?.[0]}</div>
                                            {/* <IconButton color="primary" aria-label="add to shopping cart"> */}
                                            <div style={{ marginBottom: "5px", color: "#0295aa" }}>    <AddCircleOutlineIcon /> </div>
                                            {/* </IconButton> */}
                                        </div>
                                    </div>
                                </Card>
                            )} />
                    </div>
            }



        </div>
    )
}

const mapStateToProps = (state) => ({
    home: state.home
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Trending)

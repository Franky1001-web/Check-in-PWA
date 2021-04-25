import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
// import SpeedDial from '@material-ui/lab/SpeedDial';


function Example() {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            imageURL: "https://images.unsplash.com/photo-1515669097368-22e68427d265?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            imageURL: "https://images.unsplash.com/photo-1515669097368-22e68427d265?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"

        }
    ]

    return (
        <div className="banner-container">
             <Carousel style={{ zindex: 1000 }} animation="slide"> 
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
             </Carousel> 
        </div>
    )
}

function Item(props) {
    return (
        <div className="banner-card">
            <img alt="banner-item" src={props.item.imageURL} style={{ borderRadius: "16px", width: "280px" }} height={window.innerHeight * 0.2} />
        </div>

    )
}
export default Example
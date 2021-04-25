import React from 'react'
import ScrollMenu from "react-horizontal-scrolling-menu";
import Divider from '@material-ui/core/Divider';



let categories = [{
    image: 'https://cdn.zeplin.io/5af42663188049271b3ae959/assets/B2726390-711B-4F16-95FB-270361BBF40A.svg',
    title: 'Drinks'
},
{
    image: 'https://cdn.zeplin.io/5af42663188049271b3ae959/assets/8DE64735-BEA6-45E2-9F1C-430C00E12C12.svg',
    title: 'Food',
},
{
    image: 'https://cdn.zeplin.io/5af42663188049271b3ae959/assets/56BF08BE-83AA-4350-92F2-235CAB742E2B.svg',
    title: 'Special'
},
{
    image: 'https://cdn.zeplin.io/5af42663188049271b3ae959/assets/56BF08BE-83AA-4350-92F2-235CAB742E2B.svg',
    title: 'Desert'
}


]
function Items() {
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    return (
        <div >
            <br />

            <div ><ScrollMenu

                data={categories.map(res =>
                    <div style={{ height: '90px', width: '60px', margin: '20px' }}>
                        <img style={{ height: '60px', width: '40px' }} src={res.image} />
                        <div style={{ color: '#6d6d6d' }}>{res.title}</div>
                    </div>
                )} /></div>

            <div style={{ marginLeft: windowWidth * 0.08 + 'px', marginRight: windowWidth * 0.09 + 'px' }}>  <Divider /></div>
        </div>)
}

export default Items

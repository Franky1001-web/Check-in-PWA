import React from 'react'
import RoundedButton from '../../../shared/components/Button/Rounded';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


export default function BrowseMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const href1=`#${props.id1}`, href2=`#${props.id2}`;
    console.log(href1,href2)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const Space = () => <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
    return (
        <div style={{ bottom: 45, right: 0, position: 'fixed', zIndex: 1000,  }}>
            <RoundedButton onClick={handleClick} style={{ backgroundColor: '#0295aa', textTransform: 'uppercase', fontSize: '12px' }} >
                Browse Menu
            </RoundedButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                style={{overflow: 'auto'}}
            >
                <a href={href1} style={{textDecoration: "none", color: "black"}} onClick={handleClose}><MenuItem className="d-flex justify-content-between" href={href1} ><span>Recommended</span>&nbsp; &nbsp; <span>2</span></MenuItem></a>
                
                <a href={href2} style={{textDecoration: "none", color: "black"}} onClick={handleClose}><MenuItem className="d-flex justify-content-between" href = {href2}>Beverage <Space /> 13</MenuItem></a>
                
            </Menu>
        </div>
    )
}
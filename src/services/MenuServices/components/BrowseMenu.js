import React from 'react'
import RoundedButton from '../../../shared/components/Button/Rounded';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


export default function BrowseMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const Space = () => <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
    return (
        <div style={{ bottom: 45, right: 0, position: 'fixed', zIndex: 1000, }}>
            <RoundedButton onClick={handleClick} style={{ backgroundColor: '#0295aa', textTransform: 'uppercase', fontSize: '12px' }} >
                Browse Menu
            </RoundedButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem className="d-flex justify-content-between" onClick={handleClose}><span>Recommended</span>&nbsp; &nbsp; <span>2</span></MenuItem>
                <MenuItem className="d-flex justify-content-between" onClick={handleClose}><span>Sides</span> <span>10</span></MenuItem>
                <MenuItem className="d-flex justify-content-between" onClick={handleClose}>Chinese <Space /> 11</MenuItem>
                <MenuItem className="d-flex justify-content-between" onClick={handleClose}>Main course <Space /> 7</MenuItem>
                <MenuItem className="d-flex justify-content-between" onClick={handleClose}>Beverage <Space /> 13</MenuItem>
            </Menu>
        </div>
    )
}
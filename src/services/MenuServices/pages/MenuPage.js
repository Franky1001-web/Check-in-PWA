import React, { useEffect } from 'react'
import AbsoluteItems from '../components/AbsoluteComponents'
import Offers from '../components/Offers'
import Recommended from '../components/Recommended'
import CategoriesMenu from '../components/CategoriesMenu'
import Items from '../components/FoodCategories'
import BrowseMenu from '../components/BrowseMenu'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom';
import { getPromos, loadRecommendedRestaurants } from '../middleware'
import { connect } from "react-redux"
import BottomBar from "../components/AbsoluteComponents"

function MenuPage(props) {
    const {
        _load_recommended_restaurants,
        _get_promos,

    } = props
    const history = useHistory()
    const handleChange = () => {
        history.push("/home")
    }

    useEffect(() => {
        _load_recommended_restaurants()
        _get_promos("11")
    }, [])
    return (
        <div style={{ width: '100%' }}>
            <div
                style={{ width: '100%', borderBottom: "1px solid grey" }}
            >
                <div style={{ margin: '15px', display: 'flex' }}>
                    <div>
                        <ArrowBackIosIcon onClick={handleChange} />
                    </div>
                    <div>
                        <div style={{ color: "#ff5656" }}>
                            Menu
                        </div>
                        <div style={{ fontSize: '10px', marginTop: '5px' }}>
                            Grey Orange - Lavel Road
                        </div>
                    </div>
                </div>
            </div>
            <Offers />

            <div style={{ position: 'absolute', zIndex: 10, width: '100%', }} > <CategoriesMenu /></div>
            <Items />
            <Recommended />
            {/* <ChatWithUs /> */}
            <BrowseMenu />
            <BottomBar />
        </div>
    )

}
const mapStateToProps = (state) => ({
    menu: state.menu,
})

const mapDispatchToProps = (dispatch) => ({
    _load_recommended_restaurants: () => dispatch(loadRecommendedRestaurants()),
    _get_promos: (id) => dispatch(getPromos(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuPage)

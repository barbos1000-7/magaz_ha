import {connect} from "react-redux";
import {createActiveAction} from "../../redux/reducers/KatalogState";
import Navbar from "./Navbar";
const stateObj = state => {
    let objs = state.KatalogState.navData
    return {
        objs
    }
}
const funcObj = dispatch => {
    return {
        changeActive: id => dispatch(createActiveAction(id))
    }
}


export const NavbarContainer = connect(stateObj, funcObj)(Navbar)
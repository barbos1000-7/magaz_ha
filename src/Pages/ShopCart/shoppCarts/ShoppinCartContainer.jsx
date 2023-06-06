import {connect} from "react-redux";
import ShopsCartsItems from "./shopsCartsItems";
import {createLikesAction, createOnMeCountAction} from "../../../redux/reducers/KatalogState";
import {getTotalPrice} from "../../../redux/selectors/selectors";
import {prettify} from "../../../hepler/helpFunc";
const stateObj = state => {
    let objs = state.KatalogState.shopData
    return {
        objs,
        totalCost: prettify( getTotalPrice(state)),
        isAuth: state.KatalogState.isAuth
    }
}
const funcObj = dispatch => {
    return {
        clickButtn: (id, plus) => dispatch(createOnMeCountAction(id, plus)),
        changeLikes: (id, onLikes) => {
            dispatch(createLikesAction(id, onLikes))
        }
    }
}


export const ShoppinCartContainer = connect(stateObj, funcObj)(ShopsCartsItems)
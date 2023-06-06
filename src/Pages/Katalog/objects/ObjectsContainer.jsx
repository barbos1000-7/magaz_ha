import {createLikesAction, createValueSelectAction} from "../../../redux/reducers/KatalogState";
import Objects from "./Objects";
import {connect} from "react-redux";
const stateObj = state => {
    let objs = state.KatalogState.objData
return {
        objs,
        options: state.KatalogState.optionsOfFilter,
        value: state.KatalogState.filter
}
}
const funcObj = dispatch => {
    return {
        changeLikes: (id, onLikes) => {
            dispatch(createLikesAction(id, onLikes))
        },
        changeSel: (value) => dispatch(createValueSelectAction(value))
    }
}


export const ObjectsContainer = connect(stateObj, funcObj)(Objects)
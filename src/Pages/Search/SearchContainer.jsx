import {connect} from "react-redux";
import Search from "./Search";
import {createLikesAction, createSearchAction} from "../../redux/reducers/KatalogState";
const stateObj = state => {
    return {
        value: state.KatalogState.search.searchInput,
        objs: state.KatalogState.search.searchData
    }
}
const funcObj = dispatch => {
    return {
        onChange: (value) => dispatch(createSearchAction(value)),
        changeLike: (id, onLikes) => {
            dispatch(createLikesAction(id, onLikes))
        },
    }
}


export const SearchContainer = connect(stateObj, funcObj)(Search)
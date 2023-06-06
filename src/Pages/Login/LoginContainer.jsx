import {connect} from "react-redux";
import {createAuthAction} from "../../redux/reducers/KatalogState";
import Login from "./Login";
const stateObj = state => {
    return {
        isAuth: state.KatalogState.isAuth
    }
}
const funcObj = dispatch => {
    return {
        changeAuth: value => dispatch(createAuthAction(value))
    }
}


export const LoginContainer = connect(stateObj, funcObj)(Login)
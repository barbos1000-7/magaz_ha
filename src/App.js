import './App.css';


import {NavbarContainer} from "./Pages/navbar/NavbarContainer";
import {Navigate, Route, Routes} from "react-router-dom";
import Katal from "./Pages/Katalog/Katal";
import {useMemo} from "react";
import ShoppingCart from "./Pages/ShopCart/ShoppingCart";
import Me from "./Pages/Me/Me";
import {SearchContainer} from "./Pages/Search/SearchContainer";
import {LoginContainer} from "./Pages/Login/LoginContainer";
function App({store}) {
    let url = window.location.href

    useMemo(() => {
            store.dispatch({
                type: 'onActive',
                to: url.slice(21)
            })
        },
        [store, url])
  return (
    <div className="App">
        <NavbarContainer />
        <Routes>
            <Route path='/shopCart' element={<ShoppingCart />}/>
            <Route path='/katalog' element={<Katal />}/>
            <Route path='/me' element={<Me />}/>
            <Route path='/search' element={<SearchContainer />}/>
            <Route path='/login' element={<LoginContainer />}/>
            <Route path='/*' element={<Navigate to='/me' replace/>}/>
        </Routes>
    </div>
  );
}

export default App;

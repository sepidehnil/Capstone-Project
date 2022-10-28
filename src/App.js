import React from "react"
import {Routes, Route} from "react-router-dom"
import Header from "./component/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route exact path="/">
                    <Photos />
                </Route>
                
                <Route path="/cart">
                    <Cart />
                </Route>
            </Routes>
        </div>
    )
}

export default App
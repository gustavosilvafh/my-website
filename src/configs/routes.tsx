import { BrowserRouter, Route, Routes as ReactRouter } from "react-router-dom"
import { Home } from "../pages/home/home.page"

export const Routes = () => {
    return (
        <BrowserRouter>
            <ReactRouter>
                <Route path="/" element={<Home />} />
            </ReactRouter>
        </BrowserRouter>
    )

}
import Sidebar from './Sidebar'
import {Outlet} from "react-router-dom"

const Layout = () => {
    return (
        <div className="app">
            <Sidebar />
            <main className="main">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout

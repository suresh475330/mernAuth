import NavBar from "../navbar/NavBar"
import Toolbar from "@mui/material/Toolbar"
import CssBaseline from "@mui/material/CssBaseline"

export default function Layout({ children }) {
    return (
        <div>
            <CssBaseline />
            <NavBar />
            <div style={{ minHeight: "80vh" }} >
                <Toolbar />
                {children}
            </div>
        </div>
    )
}
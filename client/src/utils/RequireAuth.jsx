import { useLocation,Navigate ,Outlet} from "react-router-dom";
import { toast } from "react-toastify";

export default function RequireAuth() {
    let auth = {
        user : {
            name : "suresh"
        }
    }
    let location = useLocation();

    if (!auth.user) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        toast.error("Plz login to see this page");
        return <Navigate to="/login"  state={{ from: location }} />;
    }

    return <Outlet />;
}
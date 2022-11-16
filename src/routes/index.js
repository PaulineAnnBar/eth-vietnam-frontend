import {
    Routes,
    Route,
} from "react-router";
import {BrowserRouter} from "react-router-dom";
import LandingView from "../LandingView";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingView />}>
                    {/* <Route index element={<Home />} />
          <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
};

export default AppRoutes;
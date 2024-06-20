import { BrowserRouter, Route, Routes } from "react-router-dom";
import TestInfo from "../pages/TestInfo";
import StartTest from "../pages/StartTest";
import Greeting from "../pages/Greeting";
import Navbar from "../components/Navbar";
import Ranking from "../pages/Ranking";
import Profile from "../pages/Profile";

const AllRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                
                <Routes>
                    <Route path="/" element={<TestInfo />} />
                    <Route path="/start" element={<StartTest />} />
                    <Route path="/greeting" element={<Greeting />} />
                    <Route path="/rankings" element={<Ranking />} />
                    <Route path="/user" element={<Profile />} />
                </Routes>
            </BrowserRouter>

        </div>
    );
};
export default AllRoutes;
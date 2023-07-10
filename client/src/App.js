import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EditUser from "./pages/EditUser";
import AddUser from "./pages/AddUser";
import UserView from "./pages/UserView";


function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:userId" element={<UserView />} />
                    <Route path="/add" element={<AddUser />} />
                    <Route path="/edit/:userId" element={<EditUser />} />
                </Routes>
            </Router>
        </>);
}

export default App;

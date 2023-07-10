import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EditUser from "./pages/EditUser";
import AddUser from "./pages/AddUser";
import UserView from "./pages/UserView";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
    return (
        <>
            <Router>
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
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

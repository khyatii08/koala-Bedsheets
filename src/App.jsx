
import { Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar.jsx";
import Home from "./component/Home.jsx";
import Footer from "./component/footer.jsx";
import CommentButton from "./component/CommentButton.jsx";

import Aboutus from "./component/AboutUs.jsx";
import KoalaSecondHome from "./component/KoalaSecondHome.jsx";
import KoalaShowroom from "./component/KoalaShowroom.jsx";
import Signup from "./component/signup.jsx";
import LivingRoom from "./component/LivingRoom.jsx";

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Home />
                            <Signup />
                        </>
                    }
                />

                <Route path="/about-us" element={<Aboutus />} />

                <Route
                    path="/koala-second-home"
                    element={<KoalaSecondHome />}
                />

                <Route
                    path="/koala-showroom"
                    element={<KoalaShowroom />}
                />

                <Route path="/living-room" element={<LivingRoom />} />

                <Route
                    path="/living-room/:category"
                    element={<LivingRoom />}
                />
            </Routes>

            <CommentButton />
            <Footer />
        </>
    );
}

export default App;

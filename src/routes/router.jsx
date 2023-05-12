import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AboutYou from "../pages/aboutYou"
import Training from "../pages/training"
import Experience from "../pages/experience"
import Hobbies from "../pages/hobbies"
import Contact from "../pages/contact"

export default function Router() {
    const location = useLocation();
    const pathname = location.pathname

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Routes>
            <Route>
                <Route path="*" element={<Navigate replace to="/" />} />
                <Route path="/" element={<AboutYou />} />
                <Route path="/training" element={<Training />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/hobbies" element={<Hobbies />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>
    )
}
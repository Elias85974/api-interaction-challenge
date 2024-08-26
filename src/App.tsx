import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./tabs/home/HomePage.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="blogs" element={<div>Blogs Page</div>} />
                <Route path="contact" element={<div>Contact Page</div>} />
                <Route path="*" element={<div>Not Found</div>} />
            </Routes>
        </BrowserRouter>
    );
}
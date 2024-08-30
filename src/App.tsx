import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AccountPage from "./tabs/account/AccountPage.tsx";
import MoreInfo from "./tabs/posts/info/MoreInfo.tsx";
import HomePage from "./tabs/home/HomePage.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/user/:username" element={<AccountPage />} />
                <Route path="/user/:username/moreinfo" element={<MoreInfo />} />
            </Routes>
        </BrowserRouter>
    );
}
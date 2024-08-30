import UserData from "./primaryInfo/UserData.tsx";
import Posts from "../posts/Posts.tsx";
import {useParams} from "react-router-dom";

const AccountPage = () => {
    const { username } = useParams<{ username: string }>(); // Get username from route parameters
    return (
        <>
        <UserData username={username as string}/>
        <Posts username={username as string}/>
        </>
    );
}

export default AccountPage;
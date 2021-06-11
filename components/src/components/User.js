import React, { useState, useEffect } from "react";
import axios from "axios";
import RepoItem from "./RepoItem";
import "./css/User.css";
import { useParams } from "react-router-dom";
export default function User() {
    const [repos, setRepos] = useState([]);
    const [user, setUser] = useState({});
    const params = useParams();
    // export default class User extends Component {
    //     state = {
    //         repos: [],
    //         user: {},
    //     };
    // async componentDidMount() {
    useEffect(() => {
        async function getUserandRepos() {
            const username = params.username;
            const [allrepos, myuser] = await Promise.all([
                axios.get(
                    `https://api.github.com/users/${username}/repos?page=1&per_page=5`
                ),
                axios.get(`https://api.github.com/users/${username}`),
            ]);
            setRepos(allrepos.data);
            setUser(myuser.data);

            // this.setState({ repos: data[0].data, user: data[1].data });
        }
        getUserandRepos();
        //eslint-disable-next-line
    }, []);

    return (
        <>
            {/* {JSON.stringify(this.state.user, null, 2)} */}

            <div className="userContainer">
                <h1>{user.login}</h1>
                <h2>{user.name}</h2>
                <h2>Public Gists: {user.public_gists}</h2>
                <h2>Location: {user.location}</h2>{" "}
                <h2>Public Repos: {user.public_repos}</h2>
            </div>
            <div className="repoContainer">
                {repos?.map((repo) => {
                    return (
                        <RepoItem
                            fullName={repo.full_name}
                            link={repo.html_url}
                            repoName={repo.name}
                        />
                    );
                })}
            </div>
            {/* {JSON.stringify(this.state.repos, null, 2)} */}
        </>
    );
}
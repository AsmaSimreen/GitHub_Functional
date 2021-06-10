import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./css/Dashboard.css";
import axios from "axios";
import Loading from "../images/loading.gif";
export default function Dashboard() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [users, setUsers] = useState(null);
  const [loading, setloading] = useState(true);


  // export default class Dashboard extends Component {
  //   state = {
  //     query: "",
  //     users: null,
  //     loading: true,
  //   };
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get("https://api.github.com/users");
        setUsers(res.data);
        setloading(false);

      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
    return () => {
      setUsers(null);
    };
  }, []);

  //   componentDidMount() {
  //     const getUsers = async () => {
  //       try {
  //         const res = await axios.get("https://api.github.com/users");
  //         this.setState({ users: res.data, loading: false });
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };
  //     getUsers();
  //   }
  //   componentWillUnmount() {
  //     this.setState({ users: null });
  //   }
  const handleSearch = async (ev) => {
    // implementation of handleSearch using
    // https://api.github.com/search/users?q=pranis
    ev.preventDefault();
    try {
      if (query === "") {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 5000);
        return;
      }
      setloading(true);
      const res = await axios.get(
        `https://api.github.com/search/users?q=${this.state.query}`
      );

      setUsers(res.data.items);
      setloading(false);

    } catch {
      console.log("Something went wrong");
    }
  };

  return (
    <>
      <h2>Dashboard</h2>
      <div className="searchBar">
        <form onSubmit={handleSearch}>
          <input
            className={
              error ? "search_input input_error" : "search_input"
            }
            value={query}
            onChange={(ev) => {
              setQuery(ev.target.value);
              // this.setState({ query: ev.target.value });
            }}
            type="text"
            className="search_input"
            placeholder="Enter a keyword to search..."
          ></input>
        </form>
      </div>
      <div className="dashboardContainer">
        {loading ? (
          <img className="loadingImage" src={Loading} alt="Loading" />
        ) : (
          users
            ?.filter((user) => {
              return user.login.startsWith(query);
            })
            .map((user) => {
              return (
                <Card
                  avatar_url={user.avatar_url}
                  login={user.login}
                  github_link={user.html_url}
                />
              );
            })
        )}
      </div>
    </>
  );
}
// Dashboard.propTypes = { users: PropTypes.object.isRequired };
import React, { Component } from "react";

import { Route, Routes } from "react-router";

import { NavLink } from "react-router-dom";

import FullPost from "./FullPost/FullPost";

import Posts from "./Posts/Posts";

import NewPost from "./NewPost/NewPost";
// import axios from "../../axios";

// import Post from "../../components/Post/Post";
// import FullPost from "./FullPost/FullPost";
// import NewPost from "../NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  exact="true"
                  style={{ padding: 20 }}
                  activeclassname="active"
                  activestyle={{
                    color: "#fa943f",
                    textDecoration: "underline",
                  }}
                >
                  Home
                </NavLink>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                  style={{ padding: 20 }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact = "true" render={() => <p>Home</p>} />
        <Route path="/" exact = "true" render={() => <p>Home Sweet Home!</p>} /> */}

        <Routes>
          <Route path="/" exact="true" Component={Posts} />
          <Route path="/new-post" Component={NewPost} />
          <Route path="/:id" Component={FullPost} />
        </Routes>
      </div>
    );
  }
}

export default Blog;

import React, { useEffect, useState } from "react";
import { FaHeart, FaMapMarkerAlt } from "react-icons/fa";
import { GoGlobe } from "react-icons/go";
import { HiOutlineUserGroup } from "react-icons/hi";
import { ImTwitter } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import RepositorieDetails from "../../Components/RepositorieDetails/RepositorieDetails";
import Tab from "../../Components/Tab/Tab";
import "./UserDetails.scss";

const UserDetails = () => {
  const [user, setUser] = useState({});

  const [repo, setRepo] = useState([]);

  const id = window.location.pathname.split("/")[2];

  const { avatar_url, login, html_url, followers_url, following_url } = user;
  console.log(user);
  useEffect(() => {
    const url = `https://api.github.com/search/users?q=adre`;
    console.log(id);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.items.length > 0) {
          const itemData = data.items.filter(
            (item) => Number(item.id) === Number(id)
          );
          setUser(itemData[0]);
        }
      });
  }, [id]);

  console.log(user.login);

  /* Repo details*/

  useEffect(() => {
    console.log(user.repos_url);

    const url = user.repos_url;
    console.log(id);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setRepo(data);
          console.log(data);
        }
      });
  }, [id, user.repos_url]);

  console.log("repoDetails", repo);

  const { forks, stargazers_count, name, description, language } = repo;
  // console.log("userDetails", user);
  return (
    <div className="user_detail d-flex ">
      <div className="col-md-4 person">
        {/* <img src="https://avatars.githubusercontent.com/u/39717099?v=4" */}
        <img
          src={avatar_url}
          className="p-2"
          width="300px"
          height="300px"
          alt="profile"
        />
        <div className="userInfo text-center">
          <h5>{login}</h5>
          <div className="user_infos d-flex">
            <div className="userInfo_detail">
              <span>
                <FaMapMarkerAlt />
                {html_url}
              </span>
            </div>
            <div className="userInfo_detail">
              <span>
                <GoGlobe />
                {}
              </span>
            </div>
            <div className="userInfo_detail">
              <span>
                <MdEmail />
                {}
              </span>
            </div>
            <div className="userInfo_detail">
              <span>
                <ImTwitter />
                {}
              </span>
            </div>
            <div className="userInfo_detail">
              <span>
                <HiOutlineUserGroup />
                {followers_url}
              </span>
            </div>
            <div className="userInfo_detail">
              <span>
                <FaHeart />
                {following_url}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <Tab />
        <br />

        {repo.map((item) => (
          <RepositorieDetails item={item}></RepositorieDetails>
        ))}

        {/* <RepositorieDetails
          repo={repo}
          forks={forks}
          stargazers_count={stargazers_count}
          name={name}
          description={description}
          language={language}
        /> */}
      </div>
    </div>
  );
};

export default UserDetails;

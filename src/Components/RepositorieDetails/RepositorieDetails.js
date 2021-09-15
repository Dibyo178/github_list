import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BsFileEarmarkCode } from "react-icons/bs";
import { RiGitRepositoryLine } from "react-icons/ri";
import { VscRepoForked } from "react-icons/vsc";
import "./RepositorieDetails.scss";

const RepositorieDetails = (props) => {
  console.log(props);
  const { forks, stargazers_count, name, language, description } = props.item;
  // console.log(repos_url);

  //   useEffect(() => {
  //     fetch(repos_url)
  //       .then((response) => response.json())
  //       .then((data) => setRepo(data));
  //   }, [repos_url]);

  //   console.log("line no 18", repo);

  return (
    <div className="repositorie">
      {/* <div key={item.id} className="repo "> */}
      <div className="repo ">
        <div>
          <div className="title ">
            <a href="#">
              <RiGitRepositoryLine className="pr-1" />
              <span>{name}</span>
            </a>
          </div>

          <span className="description">{description}</span>
        </div>

        <div className="d-flex">
          <div className="subItem">
            <BsFileEarmarkCode className="pr-1" />
            <span>{language} </span>
          </div>
          <div className="subItem">
            <AiOutlineStar className="pr-1" />
            <span>{stargazers_count}</span>
          </div>
          <div className="subItem">
            <VscRepoForked className="pr-1" />
            <span>{forks}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepositorieDetails;

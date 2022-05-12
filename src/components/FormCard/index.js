import React, { useState, useEffect } from "react";
import axios from "axios";
import RepoDetails from "../RepoDetails";

function FormCard() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [details, setDetails] = useState({});
  const [detailsLoading, setDetailsLoading] = useState(false);

  useEffect(() => {
    setRepos([]);
    setDetails({});
  }, [username]);

  function handleSubmit(e) {
    e.preventDefault();
    searchRepos();
  }

  function searchRepos() {
    setLoading(true);
    axios({
      method: "get",
      url: `https://api.github.com/users/${username}/repos`,
    }).then((res) => {
      setLoading(false);
      setRepos(res.data);
    });
  }

  function renderRepo(repo) {
    return (
      <div className="row" onClick={() => getDetails(repo.name)} key={repo.id}>
        <h2 className="repo-name">{repo.name}</h2>
      </div>
    );
  }

  function getDetails(repoName) {
    setDetailsLoading(true);
    axios({
      method: "get",
      url: `https://api.github.com/repos/${username}/${repoName}`,
    }).then((res) => {
      setDetailsLoading(false);
      setDetails(res.data);
    });
  }
  return (
    <div className="page">
      <div className="landing-page-container">
        <div className="left-side">
          <form className="form">
            <input
              className="input"
              value={username}
              placeholder="Enter a GitHub username..."
              onChange={(e) => setUsername(e.target.value)}
            />
            <button className="button" onClick={handleSubmit}>
              <i class="fa fa-search"></i>
            </button>
          </form>
          <div className="results-container">
            <div className="stats-section">
              <RepoDetails details={details} loading={detailsLoading} />
            </div>

            <div className="listed-repos">{repos.map(renderRepo)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormCard;

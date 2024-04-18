import { useEffect } from "react";
import { useState } from "react";

export default function GithubProfileFinder() {

  const [userName, setUserName] = useState("sangammukherjee");
  const [userData, setUserData] = useState(null);

  async function fetchGithubUserData(){
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    if (data) {
        setUserData(data);
    }
    console.log(data);
  }

  function handleSubmit() {}
  useEffect(()=> {
    fetchGithubUserData()
  },[]);
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
    </div>
  );
}

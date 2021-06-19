import React, { useState, useEffect } from "react";

const GitRepos = () => {
	const [repos, setRepos] = useState([]);
	const url = "https://api.github.com/users/cod3rShea/repos";
	return (
		<>
			<h3>github Repos</h3>
		</>
	);
};

export default GitRepos;

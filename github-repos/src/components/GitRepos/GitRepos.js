import React, { useState, useEffect } from "react";

const GitRepos = () => {
	const [repos, setRepos] = useState([]);
	const url = "https://api.github.com/users/cod3rShea/repos";

	const getRepos = async () => {
		const response = await fetch(url);
		const repos = await response.json();
		console.log("repos", repos);
	};

	useEffect(() => {
		getRepos();
	}, []);

	return (
		<>
			<h3>github Repos</h3>
		</>
	);
};

export default GitRepos;

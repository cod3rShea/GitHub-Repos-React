import React, { useState, useEffect } from "react";

const GitRepos = () => {
	const [repos, setRepos] = useState([]);
	const url = "https://api.github.com/users/cod3rShea/repos";

	const getRepos = async () => {
		const response = await fetch(url);
		const repos = await response.json();
		setRepos(repos);
	};

	useEffect(() => {
		getRepos();
	}, []);

	return (
		<>
			<h3>Sean's Github Repos</h3>
			{repos.map((repo) => {
				const { url, name, language, description } = repo;
				console.log("test", repo);
			})}
		</>
	);
};

export default GitRepos;

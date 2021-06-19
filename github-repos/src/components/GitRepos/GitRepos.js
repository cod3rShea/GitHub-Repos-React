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
			<h1>Sean's Github Repos</h1>
			<ul className="repo-wrapper">
				{repos.map((repo) => {
					console.log(repo);
					const { id, url, name, language, description } = repo;
					return (
						<li key={id}>
							<div>
								<h2>{name}</h2>
								<a href={url}>View repository</a>
								<p>{description}</p>
								<span>{language}</span>
							</div>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default GitRepos;

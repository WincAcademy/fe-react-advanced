import { useEffect, useState } from 'react';

export const UserDetail = ({ user }) => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		let ignore = false;
		setPosts([]);

		const fetchUserPosts = async () => {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/users/${user.id}/posts`,
			);
			const post = await response.json();
			if (!ignore) {
				setPosts(post);
			}
		};
		fetchUserPosts();

		return () => (ignore = true);
	}, [user]);

	return (
		<>
			<p>{user.name}</p>
			<p>{user.email}</p>
			<ul>
				{posts &&
					posts.map((post) => (
						<li key={post.id}>
							<b>{post.title}</b>
							<p>{post.body}</p>
						</li>
					))}
			</ul>
		</>
	);
};

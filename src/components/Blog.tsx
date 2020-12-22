import React from 'react';

export default function Blog(props) {
	const content = props.posts.map((post) => (
		<div key={post.id}>
			<h3>{post.title}</h3>
			<p>{post.content}</p>
		</div>
	));
	return (
		<div>
			{
				<ul>
					{props.posts.map((post) => (
						<li key={post.id}>{post.title}</li>
					))}
				</ul>
			}
			<hr />
			{content}
		</div>
	);
}

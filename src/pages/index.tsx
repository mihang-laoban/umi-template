import React from 'react';
import styles from './index.less';
import Welcome from '@/components/Welcome';
import Comment from '@/components/Comment';
import Clock from '@/components/Clock';
import Toggle from '@/components/Toggle';
import Greeting from '@/components/Greeting';
import LoginControl from '@/components/LoginControl';
import Mailbox from '@/components/Mailbox';
import Blog from '@/components/Blog';
import NameForm from '@/components/NameForm';
import FlavorForm from '@/components/FlavorForm';
import Reservation from '@/components/Reservation';
import Calculator from '@/components/Calculator';

let app = function () {
	const comment = {
		date: new Date(),
		text: 'I hope you enjoy learning React!',
		author: {
			name: 'Hello Kitty',
			avatarUrl: 'https://placekitten.com/g/64/64',
		},
	};
	const messages = ['React', 'Re: React', 'Re:Re: React'];

	const posts = [
		{ id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
		{
			id: 2,
			title: 'Installation',
			content: 'You can install React from npm.',
		},
	];

	return (
		<div>
			<h1 className={styles.title}>Page index</h1>
			<Welcome name={123} />
			<Welcome name={3} />
			<Welcome name={2} />
			<Welcome name={1} />
			<Comment
				date={comment.date}
				text={comment.text}
				author={comment.author}
			/>
			<Clock />
			<Clock />
			<Clock />
			<Clock />
			<Toggle />
			<Greeting isLoggedIn={false} />
			<LoginControl />
			<Mailbox unreadMessages={messages} />
			<Blog posts={posts} />
			<NameForm />
			<FlavorForm />
			<Reservation />
			<Calculator />
		</div>
	);
};

export default app;

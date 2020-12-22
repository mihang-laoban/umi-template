import React from 'react';
import UserGreeting from '@/components/UserGreeting';
import GuestGreeting from '@/components/GuestGreeting';

export default class extends React.Component<any> {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: true,
		};
	}
	render() {
		const isLoggedIn = this.props['isLoggedIn'];
		return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
	}
}

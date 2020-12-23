import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';

interface UserModelType {
	namespace: 'users';
	state: {};
	reducers: {
		getList: Reducer;
	};
	effects: {};
	subscriptions: {
		setup: Subscription;
	};
}

const UserModel: UserModelType = {
	namespace: 'users',

	state: {
		name: '',
	},

	reducers: {
		getList(state, action) {
			const data = [
				{
					key: '1',
					name: 'John Brown',
					age: 32,
					address: 'New York No. 1 Lake Park',
					tags: ['nice', 'developer'],
				},
				{
					key: '2',
					name: 'Jim Green',
					age: 42,
					address: 'London No. 1 Lake Park',
					tags: ['loser'],
				},
				{
					key: '3',
					name: 'Joe Black',
					age: 32,
					address: 'Sidney No. 1 Lake Park',
					tags: ['cool', 'teacher'],
				},
			];
			return data;
		},
	},
	effects: {
		*getList({ type, payload }, effects) {},
	},
	subscriptions: {
		setup({ dispatch, history }) {
			return history.listen(({ pathname }) => {
				if (pathname === '/users') {
					dispatch({
						type: 'getList',
					});
				}
			});
		},
	},
};

export default UserModel;

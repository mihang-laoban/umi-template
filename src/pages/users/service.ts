import { request } from '@@/plugin-request/request';

export const getRemoteList = async (params) => {
	return request('http://localhost:8000/api', {
		method: 'get',
		// params: { id: 1 },
	})
		.then(function (response) {
			return response;
		})
		.catch(function (error) {
			console.log(error);
		});
};

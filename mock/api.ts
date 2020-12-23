export default {
	// 支持值为 Object 和 Array
	'GET /api': [
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
	],

	// GET 可忽略
	'/api/users/1': { id: 1 },

	// 支持自定义函数，API 参考 express@4
	'POST /ping': (req, res) => {
		// 添加跨域请求头
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.end('ok');
	},
};

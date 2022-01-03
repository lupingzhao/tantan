
function baseRequest(url, method, data, {
	noAuth = false,
	noVerify = false
}) {
	let baseUrl = 'https://api.tzhxzs.com';
	let header = {
		'content-type': 'application/json',
	};
	if (uni.getStorageSync('token')) {
		header['Authori-zation'] = 'Bearer ' + uni.getStorageSync('token');
	}
	return new Promise((reslove, reject) => {
		uni.request({
			url: baseUrl + '/api/' + url,
			method: method || 'GET',
			header: header,
			data: data || {},
			timeout:10000,
			success: (res) => {
				reslove(res.data)
				if (res) {} else {
					reject(res.data);
				}
			},
			fail: (msg) => {
				let data = {
					mag: '请求失败',
					status: 1 //1没网
				}
				reject(data);
			}
		})
	});
}

const https = {};

['options', 'get', 'post', 'put', 'head', 'delete', 'trace', 'connect'].forEach((method) => {
	https[method] = (api, data, opt) => baseRequest(api, method, data, opt || {})
});



export default https;

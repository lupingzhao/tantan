import https from './index'

export default {
	getIndexData() {
		return https.get("v2/box/index", {
			noAuth:false,
			noVerify:false
		})
	}
}

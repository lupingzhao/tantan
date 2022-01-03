import dayjs from 'dayjs'
export default {
	countdown(time1) {
		// time1 为数值大的那个日期 结束时间 传毫秒数  

		let y, mm, D, H, m, s
		let text
		y = parseInt(dayjs().diff(dayjs(time1), 'years'))
		if (y > 0) {
			return y + '年前'
		}
		mm = parseInt(dayjs().diff(dayjs(time1), 'month'))
		if ( mm> 0) {
			return mm + '月前'
		}	
		D = parseInt(dayjs().diff(dayjs(time1), 'day'))
		if (D > 0) {
			return D + '天前'
		}
		H = parseInt(dayjs().diff(dayjs(time1), 'hour'))
		if (H > 0) {
			return H + '小时前'
		}
		m = parseInt(dayjs().diff(dayjs(time1), 'minute'))
		if (m > 0) {
			return m+ '分钟前'
		}
		s = parseInt(dayjs().diff(dayjs(time1), 'second'))
		if (s > 0) {
			return s + '秒前'
		}	

	},
}


// 获取 href 属性中跟在问号后面的部分
console.log(window.location.search)

// 获取整个 URL 为字符串
console.log(window.location.href)

// 当前网页的域名
console.log(document.domain)



// 获取路径参数
function getUrlParms(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null)
	return unescape(r[2]);
	return null;
}
// let state = getUrlParms('state')

// 请求案例
$.ajax({
	url: "https://tenapi.cn/zhihuresou/",
	type: "get",
	success: (data) => {
		console.log(JSON.parse(data));
		var htmlStr = template('render', JSON.parse(data))
		$('#container').html(htmlStr)
	}
});

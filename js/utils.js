(function () {
	window.httpGet = function (config) {
		var url = config.url;
		var params = config.data ? config.data : null;
		var async = config.async ? true : false;
		var httpRequest = new XMLHttpRequest();
		var type = config.dataType ? config.dataType : 'json';
		if (async) {
			httpRequest.onreadystatechange = function() { 
				if (httpRequest.readyState == 4 && httpRequest.status == 200 && typeof config.success === 'function') {
					var result = type === 'json' ? JSON.parse(httpRequest.responseText) : httpRequest.responseText;
					config.success(result);
				}
			}
		}
		httpRequest.open("GET", url, async);
		httpRequest.send(params);
		if (!async) {
			return  type === 'json' ? JSON.parse(httpRequest.responseText) : httpRequest.responseText;
		}
	}
})();
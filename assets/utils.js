define([], function(){
	var utils = {};

	utils.$ = document.querySelector.bind(document);

	utils.pointlock = function pointlock(element){
		element.requestPointerLock =
			element.requestPointerLock ||
			element.mozRequestPointerLock ||
			element.webkitRequestPointerLock;
		element.requestPointerLock();

		// Ask the browser to release the pointer
		document.exitPointerLock =
			document.exitPointerLock ||
			document.mozExitPointerLock ||
			document.webkitExitPointerLock;
		//document.exitPointerLock();
	}

	utils.ajax = function (method, url, options){
		var defer = Q.defer();
		options = options || {};

		for (var key in options.header){
			req.setRequestHeader(key, options.header[key]);
		}

		var req = new XMLHttpRequest();
		req.addEventListener("readystatechange", function(){
			if(req.readyState == 4) {
				if(req.status/100 == 2) { //2xx
					defer.resolve(req.responseText);
				} else {
					defer.reject(req.status);
				}
			}
		});
		req.addEventListener("progress", function(event){
			defer.notify(event.loaded / event.total);
		});
		req.addEventListener("error", function(err) {
			defer.reject(err);
		});
		req.open(method, url);
		req.send(options.data);

		return defer.promise;
	}
	utils.ajax.post = function (url, data, option){
		options = options || {};
		options.data = data;

		return utils.ajax("POST", url, options);
	}
	utils.ajax.get = function(url, options) {
		return utils.ajax("GET", url, options);
	}

	return utils;
});

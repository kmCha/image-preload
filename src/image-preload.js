var createImage = function() {
	var img = document.createElement("img");
	document.body.appendChild(img);
	return {
		setSrc: function(src) {
			img.src = src;
		}
	};
};

var createPreloadImage = function(src) {
	var proxyImg = new Image(),
		loadingImg = new Image(),
		realImg = createImage();

	loadingImg.src = "http://7xoxzw.com1.z0.glb.clouddn.com/16-1-12/64506391.jpg";

	proxyImg.onload = function() {
		realImg.setSrc(this.src);
	};

	return {
		setSrc: function(src) {
			realImg.setSrc(loadingImg.src);
			proxyImg.src = src;
		}
	};
};
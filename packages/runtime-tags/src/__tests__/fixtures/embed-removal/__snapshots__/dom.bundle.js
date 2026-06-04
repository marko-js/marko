// total: 2469 (min) 1238 (brotli)
// template.marko: 128 (min) 95 (brotli)
const $setup__script = _script("a0", ($scope) => {
	$signal($scope, 0).onabort = () => {
		console.log("cleaned up");
	};
	_on($scope.a, "click", function() {
		document.body.innerHTML = "";
	});
});

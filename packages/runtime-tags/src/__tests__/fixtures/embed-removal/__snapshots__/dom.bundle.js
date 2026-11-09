// template.marko
const $setup__script = _script("a0", ($scope) => {
	onAbort($scope, 0, () => {
		console.log("cleaned up");
	});
	_on($scope.a, "click", function() {
		document.body.innerHTML = "";
	});
});

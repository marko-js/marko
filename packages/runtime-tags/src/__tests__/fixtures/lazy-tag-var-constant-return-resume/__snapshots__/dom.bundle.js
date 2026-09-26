// template.marko
const $setup__script = _script("b0", ($scope) => _on($scope.d, "click", function() {
	$scope.e();
	$scope.f.api();
}));

// child.marko
function $_return() {
	return console.log("called");
}
_resumed.a0 = $_return;

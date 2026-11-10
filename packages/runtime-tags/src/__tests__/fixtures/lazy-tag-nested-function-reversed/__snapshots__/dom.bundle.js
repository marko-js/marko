// child.marko
function $onPress() {
	console.log("pressed");
}
_resumed.a0 = $onPress;

// grand-child.marko
const $input_onPress__script = _script("b0", ($scope) => _on($scope.a, "click", $scope.d));

// tags/my-button.marko
const $input__script = _script("b0", ($scope) => _attrs_script($scope, "a"));

// template.marko
function $onClick($scope) {
	return function() {
		console.log($scope.b);
	};
}
_resume("a0", $onClick);

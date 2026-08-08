// tags/my-button.marko
const $input__script = _script("b0", ($scope) => _attrs_script($scope, "a"));

// template.marko
const $onClick = ($scope) => function() {
	console.log($scope.b);
};
_resume("a0", $onClick);

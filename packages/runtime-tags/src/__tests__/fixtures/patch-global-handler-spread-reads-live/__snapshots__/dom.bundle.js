// tags/read-button.marko
const $input__script = _script("b0", ($scope) => _attrs_script($scope, "a"));

// template.marko
const $out = _let(2, ($scope) => _text($scope.b, $scope.c));
const $onClick = ($scope) => function() {
	$out($scope, $scope.$.brand);
};
_resumed.a0 = $onClick;

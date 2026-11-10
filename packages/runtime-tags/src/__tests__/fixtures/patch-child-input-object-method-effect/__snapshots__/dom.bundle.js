// tags/probe.marko
const $seen = _let(6, ($scope) => _text($scope.a, $scope.g));
const $input_opts__OR__input_label__script = _script_patch("b0 d e", ($scope) => $seen($scope, $scope.d.describe($scope.e)));

// template.marko
function $opts(label) {
	return `${label}!`;
}
_resumed.a0 = $opts;

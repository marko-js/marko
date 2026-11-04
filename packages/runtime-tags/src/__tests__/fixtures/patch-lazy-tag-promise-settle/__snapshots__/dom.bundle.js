// template.marko
const $placeholder_content = _content$1("b1", "<span class=loading>...</span>");

// probe.marko
const $settled = _let(4, ($scope) => _text($scope.a, $scope.e ? "settled" : "pending"));
const $input_promise__script = _script_patch("a0 d", ($scope) => $scope.d.then(() => {
	$settled($scope, true);
}));

// template.marko
const $open__render = /*@__PURE__*/ _render(($scope) => _text($scope.b, String($scope.c)));
const $open = /*@__PURE__*/ _let(2, ($scope) => {
	$open__render($scope);
	_attr_details_or_dialog_open($scope, "a", $scope.c, $openChange($scope));
});
const $setup__script = _script("a1", ($scope) => _attr_details_or_dialog_open_script($scope, "a"));
function $openChange($scope) {
	return (_new_open) => {
		$open($scope, _new_open);
	};
}
_resume("a0", $openChange);

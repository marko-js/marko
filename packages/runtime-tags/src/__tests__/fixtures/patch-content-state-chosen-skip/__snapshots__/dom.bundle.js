// template.marko
let contentRenders = 0;
function rendering() {
	contentRenders++;
	return "";
}
const $two_content__input_b = /*@__PURE__*/ _closure_get_patch("a3", 14, ($scope) => _text($scope.a, $scope._.g), 0, "a7", 1);
const $two_content__setup = ($scope) => {
	$two_content__input_b($scope);
	_text($scope.b, rendering());
};
const $two_content = _content("a2", "<strong>two <!><!></strong>", "Db%b%", $two_content__setup);
const $one_content__input_b = /*@__PURE__*/ _closure_get_patch("a1", 14, ($scope) => _text($scope.a, $scope._.g), 0, "a7", 0);
const $one_content__setup = ($scope) => {
	$one_content__input_b($scope);
	_text($scope.b, rendering());
};
const $one_content = _content("a0", "<em>one <!><!></em>", "Db%b%", $one_content__setup);
const $mode__OR__one__OR__two = /*@__PURE__*/ _or(10, ($scope) => _attr_content($scope, "b", $scope.h ? $scope.i : $scope.j), 2);
const $attrs__script = _script_patch("a5 g", ($scope) => {
	_attrs_script($scope, "c");
	_attrs_script($scope, "d");
});
const $attrs = /*@__PURE__*/ _const(12, ($scope) => {
	_attrs_content($scope, "c", $scope.m);
	_attrs_partial_content($scope, "d", $scope.m, { id: 1 });
	$attrs__script($scope);
});
const $input_b__OR__mode__OR__one__OR__two = /*@__PURE__*/ _or_patch("a8", 11, ($scope) => $attrs($scope, {
	class: $scope.g,
	content: $scope.h ? $scope.i : $scope.j
}), 3);
const $mode = _let(7, ($scope) => {
	$mode__OR__one__OR__two($scope);
	$input_b__OR__mode__OR__one__OR__two($scope);
});
const $setup__script = _script("a6", ($scope) => _on($scope.a, "click", function() {
	$mode($scope, !$scope.h);
}));
const $status__script = _script_patch("a4 n", ($scope) => console.log($scope.n));

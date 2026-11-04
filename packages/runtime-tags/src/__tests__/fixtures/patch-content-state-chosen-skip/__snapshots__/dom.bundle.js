// template.marko
let contentRenders = 0;
function rendering() {
	contentRenders++;
	return "";
}
const $two_content__input_b = /*@__PURE__*/ _closure_get_patch("a3", 12, ($scope) => _text($scope.a, $scope._.g), 0, "a6", 1);
const $two_content__setup = ($scope) => {
	$two_content__input_b($scope);
	_text($scope.b, rendering());
};
const $two_content = _content("a2", "<strong>two <!><!></strong>", "Db%b%", $two_content__setup);
const $one_content__input_b = /*@__PURE__*/ _closure_get_patch("a1", 12, ($scope) => _text($scope.a, $scope._.g), 0, "a6", 0);
const $one_content__setup = ($scope) => {
	$one_content__input_b($scope);
	_text($scope.b, rendering());
};
const $one_content = _content("a0", "<em>one <!><!></em>", "Db%b%", $one_content__setup);
const $mode__OR__one__OR__two = /*@__PURE__*/ _or(10, ($scope) => {
	_attr_content($scope, "b", $scope.h ? $scope.i : $scope.j);
	_attr_content($scope, "c", $scope.h ? $scope.i : $scope.j);
	_attr_content($scope, "d", $scope.h ? $scope.i : $scope.j);
}, 2);
const $mode = _let(7, $mode__OR__one__OR__two);
const $setup__script = _script("a5", ($scope) => _on($scope.a, "click", function() {
	$mode($scope, !$scope.h);
}));
const $status__script = _script("a4", ($scope) => console.log($scope.l));

// template.marko
const $Panel_content__walks = "D l";
const $Panel_content__template = "<em> </em>";
const $Panel_content__label = ($scope, label) => _text($scope.a, label);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => $Panel_content__label($scope, $temp.label);
const $Panel_content = _content("a0", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_attrs_label__OR__open__OR__Panel = /*@__PURE__*/ _or(9, ($scope) => $dynamicTag($scope, $scope.h ? "b" : $scope.i, ($_) => ({ label: $scope.g })), 2);
const $open = /*@__PURE__*/ _let(7, $input_attrs_label__OR__open__OR__Panel);
const $setup__script = _script("a1", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.h);
}));
const $input_attrs_label = fill("a2", /*@__PURE__*/ _const(6, ($scope) => {
	$Panel_content__label($scope.a, $scope.g);
	$input_attrs_label__OR__open__OR__Panel($scope);
}));

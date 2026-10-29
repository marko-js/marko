// template.marko
const $Panel_content__walks = "D l";
const $Panel_content__template = "<em> </em>";
const $Panel_content__shout__script = _script("a1", ($scope) => document.body.dataset.label = $scope.e);
const $Panel_content__shout = /*@__PURE__*/ _const(4, ($scope) => {
	_text($scope.a, $scope.e);
	$Panel_content__shout__script($scope);
});
const $Panel_content__label = ($scope, label) => $Panel_content__shout($scope, label + "!");
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => $Panel_content__label($scope, $temp.label);
const $Panel_content = _content("a0", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_label__OR__open__OR__Panel = /*@__PURE__*/ _fill("a3", 5, /*@__PURE__*/ _or(8, ($scope) => $dynamicTag($scope, $scope.g ? "b" : $scope.h, ($_) => ({ label: $scope.f })), 2));
const $open = _let(6, $input_label__OR__open__OR__Panel);
const $setup__script = _script("a2", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.g);
}));

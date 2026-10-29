// template.marko
const $Panel_content__walks = "D l";
const $Panel_content__template = "<em> </em>";
const $Other_content__label = ($scope, label) => _text($scope.a, label);
const $Other_content__$params = ($scope, $params3) => $Other_content__label($scope, $params3[0]);
const $Other_content = _content("a1", "<i> </i>", "D ", 0, $Other_content__$params);
const $Panel_content__label = ($scope, label) => _text($scope.a, label);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__label($scope, $params2[0]);
const $Panel_content = _content("a0", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1, 0, 0, 1);
const $input_label__OR__open__OR__Panel__OR__Other = /*@__PURE__*/ _fill_join("a3", 5, /*@__PURE__*/ _or(9, ($scope) => $dynamicTag($scope, $scope.g ? $scope.i : $scope.h, ($_) => [$scope.f]), 3));
const $open = _let(6, $input_label__OR__open__OR__Panel__OR__Other);
const $setup__script = _script("a2", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.g);
}));

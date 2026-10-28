// tags/outer.marko
const $for_content__input_label = /*@__PURE__*/ _fill_join("b1", 4, /*@__PURE__*/ _for_closure(1, ($scope) => _attr($scope.a, "title", $scope._.e)));
const $for_content__setup = $for_content__input_label;
const $for_content__r = ($scope, r) => _text($scope.b, r);
const $for_content__$params = ($scope, $params2) => $for_content__r($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed(1, "<div> </div>", " D ", $for_content__setup, $for_content__$params);
const $rows = /*@__PURE__*/ _fill_let("b2", 5, ($scope) => $for($scope, [$scope.f]));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$rows($scope, []);
}));

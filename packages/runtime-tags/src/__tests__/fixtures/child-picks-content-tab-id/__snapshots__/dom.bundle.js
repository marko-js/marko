// template.marko
const $tab_content2__s = /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._.g), 0, "a1");
const $tab_content2 = _content("a3", "B<!>", "b%", $tab_content2__s);
const $tab_content__input_y = /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._.f), 0, "a0");
const $tab_content = _content("a2", "A<!>", "b%", $tab_content__input_y);
const $s = /*@__PURE__*/ _let(6, /* @__PURE__ */ _closure($tab_content2__s));
const $setup__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$s($scope, +$scope.g + 1);
}));

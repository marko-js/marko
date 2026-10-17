// tags/panel.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _fill_join("b1", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e)));
const $if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__input_content);
const $input_open = ($scope, input_open) => $if($scope, input_open ? 0 : 1);

// template.marko
const $panel_content__p_text = /*@__PURE__*/ _fill_join_closure("a3", 3, /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._.d), 0, "a1"), 0);
const $panel_content = _content$1("a2", "<p> </p>", "D ", $panel_content__p_text);
const $for_content__open = _resumed.a7 = /*@__PURE__*/ _for_closure(1, ($scope) => $input_open($scope.a, $scope._.f));
const $open = /*@__PURE__*/ _fill_let("a5", 5, $for_content__open);
const $setup__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));

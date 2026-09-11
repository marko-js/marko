// tags/panel/index.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_body = /*@__PURE__*/ _fill_join("b0", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e)));
const $if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__input_body);
const $input_open = ($scope, input_open) => $if($scope, input_open ? 0 : 1);

// template.marko
const $body_content = _content_resume("a1", "<em> </em>", "D ", /* @__PURE__ */ _global_join("brand", "a0", /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.a, $scope.$.brand))));
const $count = /*@__PURE__*/ _let(2, ($scope) => $input_open($scope.a, $scope.c % 2 === 0));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.c + 1);
}));

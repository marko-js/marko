// tags/panel.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $open = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));

// template.marko
const $panel_content__x__OR__k = /*@__PURE__*/ _or(4, ($scope) => _text($scope.b, $scope.c + ":" + $scope.d));
const $panel_content__x = /*@__PURE__*/ _const(2, $panel_content__x__OR__k);
const $panel_content__input_label = /*@__PURE__*/ _closure_get(4, ($scope) => $panel_content__x($scope, $scope._.d + "!"), 0, "a1");
const $panel_content__k = /*@__PURE__*/ _let(3, $panel_content__x__OR__k);
const $panel_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$panel_content__k($scope, +$scope.d + 1);
}));
const $panel_content__setup = ($scope) => {
	$panel_content__input_label($scope);
	$panel_content__k($scope, 0);
	$panel_content__setup__script($scope);
};
const $panel_content = _content("a2", "<button class=k> </button>", " D ", $panel_content__setup);

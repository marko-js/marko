// template.marko
const $for_content__item = ($scope, item) => _text($scope.a, item);
const $for_content__$params = ($scope, $params3) => $for_content__item($scope, $params3[0]);
const $if_content2__label = /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._._.e), ($scope) => $scope._._, "a0");
const $if_content__if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content2__label);
const $if_content__label = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__if($scope, $scope._.e ? 0 : 1));
const $if_content__setup = ($scope) => {
	$if_content__label._($scope);
	$if_content__items._($scope);
};
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed(1, "<li> </li>", "D ", 0, $for_content__$params);
const $if_content__items = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__for($scope, [$scope._.f]));
const $panel_content__if = /*@__PURE__*/ _if(0, "<!><!><ul></ul>", "b%b ", $if_content__setup);
const $panel_content__open = /*@__PURE__*/ _let(6, ($scope) => $panel_content__if($scope, $scope.g ? 0 : 1));
const $panel_content__setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$panel_content__open($scope, !$scope.g);
}));
const $panel_content__setup = ($scope) => {
	$panel_content__open($scope, true);
	$panel_content__setup__script($scope);
};
const $panel_content__$params = ($scope, $params2) => {
	$panel_content__label($scope, $params2[0].label);
	$panel_content__items($scope, $params2[0].items);
};
const $panel_content__label__closure = /*@__PURE__*/ _closure($if_content2__label);
const $panel_content__label = /*@__PURE__*/ _const(4, ($scope) => {
	$if_content__label($scope);
	$panel_content__label__closure($scope);
});
const $panel_content__items = /*@__PURE__*/ _const(5, $if_content__items);
const $panel_content = _content$1("a2", "<!><!><button>toggle</button>", "b%b ", $panel_content__setup, $panel_content__$params);

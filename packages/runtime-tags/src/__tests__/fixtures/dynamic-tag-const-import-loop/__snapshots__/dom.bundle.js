// tags/card.marko
const $template = "<button class=toggle>toggle</button><!><!>";
const $walks = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $open = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script$1 = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));
function $setup($scope) {
	$open($scope, false);
	$setup__script$1($scope);
}
const $input_content = /*@__PURE__*/ _const(4, $if_content__input_content);

// template.marko
const $type_content__setup = ($scope) => _text($scope.a, $scope._.M);
const $type_content = _content("a0", "item <!>", "b%", $type_content__setup);
const $for_content__setup = ($scope) => {
	$setup($scope.a);
	$input_content($scope.a, $type_content($scope));
};
const $for = /*@__PURE__*/ _for_until_unkeyed(1, /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks), $for_content__setup);
const $count = /*@__PURE__*/ _let(2, ($scope) => $for($scope, [
	$scope.c,
	0,
	1
]));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.c + 1);
}));

// tags/my-tag.marko
const $template = "<button>open</button><!><!>";
const $walks = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _if_closure_patch("b0", 1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e));
const $if$1 = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $open = /*@__PURE__*/ _fill_let("b2", 5, ($scope) => $if$1($scope, $scope.f ? 0 : 1));
const $setup__script$1 = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));
function $setup($scope) {
	$setup__script$1($scope);
	$open($scope, true);
}
const $input_content = /*@__PURE__*/ _const(4, $if_content__input_content);

// template.marko
const $mytag_content__input_label = /*@__PURE__*/ _closure_get_patch("a0", 6, ($scope) => _text($scope.a, $scope._._.e), ($scope) => $scope._._, "a3", 0);
const $mytag_content = _content("a1", "<p> </p>", "D ", $mytag_content__input_label);
const $if_content__setup = ($scope) => {
	$setup($scope.a);
	$input_content($scope.a, $mytag_content($scope));
};
const $if = /*@__PURE__*/ _if(1, /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks), $if_content__setup);
const $show = _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.f);
}));

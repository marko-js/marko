// tags/my-btn.marko
const $else_content__input__script = _script("b1", ($scope) => _attrs_script($scope, "a"));
const $else_content__input = /*@__PURE__*/ _if_closure(0, 1, ($scope) => {
	_attrs_content($scope, "a", $scope._.c);
	$else_content__input__script($scope);
});
const $else_content__setup = $else_content__input;
const $if_content__input__script = _script("b0", ($scope) => _attrs_script($scope, "a"));
const $if_content__input = /*@__PURE__*/ _if_closure(0, 0, ($scope) => {
	_attrs_content($scope, "a", $scope._.c);
	$if_content__input__script($scope);
});
const $if = /*@__PURE__*/ _if(0, "<a></a>", " ", $if_content__input, "<button></button>", " ", $else_content__setup);
const $input_href = ($scope, input_href) => $if($scope, input_href ? 0 : 1);
const $input = /*@__PURE__*/ _const(2, ($scope) => {
	$input_href($scope, $scope.c.href);
	$if_content__input($scope);
	$else_content__input($scope);
});

// template.marko
const $mybtn_content__count = /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._.e), 0, "a0");
const $mybtn_content = /*@__PURE__*/ _content("a1", "Label <!>", "b%", $mybtn_content__count);
const $href = /*@__PURE__*/ _let(3, ($scope) => $input($scope.c, {
	href: $scope.d,
	class: "btn",
	content: $mybtn_content($scope)
}));
const $count = /*@__PURE__*/ _let(4, /* @__PURE__ */ _closure($mybtn_content__count));
const $setup__script = _script("a2", ($scope) => {
	_on($scope.a, "click", function() {
		$href($scope, $scope.d ? void 0 : "/x");
	});
	_on($scope.b, "click", function() {
		$count($scope, +$scope.e + 1);
	});
});

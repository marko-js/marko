// tags/child.marko
function $setup$1($scope) {
	_return($scope, "blue");
}

// tags/swatch.marko
const $template = "<style></style><div class=swatch></div>";
function $setup($scope) {
	_style_shell($scope, "a");
}
const $input_color = /*@__PURE__*/ _const(3, ($scope) => _style_rule_item($scope.a, "--M_c0", $scope.d));

// template.marko
const $Box_content__walks = " c";
const $Box_content__template = "<style></style><div class=box></div>";
const $Later_content__walks = "b%c";
const $Later_content__template = "<!><!><!>";
const $await_content__v = ($scope, v) => _text($scope.a, v);
const $await_content__$params = ($scope, $params4) => $await_content__v($scope, $params4[0]);
const $await_content = /*@__PURE__*/ _await_content(0, "<span> </span>", "D ");
const $Later_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $Later_content__setup = $await_content;
const $Later_content__value = $Later_content__await_promise;
const $if_content__color = ($scope, color) => {
	$Box_content__color($scope.c, color);
	$input_color($scope.d, color);
	$Later_content__value($scope.e, color);
};
const $if_content__setup = ($scope) => {
	$setup$1($scope.a);
	$Box_content__setup($scope.c);
	$setup($scope.d);
	$Later_content__setup($scope.e);
	_var($scope, 0, $if_content__color);
};
const $Box_content__setup = ($scope) => _style_shell($scope, "a");
const $Box_content__color = /*@__PURE__*/ _const(3, ($scope) => _style_rule_item($scope.a, "--M_a0", $scope.d));
const $if = /*@__PURE__*/ _if(4, /*@__PURE__*/ ((_w0, _w1, _w2, _w3) => `<!>${_w0}${_w1}${_w2}${_w3}<!>`)("", $Box_content__template, $template, $Later_content__template), /*@__PURE__*/ ((_w0, _w1, _w2, _w3) => `0${_w0}&b/${_w1}&/${_w2}&/${_w3}&b`)("", $Box_content__walks, " c", $Later_content__walks), $if_content__setup);
const $open = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.d, "click", function() {
	$open($scope, !$scope.g);
}));

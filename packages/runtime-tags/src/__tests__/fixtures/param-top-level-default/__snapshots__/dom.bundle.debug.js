// tags/child.marko
const $template$1 = "<!><!><!><!>";
const $walks$1 = "b%b%c";
const $setup$1 = () => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, 0, 1);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/1", 0, 0, 1);
const $input_content = ($scope, input_content) => {
	$dynamicTag($scope, input_content, () => ["one"]);
	$dynamicTag2($scope, input_content, () => ["two", 0]);
};
const $input = ($scope, input) => $input_content($scope, input.content);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $Local_content__walks = "D%c%l", $Local_content__template = "<div id=local><!>:<!></div>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<ul></ul><button id=x>x</button><button id=y>y</button>`)($template$1, $Local_content__template);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b b b`)($walks$1, $Local_content__walks);
const $Local_content__b = ($scope, b) => _text($scope["#text/1"], b);
const $Local_content__y__OR__$b = /*@__PURE__*/ _or(5, ($scope) => $Local_content__b($scope, void 0 !== $scope.$b2 ? $scope.$b2 : $scope._.y + 100));
const $Local_content__y = /*@__PURE__*/ _closure_get("y", $Local_content__y__OR__$b);
const $Local_content__setup = /*@__PURE__*/ _child_setup($Local_content__y);
const $Local_content__$b = /*@__PURE__*/ _const("$b2", $Local_content__y__OR__$b);
const $Local_content__a = ($scope, a) => _text($scope["#text/0"], a);
const $Local_content__$params = ($scope, $params3) => {
	$Local_content__a($scope, $params3[0]);
	$Local_content__$b($scope, $params3[1]);
};
const $for_content__label = ($scope, label) => _text($scope["#text/0"], label);
const $for_content__x__OR__$label = /*@__PURE__*/ _or(4, ($scope) => $for_content__label($scope, void 0 !== $scope.$label ? $scope.$label : $scope._.x));
const $for_content__x = /*@__PURE__*/ _for_closure("#ul/2", $for_content__x__OR__$label);
const $for_content__setup = $for_content__x;
const $for_content__$label = /*@__PURE__*/ _const("$label", $for_content__x__OR__$label);
const $for_content__$params = ($scope, $params4) => $for_content__$label($scope, ($params4?.[0]).label);
const $child_content__b = ($scope, b) => _text($scope["#text/1"], b);
const $child_content__x__OR__$b = /*@__PURE__*/ _or(5, ($scope) => $child_content__b($scope, void 0 !== $scope.$b ? $scope.$b : $scope._.x * 10));
const $child_content__x = /*@__PURE__*/ _closure_get("x", $child_content__x__OR__$b);
const $child_content__setup = $child_content__x;
const $child_content__$b = /*@__PURE__*/ _const("$b", $child_content__x__OR__$b);
const $child_content__a = ($scope, a) => _text($scope["#text/0"], a);
const $child_content__$params = ($scope, $params2) => {
	$child_content__a($scope, $params2[0]);
	$child_content__$b($scope, $params2[1]);
};
const $child_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<div id=known><!>:<!></div>", "D%c%l", $child_content__setup, $child_content__$params);
const $x__closure = /*@__PURE__*/ _closure($child_content__x);
const $x = /*@__PURE__*/ _let("x/5", ($scope) => {
	$x__closure($scope);
	$for_content__x($scope);
});
const $y__closure = /*@__PURE__*/ _closure($Local_content__y);
const $y = /*@__PURE__*/ _let("y/6", $y__closure);
const $for = /*@__PURE__*/ _for_of("#ul/2", "<li> </li>", "D l", $for_content__setup, $for_content__$params);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/3"], "click", function() {
		$x($scope, $scope.x + 1);
	});
	_on($scope["#button/4"], "click", function() {
		$y($scope, $scope.y + 1);
	});
});
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $child_content($scope));
	$Local_content__setup._($scope["#childScope/1"], $scope);
	$Local_content__a($scope["#childScope/1"], "L");
	$Local_content__$b($scope["#childScope/1"], void 0);
	$x($scope, 1);
	$y($scope, 1);
	$for($scope, [[{}, { label: "a" }]]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

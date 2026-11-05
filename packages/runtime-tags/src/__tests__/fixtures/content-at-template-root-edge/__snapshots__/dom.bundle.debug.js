// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<div>${_w0}</div><div>x${_w1}</div><button>inc</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `D/${_w0}&lDb/${_w1}&l b`)("b%c", "b%c");
const $child_content2__n = /*@__PURE__*/ _closure_get("n/4", ($scope) => _text($scope["#text/0"], $scope._.n), 0, "__tests__/template.marko_2_n#0:3/subscribe");
const $child_content2__setup = $child_content2__n;
const $child_content2 = /*@__PURE__*/ _content("__tests__/template.marko_2*content", " ", " ", $child_content2__setup);
const $child_content__n = /*@__PURE__*/ _closure_get("n/4", ($scope) => _text($scope["#text/0"], $scope._.n), 0, "__tests__/template.marko_1_n#0:3/subscribe");
const $child_content__setup = $child_content__n;
const $child_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", " ", " ", $child_content__setup);
const $n__closure = /*@__PURE__*/ _closure($child_content__n, $child_content2__n);
const $n = /*@__PURE__*/ _let("n/3", $n__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $child_content($scope));
	$input_content_direct($scope["#childScope/1"], $child_content2($scope));
	$n($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

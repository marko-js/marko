// tags/provider.marko
const $template$1 = "<button class=bump>bump</button>";
const $walks$1 = " b";
const $body_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope, "#text/0", $scope._.count));
const $body_content__setup = $body_content__count;
const $body_content = _content_resume("__tests__/tags/provider.marko_1*content", "<div>value <!></div>", "Db%", $body_content__setup);
const $count__closure = /*@__PURE__*/ _closure($body_content__count);
const $count = /*@__PURE__*/ _let("count/4", $count__closure);
const $input_n = $count;
const $body = /*@__PURE__*/ _const("body", ($scope) => _return($scope, $scope.body));
const $setup__script$1 = _script("__tests__/tags/provider.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup$1($scope) {
	$body($scope, { content: $body_content($scope) });
	$setup__script$1($scope);
}
const $input = ($scope, input) => $input_n($scope, input.n);
var provider_default = /*@__PURE__*/ _template("__tests__/tags/provider.marko", $template$1, " b", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<button id=toggle>toggle</button><!><!>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&0${_w1}& b%c`)(" b", " b");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/5");
const $a__OR__b__OR__sel = /*@__PURE__*/ _or(9, ($scope) => $dynamicTag($scope, $scope.sel ? $scope.b : $scope.a), 2);
const $a = /*@__PURE__*/ _const("a", $a__OR__b__OR__sel);
const $sel = /*@__PURE__*/ _let("sel/8", $a__OR__b__OR__sel);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/4"], "click", function() {
	$sel($scope, 1 - $scope.sel);
}));
function $setup($scope) {
	_var($scope, "#childScope/0", $a);
	$setup$1($scope["#childScope/0"]);
	$input_n($scope["#childScope/0"], 1);
	_var($scope, "#childScope/2", $b);
	$setup$1($scope["#childScope/2"]);
	$input_n($scope["#childScope/2"], 2);
	$sel($scope, 0);
	$setup__script($scope);
}
const $b = /*@__PURE__*/ _const("b", $a__OR__b__OR__sel);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

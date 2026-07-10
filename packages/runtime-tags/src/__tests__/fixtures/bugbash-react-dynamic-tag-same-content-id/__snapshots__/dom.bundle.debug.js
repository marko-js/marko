// tags/provider.marko
const $template$1 = "";
const $walks$1 = "";
const $content_content__input_value = /*@__PURE__*/ _closure_get("value", ($scope) => _text($scope["#text/0"], $scope._.value));
const $content_content__setup = $content_content__input_value;
const $content_content = _content_resume("__tests__/tags/provider.marko_1_content", "<span>v:<!></span>", "Db%l", $content_content__setup);
const $content = /*@__PURE__*/ _const("content", ($scope) => _return($scope, $scope.content));
function $setup$1($scope) {
	$content($scope, { content: $content_content($scope) });
}
const $input = ($scope, input) => $value($scope, input.value);
const $value__closure = /*@__PURE__*/ _closure($content_content__input_value);
const $value = /*@__PURE__*/ _const("value", $value__closure);
var provider_default = /*@__PURE__*/ _template("__tests__/tags/provider.marko", "", "", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<div><!></div><button id=toggle>toggle</button><button id=inc-b>b++</button>`)("", "");
const $walks = /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&0${_w1}&D%l b b`)("", "");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/4");
const $flag__OR__one__OR__two = /*@__PURE__*/ _or(12, ($scope) => $dynamicTag($scope, $scope.flag ? $scope.one : $scope.two), 2);
const $flag = /*@__PURE__*/ _let("flag/7", $flag__OR__one__OR__two);
const $a = /*@__PURE__*/ _let("a/8", ($scope) => $value($scope["#childScope/0"], $scope.a));
const $b = /*@__PURE__*/ _let("b/9", ($scope) => $value($scope["#childScope/2"], $scope.b));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/5"], "click", function() {
		$flag($scope, !$scope.flag);
	});
	_on($scope["#button/6"], "click", function() {
		$b($scope, $scope.b + 1);
	});
});
function $setup($scope) {
	_var($scope, "#childScope/0", $one);
	$setup$1($scope["#childScope/0"]);
	_var($scope, "#childScope/2", $two);
	$setup$1($scope["#childScope/2"]);
	$flag($scope, true);
	$a($scope, 1);
	$b($scope, 10);
	$setup__script($scope);
}
const $one = _var_resume("__tests__/template.marko_0_one/var", /*@__PURE__*/ _const("one", $flag__OR__one__OR__two));
const $two = _var_resume("__tests__/template.marko_0_two/var", /*@__PURE__*/ _const("two", $flag__OR__one__OR__two));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// template.marko
const $template = "<!><!><button> </button>";
const $walks = "b%b D l";
const $Content_content__n = /*@__PURE__*/ _closure_get("n", ($scope) => _text($scope["#text/3"], $scope._.n));
const $Content_content__count = /*@__PURE__*/ _let("count/7", ($scope) => _text($scope["#text/2"], $scope.count));
const $Content_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#em/0"], "click", function() {
	$Content_content__count($scope, +$scope.count + 1);
}));
const $Content_content__setup = ($scope) => {
	$Content_content__n($scope);
	$Content_content__count($scope, 0);
	$Content_content__setup__script($scope);
};
const $Content_content__label = ($scope, label) => _text($scope["#text/1"], label);
const $Content_content__$params = ($scope, $params2) => $Content_content__label($scope, ($params2?.[0]).label);
const $Content_content = _content_resume("__tests__/template.marko_1*content", "<em><!> <!> <!></em>", " D%c%c%", $Content_content__setup, $Content_content__$params);
const $n__closure = /*@__PURE__*/ _closure($Content_content__n);
const $n = /*@__PURE__*/ _let("n/7", ($scope) => {
	_text($scope["#text/2"], $scope.n);
	$n__closure($scope);
});
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_show__OR__input_label__OR__Content = /*@__PURE__*/ _or(9, ($scope) => $dynamicTag($scope, $scope.input_show ? $scope.Content : "span", () => ({ label: $scope.input_label })), 2);
const $Content = /*@__PURE__*/ _const("Content", $input_show__OR__input_label__OR__Content);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$Content($scope, { content: $Content_content($scope) });
	$setup__script($scope);
}
const $input_show = /*@__PURE__*/ _const("input_show", $input_show__OR__input_label__OR__Content);
const $input_label = /*@__PURE__*/ _const("input_label", $input_show__OR__input_label__OR__Content);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

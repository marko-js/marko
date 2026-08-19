// tags/widget/index.marko
const $template$1 = "<section><span> </span><!></section>";
const $walks$1 = "E l%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = $dynamicTag;
const $input = ($scope, input) => {
	$input_value($scope, input.value);
	$input_content($scope, input.content);
};
var widget_default = /*@__PURE__*/ _template("__tests__/tags/widget/index.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)($walks$1);
const $widget_content__setup = ($scope) => _text($scope["#text/0"], $scope.$global.brand);
const $widget_content = /*@__PURE__*/ _content$1("__tests__/template.marko_1*content", "<div> </div>", "D ", $widget_content__setup);
const $count = /*@__PURE__*/ _let("count/2", ($scope) => $input_value($scope["#childScope/0"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $widget_content($scope));
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

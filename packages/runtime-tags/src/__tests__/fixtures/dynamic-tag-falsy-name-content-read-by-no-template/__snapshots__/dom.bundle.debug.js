// tags/a.marko
const $template$1 = "<div>A <!></div>";
const $walks$1 = "Db%l";
const $setup$1 = () => {};
const $input_x = ($scope, input_x) => _text($scope["#text/0"], input_x);
const $input = ($scope, input) => $input_x($scope, input.x);
var a_default = /*@__PURE__*/ _template("__tests__/tags/a.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $template = "<!><!><button></button>";
const $walks = "b%b b";
const $showA_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "Hello");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $showA_content);
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $dynamicTag($scope, $scope.show && a_default, () => ({
	x: 1,
	item: attrTag({})
})));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

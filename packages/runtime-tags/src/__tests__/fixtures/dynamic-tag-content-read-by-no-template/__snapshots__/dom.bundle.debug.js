// tags/a.marko
const $template$2 = "<div>A <!></div>";
const $walks$2 = "Db%l";
const $setup$2 = () => {};
const $input_x$1 = ($scope, input_x) => _text($scope["#text/0"], input_x);
const $input$1 = ($scope, input) => $input_x$1($scope, input.x);
var a_default = /*@__PURE__*/ _template("__tests__/tags/a.marko", $template$2, $walks$2, 0, $input$1);

// tags/b.marko
const $template$1 = "<span>B <!></span>";
const $walks$1 = "Db%l";
const $setup$1 = () => {};
const $input_x = ($scope, input_x) => _text($scope["#text/0"], input_x);
const $input = ($scope, input) => $input_x($scope, input.x);
var b_default = /*@__PURE__*/ _template("__tests__/tags/b.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $template = "<!><!><button></button>";
const $walks = "b%b b";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $useB = /*@__PURE__*/ _let("useB/2", ($scope) => $dynamicTag($scope, $scope.useB ? b_default : a_default, () => ({ x: 1 })));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$useB($scope, !$scope.useB);
}));
function $setup($scope) {
	$useB($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

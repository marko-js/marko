// tags/a.marko
const $template$2 = "<div>A <!> <!></div>";
const $walks$2 = "Db%c%l";
const $setup$2 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $input_label$1 = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = $dynamicTag$1;
const $input$1 = ($scope, input) => {
	$input_label$1($scope, input.label);
	$input_content($scope, input.content);
};
var a_default = /*@__PURE__*/ _template("__tests__/tags/a.marko", $template$2, $walks$2, 0, $input$1);

// tags/b.marko
const $template$1 = "<div>B <!></div>";
const $walks$1 = "Db%l";
const $setup$1 = ($_) => {};
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var b_default = /*@__PURE__*/ _template("__tests__/tags/b.marko", $template$1, $walks$1, 0, $input);

// tags/v:a.marko.register-default.js
_resumed["__tests__/tags/a.marko"] = a_default;

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>toggle</button>${_w0}<!><!>`)($template$2);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&%c`)($walks$2);
const $xBTag_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "Hello");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2", $xBTag_content);
const $Tag__OR__x = /*@__PURE__*/ _or(5, ($scope) => $dynamicTag($scope, $scope.x ? b_default : $scope.Tag, ($_) => ({ label: "second" })));
const $Tag = /*@__PURE__*/ _const("Tag", $Tag__OR__x);
const $x = /*@__PURE__*/ _let("x/4", $Tag__OR__x);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$x($scope, !$scope.x);
}));
function $setup($scope) {
	$input_label$1($scope["#childScope/1"], "first");
	$input_content($scope["#childScope/1"]);
	$Tag($scope, a_default);
	$x($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

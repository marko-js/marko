// tags/child.marko
const $template$2 = "<span> </span>";
const $walks$2 = "D l";
const $setup$2 = () => {};
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $input$1 = ($scope, input) => $input_value($scope, input.value);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$2, "D l", 0, $input$1);

// tags/wrapper.marko
const $template$1 = "<!><!><button>inc</button>";
const $walks$1 = "b%b b";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_type__OR__count = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.input_type, () => ({ value: $scope.count })));
const $count = /*@__PURE__*/ _let("count/5", $input_type__OR__count);
const $setup__script = _script("__tests__/tags/wrapper.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup$1($scope) {
	$count($scope, 1);
	$setup__script($scope);
}
const $input_type = /*@__PURE__*/ _const("input_type", $input_type__OR__count);
const $input = ($scope, input) => $input_type($scope, input.type);
var wrapper_default = /*@__PURE__*/ _template("__tests__/tags/wrapper.marko", $template$1, $walks$1, $setup$1, $input);

// tags/v:child.marko.register-default.js
_resumed["__tests__/tags/child.marko"] = child_default;

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_type($scope["#childScope/0"], child_default);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

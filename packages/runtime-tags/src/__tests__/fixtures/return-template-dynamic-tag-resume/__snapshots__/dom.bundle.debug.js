// tags/child.marko
const $template$2 = "<span> </span>";
const $walks$2 = "D l";
const $setup$2 = () => {};
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$2, "D l", 0, $input);

// tags/v:child.marko.register-default.js
_resumed["__tests__/tags/child.marko"] = child_default;

// tags/picker.marko
const $template$1 = "";
const $walks$1 = "";
function $setup$1($scope) {
	_return($scope, child_default);
}
var picker_default = /*@__PURE__*/ _template("__tests__/tags/picker.marko", "", "", /*@__PURE__*/ _return_setup($setup$1));

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><button>inc</button>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&b%b b`)("");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $Tag__OR__count = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.Tag, () => ({ value: $scope.count })), 1, "#scopeOffset/1");
const $Tag = /*@__PURE__*/ _const("Tag", $Tag__OR__count);
const $count = /*@__PURE__*/ _let("count/5", $Tag__OR__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	_var($scope, "#childScope/0", $Tag);
	$setup$1($scope["#childScope/0"]);
	$count($scope, 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

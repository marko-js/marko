// tags/child.marko
const $template$2 = "<span> </span>";
const $walks$2 = "D l";
const $setup$2 = () => {};
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $input$2 = ($scope, input) => $input_value($scope, input.value);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$2, "D l", 0, $input$2);

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
const $input$1 = ($scope, input) => $input_type($scope, input.type);
var wrapper_default = /*@__PURE__*/ _template("__tests__/tags/wrapper.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%c`)($walks$1);
const $if_content__getChild = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/0"], $scope._.getChild() ? "child" : "none"));
const $if_content__setup = $if_content__getChild;
const $getChild2 = /*@__PURE__*/ _const("getChild");
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_type($scope["#childScope/0"], child_default);
	$getChild2($scope, $getChild);
}
const $if = /*@__PURE__*/ _if("#text/1", "<div> </div>", "D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
function $getChild() {
	return child_default;
}
_resumed["__tests__/template.marko_0/getChild"] = $getChild;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

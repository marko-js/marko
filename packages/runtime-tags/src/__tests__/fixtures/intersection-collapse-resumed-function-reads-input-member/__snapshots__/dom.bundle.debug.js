// tags/log-count.marko
const $template$1 = "<button>log</button>";
const $walks$1 = " b";
const $count$1 = /*@__PURE__*/ _const("count");
const $input_count = $count$1;
const $setup__script = _script("__tests__/tags/log-count.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	console.log($scope.count());
}));
const $setup$1 = $setup__script;
const $input$1 = ($scope, input) => $input_count($scope, input.count);
var log_count_default = /*@__PURE__*/ _template("__tests__/tags/log-count.marko", $template$1, " b", $setup$1, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
const $on = /*@__PURE__*/ _const("on");
const $input_items_length__OR__on = ($scope) => $input_count($scope["#childScope/0"], $count($scope));
const $input_items = /*@__PURE__*/ _const("input_items", ($scope) => {
	$input_items_length($scope, $scope.input_items?.length);
	$on($scope, $scope.input_items.filter((item) => item.on).length);
	$input_items_length__OR__on($scope);
});
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
const $input_items_length = /*@__PURE__*/ _const("input_items_length");
const $input = ($scope, input) => $input_items($scope, input.items);
const $count = ($scope) => () => `${$scope.on} of ${$scope.input_items_length}`;
_resumed["__tests__/template.marko_0/count"] = $count;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

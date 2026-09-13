// tags/row.marko
const $template$1 = "<li><!><!></li>";
const $walks$1 = "D%b%l";
const $setup$1 = () => {};
const $input_item_name = ($scope, input_item_name) => _text($scope["#text/0"], input_item_name);
const $input_item_hot = ($scope, input_item_hot) => _text($scope["#text/1"], input_item_hot ? " 🔥" : "");
const $input$1 = ($scope, input) => $input_item($scope, input.item);
const $input_item = ($scope, input_item) => {
	$input_item_name($scope, input_item?.name);
	$input_item_hot($scope, input_item?.hot);
};
var row_default = /*@__PURE__*/ _template("__tests__/tags/row.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = "<ul></ul><button> </button>";
const $walks = " b D l";
const $for_content__item = ($scope, item) => $input_item($scope["#childScope/0"], item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $count = /*@__PURE__*/ _let("count/6", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of("#ul/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), 0, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items, (item) => item.id]);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

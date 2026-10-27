// template.marko
const $template = "<main><h1> </h1><ul></ul><button>Count <!></button></main>";
const $walks = "E l b Db%m";
const $for_content__item_label = ($scope, item_label) => _text($scope["#text/0"], item_label);
const $for_content__$params = ($scope, $params2) => $for_content__item_label($scope, $params2[0]?.label);
const $count = /*@__PURE__*/ _let("count/8", ($scope) => _text($scope["#text/3"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $for = /*@__PURE__*/ _for_of("#ul/1", "<li> </li>", "D ", 0, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items, "id"]);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_items($scope, input.items);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

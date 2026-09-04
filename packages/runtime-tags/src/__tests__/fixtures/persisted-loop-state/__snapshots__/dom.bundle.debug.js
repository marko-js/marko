// template.marko
const $template = "<main><ul></ul><button>Count <!></button></main>";
const $walks = "D b Db%m";
const $for_content__count = /*@__PURE__*/ _init_for_closure("__tests__/template.marko_1_count#6/init", "#ul/0", ($scope) => _text($scope["#text/1"], $scope._.count));
const $for_content__setup = $for_content__count;
const $for_content__item_label = ($scope, item_label) => _text($scope["#text/0"], item_label);
const $for_content__$params = ($scope, $params2) => $for_content__item_label($scope, $params2[0]?.label);
const $count = /*@__PURE__*/ _let("count/6", ($scope) => {
	_text($scope["#text/2"], $scope.count);
	$for_content__count($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li><!> (<!>)</li>", "D%c%", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items, "id"]);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

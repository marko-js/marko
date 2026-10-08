// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $for_content__count__OR__name__OR__item_id = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill2", "item_id", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "name", /*@__PURE__*/ _or(5, ($scope) => _text($scope["#text/0"], $scope.name + "/" + $scope.item_id + "#" + $scope._.count), 2)));
const $for_content__count = _shell_for_closure("__tests__/template.marko_1_count#0:5/init", "#text/0", $for_content__count__OR__name__OR__item_id);
const $for_content__setup = $for_content__count;
const $for_content__name = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "name", $for_content__count__OR__name__OR__item_id);
const $for_content__item_id = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill2", "item_id", $for_content__count__OR__name__OR__item_id);
const $for_content__$params = ($scope, $params2) => {
	$for_content__name($scope, $params2[0].name);
	$for_content__item_id($scope, $params2[0].id);
};
const $count = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "count/5", $for_content__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
const $for = /*@__PURE__*/ _for_of("#text/0", "<p> </p>", "D ", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items, (item) => item.id]);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

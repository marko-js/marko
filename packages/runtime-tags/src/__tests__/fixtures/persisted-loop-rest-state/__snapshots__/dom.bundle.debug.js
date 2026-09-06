// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $for_content__count__OR__id__OR__rest = /*@__PURE__*/ _fill_join("__tests__/template.marko1", "rest", /*@__PURE__*/ _fill_join("__tests__/template.marko0", "id", /*@__PURE__*/ _or(5, ($scope) => _text($scope["#text/0"], $scope.id + ":" + Object.keys($scope.rest).join("+") + "#" + $scope._.count), 2)));
const $for_content__count = /*@__PURE__*/ _init_for_closure("__tests__/template.marko_1_count#5/init", "#text/0", $for_content__count__OR__id__OR__rest);
const $for_content__setup = $for_content__count;
const $for_content__id = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "id", $for_content__count__OR__id__OR__rest);
const $for_content__rest = /*@__PURE__*/ _fill_const("__tests__/template.marko1", "rest", $for_content__count__OR__id__OR__rest);
const $for_content__$params = ($scope, $params2) => $for_content__$temp($scope, $params2?.[0]);
const $for_content__$temp = ($scope, $temp) => {
	(({ id, ...rest }) => $for_content__rest($scope, rest))($temp);
	$for_content__id($scope, $temp.id);
};
const $count = /*@__PURE__*/ _let("count/5", $for_content__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of("#text/0", "<p> </p>", "D ", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items, (item) => item.id]);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $for_content__count__OR__rest = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "rest", /*@__PURE__*/ _or(5, ($scope) => _text($scope["#text/0"], $scope["#LoopKey"] + ":" + Object.keys($scope.rest).join("+") + "#" + $scope._.count)));
const $for_content__count = _shell_for_closure("__tests__/template.marko_1_count#0:5/init", "#text/0", $for_content__count__OR__rest);
const $for_content__setup = $for_content__count;
const $for_content__rest = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "rest", $for_content__count__OR__rest);
const $for_content__$params = ($scope, $params2) => $for_content__$temp($scope, $params2[0]);
const $for_content__$temp = ($scope, $temp) => $for_content__rest($scope, (({ id, ...rest }) => rest)($temp));
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

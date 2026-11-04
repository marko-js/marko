// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $for_content__input_title__OR__count = /*@__PURE__*/ _or_patch("__tests__/template.marko_1_input_title#0:5_count#0:6/setup", 1, ($scope) => _text($scope["#text/0"], $scope._.input_title + " " + $scope["#LoopKey"] + " #" + $scope._.count));
const $for_content__input_title = /*@__PURE__*/ _for_closure_patch("__tests__/template.marko_1_input_title#0:5/setup", "#text/0", $for_content__input_title__OR__count, 7);
const $for_content__setup = ($scope) => {
	$for_content__input_title._($scope);
	$for_content__count._($scope);
};
const $for_content__count = /*@__PURE__*/ _for_closure_patch("__tests__/template.marko_1_count#0:6/setup", "#text/0", $for_content__input_title__OR__count, 8);
const $count = _let("count/6", $for_content__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of("#text/0", "<p> </p>", "D ", $for_content__setup);
const $input_items = ($scope, input_items) => $for($scope, [input_items, (item) => item]);
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_title($scope, input.title);
};
const $input_title = /*@__PURE__*/ _const("input_title", $for_content__input_title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

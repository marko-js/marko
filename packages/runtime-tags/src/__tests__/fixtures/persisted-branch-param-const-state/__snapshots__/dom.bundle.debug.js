// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if_content__count__OR__label = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "label", /*@__PURE__*/ _or(2, ($scope) => _text($scope["#text/0"], $scope.label + " #" + $scope._.count)));
const $if_content__label = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "label", $if_content__count__OR__label);
const $if_content__input_title = /*@__PURE__*/ _init_if_closure("__tests__/template.marko_1_input_title#5/init", "#text/0", 0, ($scope) => $if_content__label($scope, "[" + $scope._.input_title + "]"));
const $if_content__setup = ($scope) => {
	$if_content__input_title._($scope);
	$if_content__count._($scope);
};
const $if_content__count = /*@__PURE__*/ _init_if_closure("__tests__/template.marko_1_count#6/init", "#text/0", 0, $if_content__count__OR__label);
const $count = /*@__PURE__*/ _let("count/6", $if_content__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_title($scope, input.title);
};
const $input_title = /*@__PURE__*/ _const("input_title", $if_content__input_title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

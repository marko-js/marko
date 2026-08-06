// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if_content__input_title__OR__count = /*@__PURE__*/ _fill_join_if("__tests__/template.marko0", "input_title", /*@__PURE__*/ _or(1, ($scope) => _text($scope["#text/0"], $scope._.input_title + " #" + $scope._.count)), "#text/0", 0);
const $if_content__input_title = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_title__OR__count);
const $if_content__setup = ($scope) => {
	$if_content__input_title._($scope);
	$if_content__count._($scope);
};
const $if_content__count = /*@__PURE__*/ _resume_init("__tests__/template.marko_1_count/init", /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_title__OR__count));
const $count = /*@__PURE__*/ _let("count/6", $if_content__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
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
const $input_title = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_title", $if_content__input_title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

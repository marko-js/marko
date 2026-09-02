// template.marko
const $template = "<main><p><!> <!></p><!><button>+</button></main>";
const $walks = "E%c%l%b l";
const shout = (s) => s.toUpperCase() + "!";
var stamp;
const flag = "cli";
const $if_content__input_title__OR__count = /*@__PURE__*/ _fill_join_if("__tests__/template.marko0", "input_title", /*@__PURE__*/ _init_join("__tests__/template.marko_1_input_title#6/init", /*@__PURE__*/ _or(1, ($scope) => _text($scope["#text/0"], shout($scope._.input_title) + " #" + $scope._.count))), "#text/2", 0);
const $if_content__input_title = /*@__PURE__*/ _if_closure("#text/2", 0, $if_content__input_title__OR__count);
const $if_content__setup = ($scope) => {
	$if_content__input_title._($scope);
	$if_content__count._($scope);
};
const $if_content__count = /*@__PURE__*/ _init_if_closure("__tests__/template.marko_1_count#8/init", "#text/2", 0, $if_content__input_title__OR__count);
const $count = /*@__PURE__*/ _let("count/8", $if_content__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$count($scope, +$scope.count + 1);
	document.querySelector("main").dataset.flag = flag;
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
	_text($scope["#text/1"], stamp);
}
const $input_title = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_title", ($scope) => {
	$if_content__input_title($scope);
	_text($scope["#text/0"], shout($scope.input_title));
}, ($scope, input_title) => $if_content__input_title($scope));
const $if = /*@__PURE__*/ _if("#text/2", "<span> </span>", "D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

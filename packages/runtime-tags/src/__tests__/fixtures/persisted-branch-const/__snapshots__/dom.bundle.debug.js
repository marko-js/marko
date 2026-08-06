// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if_content__label = ($scope, label) => _text($scope["#text/0"], label);
const $if_content__input_title = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__label($scope, $scope._.input_title + "!"));
const $if_content__setup = ($scope) => {
	$if_content__input_title._($scope);
	$if_content__count._($scope);
};
const $if_content__doubled = ($scope, doubled) => _text($scope["#text/1"], doubled);
const $if_content__count = /*@__PURE__*/ _resume("__tests__/template.marko_1_count/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__doubled($scope, $scope._.count * 2)));
const $count = /*@__PURE__*/ _let("count/6", $if_content__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", "<p><!> <!></p>", "D%c%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_title($scope, input.title);
};
const $input_title = /*@__PURE__*/ _const("input_title", $if_content__input_title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

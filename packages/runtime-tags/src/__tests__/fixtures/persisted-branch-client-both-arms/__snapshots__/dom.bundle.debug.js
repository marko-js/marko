// template.marko
const $template = "<main><!><button>toggle</button></main>";
const $walks = "D%b l";
const $else_content__input_title = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_title", /*@__PURE__*/ _if_closure("#text/0", 1, ($scope) => _text($scope["#text/0"], $scope._.input_title)));
const $else_content__setup = $else_content__input_title;
const $if_content__input_title = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_title", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.input_title)));
const $if_content__setup = $if_content__input_title;
const $if = /*@__PURE__*/ _if("#text/0", "<b> </b>", "D ", $if_content__setup, "<i> </i>", "D ", $else_content__setup);
const $on = /*@__PURE__*/ _let("on/5", ($scope) => $if($scope, $scope.on ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	$on($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_title($scope, input.title);
const $input_title = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_title", ($scope) => {
	$if_content__input_title($scope);
	$else_content__input_title($scope);
});
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

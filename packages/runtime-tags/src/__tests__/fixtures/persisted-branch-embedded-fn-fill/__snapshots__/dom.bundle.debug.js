// template.marko
const $template = "<main><!><button>show</button></main>";
const $walks = "D%b l";
const $if_content__api = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "api", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/1"], $scope._.api.get())));
const $if_content__setup = ($scope) => {
	$if_content__api._($scope);
	$if_content__api_label._($scope);
};
const $if_content__api_label = /*@__PURE__*/ _fill_join("__tests__/template.marko1", "api_label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.api_label)));
const $api2 = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "api", ($scope) => {
	$api_label($scope, $scope.api.label);
	$if_content__api($scope);
});
const $api_label = /*@__PURE__*/ _fill_const("__tests__/template.marko1", "api_label", $if_content__api_label);
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => $api2($scope, {
	get: $api($scope),
	label: "title"
}));
const $if = /*@__PURE__*/ _if("#text/0", "<p><!>: <!></p>", "D%c%", $if_content__setup);
const $show = /*@__PURE__*/ _let("show/7", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, true);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_title($scope, input.title);
const $api = ($scope) => () => $scope.input_title;
_resume("__tests__/template.marko_0/api", $api);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

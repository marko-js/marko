// template.marko
const $template = "<main><div></div><span> </span><button>+</button></main>";
const $walks = "D bD l l";
const $if_content__input_title = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_title", /*@__PURE__*/ _if_closure("#div/0", 0, ($scope) => _text($scope["#text/0"], $scope._.input_title)));
const $if_content__setup = $if_content__input_title;
const $if = /*@__PURE__*/ _if("#div/0", "<p> </p>", "D ", $if_content__setup);
const $show = /*@__PURE__*/ _let("show/7", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_label($scope, input.label);
};
const $input_title = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_title", $if_content__input_title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

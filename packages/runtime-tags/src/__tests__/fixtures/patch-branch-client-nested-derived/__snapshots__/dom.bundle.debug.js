// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if_content2__label = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill1", "label", _closure_get("label/8", ($scope) => _text($scope["#text/0"], $scope._._.label), ($scope) => $scope._._, "__tests__/template.marko_2_label#0:6/subscribe"), 0);
const $if_content2__setup = $if_content2__label;
const $if_content__if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content2__setup);
const $if_content__show = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill2", "show", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__if($scope, $scope._.show ? 0 : 1)));
const $if_content__setup = $if_content__show;
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$setup__script($scope);
	$open($scope, false);
}
const $label__closure = /*@__PURE__*/ _closure($if_content2__label);
const $label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "label", $label__closure);
const $show = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill2", "show", $if_content__show);
const $input_title = ($scope, input_title) => {
	$label($scope, "t:" + input_title);
	$show($scope, input_title !== "hide");
};
const $input = ($scope, input) => $input_title($scope, input.title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

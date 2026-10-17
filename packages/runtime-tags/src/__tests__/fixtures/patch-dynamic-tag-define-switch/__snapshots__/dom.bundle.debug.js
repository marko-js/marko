// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $Other_content__input_label = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0/content", "input_label", /*@__PURE__*/ _closure_get("input_label/8", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_2_input_label#0:3/subscribe"), 1);
const $Other_content__setup = $Other_content__input_label;
const $Other_content = _content("__tests__/template.marko_2*content", "<i> </i>", "D ", $Other_content__setup);
const $Counter_content__input_label = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0/content", "input_label", /*@__PURE__*/ _closure_get("input_label/8", ($scope) => _text($scope["#text/1"], $scope._.input_label), 0, "__tests__/template.marko_1_input_label#0:3/subscribe"), 0);
const $Counter_content__n = /*@__PURE__*/ _let("n/3", ($scope) => _text($scope["#text/2"], $scope.n));
const $Counter_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$Counter_content__n($scope, +$scope.n + 1);
}));
const $Counter_content__setup = ($scope) => {
	$Counter_content__input_label($scope);
	$Counter_content__n($scope, 0);
	$Counter_content__setup__script($scope);
};
const $Counter_content = _content("__tests__/template.marko_1*content", "<button class=inc><!> <!></button>", " D%c%", $Counter_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_label__OR__input_which__OR__Counter__OR__Other = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_which", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _shell_or("__tests__/template.marko_0_input_label#3_input_which#4_Counter#5_Other#6/init", 7, ($scope) => $dynamicTag($scope, $scope.input_which ? $scope.Counter : $scope.Other, ($_) => ({ label: $scope.input_label })), 3)));
const $Counter = /*@__PURE__*/ _const("Counter", $input_label__OR__input_which__OR__Counter__OR__Other);
const $Other = /*@__PURE__*/ _const("Other", $input_label__OR__input_which__OR__Counter__OR__Other);
function $setup($scope) {
	$Counter($scope, { content: $Counter_content($scope) });
	$Other($scope, { content: $Other_content($scope) });
}
const $input_label__closure = /*@__PURE__*/ _closure($Counter_content__input_label, $Other_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", ($scope) => {
	$input_label__OR__input_which__OR__Counter__OR__Other($scope);
	$input_label__closure($scope);
});
const $input_which = /*@__PURE__*/ _const("input_which", $input_label__OR__input_which__OR__Counter__OR__Other);
const $input = ($scope, input) => {
	$input_which($scope, input.which);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);

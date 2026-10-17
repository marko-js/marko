// template.marko
const $template = "<!><!><p> </p>";
const $walks = "b1bD l";
_dynamic_tag_var_resume("#text/0");
const $Other_content__input_label = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/11", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_2_input_label#0:5/subscribe"), 1);
const $Other_content__setup = ($scope) => {
	$Other_content__input_label($scope);
	_return($scope, -1);
};
const $Other_content = _content("__tests__/template.marko_2*content", "<i> </i>", "D ", /*@__PURE__*/ _return_setup($Other_content__setup));
const $Counter_content__input_label = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/11", ($scope) => _text($scope["#text/1"], $scope._.input_label), 0, "__tests__/template.marko_1_input_label#0:5/subscribe"), 0);
const $Counter_content__n = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "n/3", ($scope) => {
	_text($scope["#text/2"], $scope.n);
	_return($scope, $scope.n);
});
const $Counter_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$Counter_content__n($scope, +$scope.n + 1);
}));
const $Counter_content__setup = ($scope) => {
	$Counter_content__input_label($scope);
	$Counter_content__setup__script($scope);
	$Counter_content__n($scope, 0);
};
const $Counter_content = _content("__tests__/template.marko_1*content", "<button class=inc><!> <!></button>", " D%c%", /*@__PURE__*/ _return_setup($Counter_content__setup));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, ($_) => $count);
const $input_label__OR__input_which__OR__Counter__OR__Other = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _or(9, ($scope) => $dynamicTag($scope, $scope.input_which ? $scope.Counter : $scope.Other, ($_) => ({ label: $scope.input_label })), 3));
const $Counter = /*@__PURE__*/ _const("Counter", $input_label__OR__input_which__OR__Counter__OR__Other);
const $Other = /*@__PURE__*/ _const("Other", $input_label__OR__input_which__OR__Counter__OR__Other);
function $setup($scope) {
	$Counter($scope, { content: $Counter_content($scope) });
	$Other($scope, { content: $Other_content($scope) });
}
const $count = _fill_var_resume("__tests__/template.marko_0_count#10/var", ($scope, count) => _text($scope["#text/2"], count));
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
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

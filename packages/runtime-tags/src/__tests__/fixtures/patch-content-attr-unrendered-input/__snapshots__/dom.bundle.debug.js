// template.marko
const $template = "<button class=inc> </button><section></section>";
const $walks = " D l b";
const $frag_content__input_rec_name = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_rec_name#0:6/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_rec_name", /*@__PURE__*/ _closure_get("input_rec_name/12", ($scope) => _text($scope["#text/0"], $scope._.input_rec_name), 0, "__tests__/template.marko_1_input_rec_name#0:6/subscribe"), 0));
const $frag_content__setup = $frag_content__input_rec_name;
const $frag_content = _content("__tests__/template.marko_1*content", "<em> </em>", "D ", $frag_content__setup);
const $n = /*@__PURE__*/ _let("n/8", ($scope) => _text($scope["#text/1"], $scope.n));
const $frag = ($scope, frag) => $frag_content2($scope, frag?.content);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
	$frag($scope, { content: $frag_content($scope) });
}
const $input_on__OR__frag_content = /*@__PURE__*/ _or(11, ($scope) => _attr_content($scope, "#section/2", $scope.input_on ? $scope.frag_content : null));
const $frag_content2 = /*@__PURE__*/ _const("frag_content", $input_on__OR__frag_content);
const $input_on = /*@__PURE__*/ _const("input_on", $input_on__OR__frag_content);
const $input = ($scope, input) => {
	$input_rec($scope, input.rec);
	$input_on($scope, input.on);
};
const $input_rec = ($scope, input_rec) => $input_rec_name($scope, input_rec?.name);
const $input_rec_name__closure = /*@__PURE__*/ _closure($frag_content__input_rec_name);
const $input_rec_name = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_rec_name", $input_rec_name__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<main><section></section><p> </p></main>";
const $walks = "D bD m";
const $frag_content__input_note = /*@__PURE__*/ _closure_get("input_note", ($scope) => _text($scope["#text/0"], $scope._.input_note));
const $frag_content__setup = $frag_content__input_note;
const $frag_content = _content_resume("__tests__/template.marko_1*content", "<em> </em>", "D ", $frag_content__setup);
const $frag = ($scope, frag) => $frag_content2($scope, frag?.content);
const $input_mode__OR__frag_content = /*@__PURE__*/ _or(8, ($scope) => _attr_content($scope, "#section/0", $scope.input_mode ? $scope.frag_content : null));
const $frag_content2 = /*@__PURE__*/ _const("frag_content", $input_mode__OR__frag_content);
function $setup($scope) {
	$frag($scope, { content: $frag_content($scope) });
}
const $input_mode = /*@__PURE__*/ _const("input_mode", $input_mode__OR__frag_content);
const $input_note__closure = /*@__PURE__*/ _closure($frag_content__input_note);
const $input_note = /*@__PURE__*/ _const("input_note", ($scope) => {
	$input_note__closure($scope);
	_text($scope["#text/1"], $scope.input_note);
});
const $input = ($scope, input) => {
	$input_note($scope, input.note);
	$input_mode($scope, input.mode);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

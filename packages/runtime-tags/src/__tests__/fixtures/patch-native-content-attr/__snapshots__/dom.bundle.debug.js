// frag-a.marko
const $template$2 = "<em>alpha</em>";
const $walks$2 = "b";
const $setup$2 = () => {};
var frag_a_default = /*@__PURE__*/ _template("__tests__/frag-a.marko", $template$2, "b");

// frag-b.marko
const $template$1 = "<strong>beta</strong>";
const $walks$1 = "b";
const $setup$1 = () => {};
var frag_b_default = /*@__PURE__*/ _template("__tests__/frag-b.marko", $template$1, "b");

// template.marko
const $template = "<main><section></section><p> </p></main>";
const $walks = "D bD m";
const $setup = () => {};
const $input_mode = ($scope, input_mode) => _attr_content($scope, "#section/0", input_mode === "a" ? frag_a_default : frag_b_default);
const $input_note = ($scope, input_note) => _text($scope["#text/1"], input_note);
const $input = ($scope, input) => {
	$input_mode($scope, input.mode);
	$input_note($scope, input.note);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);

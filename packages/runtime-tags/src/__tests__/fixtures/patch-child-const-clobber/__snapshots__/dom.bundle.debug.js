// tags/card/index.marko
const $template$1 = "<section><h2> </h2><p> </p></section>";
const $walks$1 = " E lD m";
const $setup$1 = () => {};
const $input_klass = ($scope, input_klass) => _attr_class($scope["#section/0"], input_klass);
const $input_title = ($scope, input_title) => _text($scope["#text/1"], input_title);
const $input_note$1 = ($scope, input_note) => _text($scope["#text/2"], input_note);
const $input$1 = ($scope, input) => {
	$input_klass($scope, input.klass);
	$input_title($scope, input.title);
	$input_note$1($scope, input.note);
};
var card_default = /*@__PURE__*/ _template("__tests__/tags/card/index.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)($walks$1);
const $note = /*@__PURE__*/ _let("note/5", ($scope) => $input_note$1($scope["#childScope/0"], $scope.note));
const $input_note = $note;
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$note($scope, "client");
}));
function $setup($scope) {
	$input_title($scope["#childScope/0"], "fixed");
	$input_klass($scope["#childScope/0"], "c");
	$setup__script($scope);
}
const $input = ($scope, input) => $input_note($scope, input.note);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

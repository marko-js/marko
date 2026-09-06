// tags/card/index.marko
const $template$1 = "<section><h2> </h2></section>";
const $walks$1 = "D D m";
const $setup$1 = () => {};
const $input_title = ($scope, input_title) => {
	_attr_class($scope["#h2/0"], input_title);
	_text($scope["#text/1"], input_title);
};
const $input$1 = ($scope, input) => $input_title($scope, input.title);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card/index.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<!></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&%l`)($walks$1);
const $if_content__input_note = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/1"], $scope._.input_note));
const $if_content__setup = ($scope) => {
	$if_content__input_note._($scope);
	$input_title($scope["#childScope/0"], "branch");
};
function $setup($scope) {
	$input_title($scope["#childScope/0"], "root");
}
const $if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&D l`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_note($scope, input.note);
};
const $input_note = /*@__PURE__*/ _const("input_note", $if_content__input_note);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

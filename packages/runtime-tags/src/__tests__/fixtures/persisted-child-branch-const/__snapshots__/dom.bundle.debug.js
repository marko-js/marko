// tags/card/index.marko
const $template$1 = "<section></section>";
const $walks$1 = " b";
const $setup$1 = () => {};
const $if_content__input_title = /*@__PURE__*/ _if_closure("#section/0", 0, ($scope) => {
	_attr_class($scope["#h2/0"], $scope._.input_title);
	_text($scope["#text/1"], $scope._.input_title);
});
const $if_content__setup = ($scope) => {
	$if_content__input_title._($scope);
	$if_content__input_note._($scope);
};
const $if_content__input_note = /*@__PURE__*/ _if_closure("#section/0", 0, ($scope) => _text($scope["#text/2"], $scope._.input_note));
const $if = /*@__PURE__*/ _if("#section/0", "<h2> </h2><p> </p>", " D lD ", $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_title($scope, input.title);
	$input_note$1($scope, input.note);
};
const $input_title = /*@__PURE__*/ _const("input_title", $if_content__input_title);
const $input_note$1 = /*@__PURE__*/ _const("input_note", $if_content__input_note);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card/index.marko", $template$1, " b", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)(" b");
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/0"], input_show);
function $setup($scope) {
	$input_title($scope["#childScope/0"], "fixed");
}
const $input_note = ($scope, input_note) => $input_note$1($scope["#childScope/0"], input_note);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_note($scope, input.note);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/badge.marko
const $template$1 = "<span class=badge><!><!></span>";
const $walks$1 = "D%b%l";
const $setup$1 = () => {};
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input_note$1 = ($scope, input_note) => _text($scope["#text/1"], input_note ? ` (${_to_text(input_note)})` : "");
const $input$1 = ($scope, input) => {
	$input_label($scope, input.label);
	$input_note$1($scope, input.note);
};
var badge_default = /*@__PURE__*/ _template("__tests__/tags/badge.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = "<main><!><button> </button></main>";
const $walks = "D%b D m";
const $if_content__input_title = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_label($scope["#childScope/0"], $scope._.input_title));
const $if_content__setup = ($scope) => {
	$if_content__input_title._($scope);
	$if_content__input_note._($scope);
};
const $if_content__input_note = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_note$1($scope["#childScope/0"], $scope._.input_note));
const $count = /*@__PURE__*/ _let("count/8", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup, "<em>closed</em>");
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_title($scope, input.title);
	$input_note($scope, input.note);
};
const $input_title = /*@__PURE__*/ _const("input_title", $if_content__input_title);
const $input_note = /*@__PURE__*/ _const("input_note", $if_content__input_note);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

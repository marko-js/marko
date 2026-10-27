// tags/rows.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $for_content__input_label__OR__x = /*@__PURE__*/ _or_resume("__tests__/tags/rows.marko_1_input_label#0:3_x#2/init", 3, ($scope) => _text($scope["#text/0"], $scope._.input_label + $scope.x));
const $for_content__input_label = /*@__PURE__*/ _for_closure("#text/0", $for_content__input_label__OR__x);
const $for_content__setup = $for_content__input_label;
const $for_content__x = /*@__PURE__*/ _const("x", $for_content__input_label__OR__x);
const $for_content__$params = ($scope, $params2) => $for_content__x($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<em> </em>", "D ", $for_content__setup, $for_content__$params);
function $setup$1($scope) {
	$for($scope, [[1, 2]]);
}
const $input$1 = ($scope, input) => $input_label($scope, input.label);
const $input_label = /*@__PURE__*/ _const("input_label", $for_content__input_label);
var rows_default = /*@__PURE__*/ _template("__tests__/tags/rows.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = "<!><!><button class=l>l</button>";
const $walks = "b%b b";
const $if_content__l = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_l#0:5/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_label($scope["#childScope/0"], $scope._.l)));
const $if_content__setup = ($scope) => {
	$if_content__l._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $l = /*@__PURE__*/ _let("l/5", $if_content__l);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$l($scope, $scope.l + "!");
}));
function $setup($scope) {
	$l($scope, "a");
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

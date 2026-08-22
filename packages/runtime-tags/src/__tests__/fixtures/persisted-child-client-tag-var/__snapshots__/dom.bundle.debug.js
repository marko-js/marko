// tags/widget/index.marko
const $template$1 = "<em><!> x<!></em><button class=bump>+</button>";
const $walks$1 = "D%c%l b";
const $count = /*@__PURE__*/ _fill_let("__tests__/tags/widget/index.marko0", "count/6", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_return($scope, $scope.count);
});
const $setup__script$1 = _script("__tests__/tags/widget/index.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup$1($scope) {
	$count($scope, 1);
	$setup__script$1($scope);
}
const $input_label$1 = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$1 = ($scope, input) => $input_label$1($scope, input.label);
var widget_default = /*@__PURE__*/ _template("__tests__/tags/widget/index.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<main><!><button class=toggle>t</button></main>";
const $walks = "D%b l";
const $if_content__input_label = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_label$1($scope["#childScope/0"], $scope._.input_label)));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	_var($scope, "#childScope/0", $if_content__w);
	$setup$1($scope["#childScope/0"]);
};
const $if_content__w = _var_resume("__tests__/template.marko_1_w#3/var", ($scope, w) => _text($scope["#text/2"], w));
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<p class=echo> </p>`)($template$1), /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)($walks$1), $if_content__setup);
const $show = /*@__PURE__*/ _let("show/5", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

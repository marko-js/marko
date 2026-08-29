// tags/box.marko
const $template$1 = "<div class=box> </div>";
const $walks$1 = " D l";
const $root_getter = _el("__tests__/tags/box.marko_0_#div#0", "#div/0");
const $input_label$1 = ($scope, input_label) => _text($scope["#text/1"], input_label);
function $setup$1($scope) {
	_return($scope, $root_getter($scope));
}
const $input$1 = ($scope, input) => $input_label$1($scope, input.label);
var box_default = /*@__PURE__*/ _template("__tests__/tags/box.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<main><!><button id=c> </button></main>";
const $walks = "D%b D m";
const $if_content__input_label = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_label$1($scope["#childScope/0"], $scope._.input_label));
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/2"], "click", function() {
	document.querySelector("main").dataset.tag = $scope.el().tagName;
}));
const $if_content__setup = ($scope) => {
	_var($scope, "#childScope/0", $if_content__el);
	$if_content__input_label._($scope);
	$setup$1($scope["#childScope/0"]);
	$if_content__setup__script($scope);
};
const $if_content__el = _var_resume("__tests__/template.marko_1_el#3/var", /*@__PURE__*/ _const("el"));
const $count = /*@__PURE__*/ _let("count/7", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<button id=read>read</button>`)($template$1), /*@__PURE__*/ ((_w0) => `0${_w0}& b`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _const("input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

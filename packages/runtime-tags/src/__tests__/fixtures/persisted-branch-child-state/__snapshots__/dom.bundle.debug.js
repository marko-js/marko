// tags/counter.marko
const $template$1 = "<div class=counter><span><!>: <!></span><button class=inc>+</button></div>";
const $walks$1 = "E%c%l l";
const $n = /*@__PURE__*/ _fill_let("__tests__/tags/counter.marko0", "n/7", ($scope) => _text($scope["#text/1"], $scope.n));
const $input_start$1 = $n;
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $setup__script = _script("__tests__/tags/counter.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
const $setup$1 = $setup__script;
const $input$1 = ($scope, input) => {
	$input_start$1($scope, input.start);
	$input_label($scope, input.label);
};
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = () => {};
const $if_content__input_title = /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => $input_label($scope["#childScope/0"], $scope._.input_title));
const $if_content__setup = ($scope) => {
	$if_content__input_title._($scope);
	$if_content__input_start._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if_content__input_start = /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => $input_start$1($scope["#childScope/0"], $scope._.input_start));
const $if = /*@__PURE__*/ _if("#main/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_title($scope, input.title);
	$input_start($scope, input.start);
};
const $input_title = /*@__PURE__*/ _const("input_title", $if_content__input_title);
const $input_start = /*@__PURE__*/ _const("input_start", $if_content__input_start);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);

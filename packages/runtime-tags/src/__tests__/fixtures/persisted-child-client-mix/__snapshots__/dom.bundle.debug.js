// tags/label/index.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input_text = ($scope, input_text) => _text($scope["#text/0"], input_text);
const $input$1 = ($scope, input) => $input_text($scope, input.text);
var label_default = /*@__PURE__*/ _template("__tests__/tags/label/index.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = "<main><!><button>+</button><button class=t>t</button></main>";
const $walks = "D%b b l";
const $if_content__input_suffix__OR__count = /*@__PURE__*/ _fill_join_if("__tests__/template.marko0", "input_suffix", /*@__PURE__*/ _or(1, ($scope) => $input_text($scope["#childScope/0"], $scope._.count + $scope._.input_suffix)), "#text/0", 0);
const $if_content__input_suffix = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_suffix__OR__count);
const $if_content__setup = ($scope) => {
	$if_content__input_suffix._($scope);
	$if_content__count._($scope);
};
const $if_content__count = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_suffix__OR__count);
const $count = /*@__PURE__*/ _let("count/6", $if_content__count);
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $if_content__setup);
const $show = /*@__PURE__*/ _let("show/7", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$count($scope, $scope.count + 1);
	});
	_on($scope["#button/2"], "click", function() {
		$show($scope, !$scope.show);
	});
});
function $setup($scope) {
	$count($scope, 0);
	$show($scope, true);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_suffix($scope, input.suffix);
const $input_suffix = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_suffix", $if_content__input_suffix);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

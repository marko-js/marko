// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = ($_) => {};
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/0"], input_show);
const $input_on = ($scope, input_on) => $input_on$1($scope["#childScope/0"], input_on);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_on($scope, input.on);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);

// tags/child.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__count = /*@__PURE__*/ _let_change("count/2", ($scope) => _text($scope["#text/1"], $scope.count));
const $if_content__input_on = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__count($scope, 1, $scope._.input_on));
const $if_content__setup__script = _script("__tests__/tags/child.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$if_content__count($scope, +$scope.count + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__input_on._($scope);
	$if_content__setup__script($scope);
};
const $if = /*@__PURE__*/ _if("#text/0", "<button> </button>", " D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_on($scope, input.on);
};
const $input_on = /*@__PURE__*/ _const("input_on", $if_content__input_on);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template, "b%c", 0, $input);

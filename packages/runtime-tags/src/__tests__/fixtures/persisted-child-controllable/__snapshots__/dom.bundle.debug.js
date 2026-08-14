// tags/counter/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $if_content__count = /*@__PURE__*/ _fill_let_change("__tests__/tags/counter/index.marko0", "count/2", ($scope) => _text($scope["#text/0"], $scope.count));
const $if_content__input_onCount = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__count($scope, 0, $scope._.input_onCount));
const $if_content__setup__script = _script("__tests__/tags/counter/index.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$if_content__count($scope, +$scope.count + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__input_onCount._($scope);
	$if_content__setup__script($scope);
};
const $if = /*@__PURE__*/ _if("#text/0", "<span>Seen <!></span><button>+</button>", "Db%l ", $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_onCount($scope, input.onCount);
};
const $input_onCount = /*@__PURE__*/ _const("input_onCount", $if_content__input_onCount);
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter/index.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main><h1> </h1><p>Last <!></p>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `E lDb%l/${_w0}&l`)("b%c");
const $last = /*@__PURE__*/ _let("last/7", ($scope) => _text($scope["#text/1"], $scope.last));
function $setup($scope) {
	$input_onCount($scope["#childScope/2"], $onCount($scope));
	$last($scope, 0);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/2"], input_show);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_show($scope, input.show);
};
const $onCount = ($scope) => function(next) {
	$last($scope, next);
};
_resume("__tests__/template.marko_0/onCount", $onCount);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

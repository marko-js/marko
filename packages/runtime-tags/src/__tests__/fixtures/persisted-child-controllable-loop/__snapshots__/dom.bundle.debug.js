// tags/counter/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $if_content__count = /*@__PURE__*/ _fill_let_change("__tests__/tags/counter/index.marko1", "count/2", ($scope) => _text($scope["#text/0"], $scope.count));
const $if_content__input_onCount = /*@__PURE__*/ _fill_join("__tests__/tags/counter/index.marko0", "input_onCount", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__count($scope, 0, $scope._.input_onCount)));
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
const $input_onCount = /*@__PURE__*/ _fill_const("__tests__/tags/counter/index.marko0", "input_onCount", $if_content__input_onCount);
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter/index.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = "<main><h1> </h1><!></main>";
const $walks = "E l%l";
const $for_content__input_show = /*@__PURE__*/ _for_closure("#text/1", ($scope) => $input_show$1($scope["#childScope/2"], $scope._.input_show));
const $for_content__hits = /*@__PURE__*/ _fill_let("__tests__/template.marko0", "hits/5", ($scope) => _text($scope["#text/1"], $scope.hits));
const $for_content__setup = ($scope) => {
	$for_content__input_show._($scope);
	$input_onCount($scope["#childScope/2"], $onCount($scope));
	$for_content__hits($scope, 0);
};
const $for_content__name = ($scope, name) => _text($scope["#text/0"], name);
const $for_content__$params = ($scope, $params2) => $for_content__name($scope, $params2[0]);
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $for = /*@__PURE__*/ _for_of("#text/1", /*@__PURE__*/ ((_w0) => `<p><!> hit <!></p>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `D%c%l/${_w0}&b`)("b%c"), $for_content__setup, $for_content__$params);
function $setup($scope) {
	$for($scope, [["a", "b"]]);
}
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_show($scope, input.show);
};
const $input_show = /*@__PURE__*/ _const("input_show", $for_content__input_show);
const $onCount = ($scope) => function(next) {
	$for_content__hits($scope, next);
};
_resume("__tests__/template.marko_1/onCount", $onCount);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

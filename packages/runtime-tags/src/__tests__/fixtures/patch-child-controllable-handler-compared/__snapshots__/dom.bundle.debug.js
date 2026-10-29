// tags/counter/index.marko
const $template$1 = "<!><!><button class=toggle>t</button>";
const $walks$1 = "b%b b";
const $if_content__count = /*@__PURE__*/ _let_change("count/2", ($scope) => _text($scope["#text/0"], $scope.count));
const $if_content__input_onCount__script = _script("__tests__/tags/counter/index.marko_1_input_onCount#0:4", ($scope) => {
	{
		const log = document.getElementById("log");
		log.textContent += log.fn === $scope._.input_onCount ? "same;" : "new;";
		log.fn = $scope._.input_onCount;
	}
});
const $if_content__input_onCount = /*@__PURE__*/ _fill_join("__tests__/tags/counter/index.marko_fill0", "input_onCount", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	$if_content__count($scope, 0, $scope._.input_onCount);
	$if_content__input_onCount__script($scope);
}));
const $if_content__setup__script = _script("__tests__/tags/counter/index.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$if_content__count($scope, +$scope.count + 1);
}));
const $if_content__setup$1 = ($scope) => {
	$if_content__input_onCount._($scope);
	$if_content__setup__script($scope);
};
const $if$1 = /*@__PURE__*/ _if("#text/0", "<span>Seen <!></span><button class=add>+</button>", "Db%l ", $if_content__setup$1);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/counter/index.marko_fill1", "open/5", ($scope) => $if$1($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/counter/index.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$setup__script($scope);
	$open($scope, true);
}
const $input$1 = ($scope, input) => $input_onCount($scope, input.onCount);
const $input_onCount = /*@__PURE__*/ _fill_const("__tests__/tags/counter/index.marko_fill0", "input_onCount", $if_content__input_onCount);
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter/index.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<main><h1> </h1><p>Last <!></p><pre id=log></pre><!></main>";
const $walks = "E lDb%lb%l";
const $if_content__onCount = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $input_onCount($scope["#childScope/0"], $scope._.onCount));
const $if_content__setup = ($scope) => {
	$if_content__onCount._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $last = _let("last/7", ($scope) => _text($scope["#text/1"], $scope.last));
const $onCount2 = /*@__PURE__*/ _const("onCount");
function $setup($scope) {
	$last($scope, 0);
	$onCount2($scope, $onCount($scope));
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $if = /*@__PURE__*/ _if("#text/2", /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_show($scope, input.show);
};
const $onCount = ($scope) => (next) => {
	$last($scope, next);
};
_resumed["__tests__/template.marko_0/onCount"] = $onCount;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

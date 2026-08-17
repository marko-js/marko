// tags/counter.marko
const $template$1 = "<div class=counter><span><!>: <!></span><button class=inc>+</button></div>";
const $walks$1 = "E%c%l l";
const $n = /*@__PURE__*/ _fill_let("__tests__/tags/counter.marko0", "n/7", ($scope) => _text($scope["#text/1"], $scope.n));
const $input_start = $n;
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $setup__script$1 = _script("__tests__/tags/counter.marko_0", ($scope) => {
	_on($scope["#button/2"], "click", function() {
		$n($scope, +$scope.n + 1);
	});
	{
		const main = document.querySelector("main");
		main.dataset.mounts = String(+(main.dataset.mounts || 0) + 1);
	}
});
const $setup$1 = $setup__script$1;
const $input$1 = ($scope, input) => {
	$input_start($scope, input.start);
	$input_label($scope, input.label);
};
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<main><!><button id=c> </button></main>";
const $walks = "D%b D m";
const $await_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_start($scope["#childScope/0"], 1);
};
const $await_content__v = ($scope, v) => $input_label($scope["#childScope/0"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_content = _resume("__tests__/template.marko_1_#text#0/await", /*@__PURE__*/ _await_content("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $await_content__setup));
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $if_content__input_promise = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__await_promise($scope, $scope._.input_promise));
const $if_content__setup = ($scope) => {
	$if_content__input_promise._($scope);
	$await_content($scope);
};
const $count = /*@__PURE__*/ _let("count/7", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_promise($scope, input.promise);
};
const $input_promise = /*@__PURE__*/ _const("input_promise", $if_content__input_promise);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

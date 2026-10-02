// tags/counter.marko
const $template$1 = "<button class=counter> </button>";
const $walks$1 = " D l";
const $count = /*@__PURE__*/ _let("count/2", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script$1 = _script("__tests__/tags/counter.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup$1($scope) {
	$count($scope, 0);
	$setup__script$1($scope);
}
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = "<button class=toggle>toggle</button><!><!>";
const $walks = " b%c";
const $await_content2__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
};
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $await_content2__setup);
const $await_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $await_content__setup = ($scope) => {
	$await_content2($scope);
	$await_content__await_promise($scope, resolveAfter(1, 1));
};
const $placeholder_content = _content("__tests__/template.marko_2*content", "loading");
const $try_content__if = /*@__PURE__*/ _if("#text/1", "<span>shown</span>");
const $try_content__show = /*@__PURE__*/ _closure_get("show/3", ($scope) => $try_content__if($scope, $scope._.show ? 0 : 1), 0, "__tests__/template.marko_1_show#0:2/subscribe");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "b%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$try_content__show($scope);
	$await_content($scope);
	$try_content__await_promise($scope, Promise.resolve(1));
};
const $show__closure = /*@__PURE__*/ _closure($try_content__show);
const $show = /*@__PURE__*/ _let("show/2", $show__closure);
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!><!>", "b%b%", $try_content__setup, $placeholder_content);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$try($scope);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

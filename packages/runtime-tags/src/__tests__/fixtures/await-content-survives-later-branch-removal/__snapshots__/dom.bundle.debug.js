// tags/counter.marko
const $template$1 = "<button class=inc> </button>";
const $walks$1 = " D l";
const $count = /*@__PURE__*/ _let("count/2", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script$1 = _script("__tests__/tags/counter.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$count($scope, +$scope.count + 1);
	});
	$signal($scope, 0).onabort = () => console.log("counter destroyed");
});
function $setup$1($scope) {
	$signalReset($scope, 0);
	$count($scope, 0);
	$setup__script$1($scope);
}
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = "<!><!><!><button class=hide>hide</button>";
const $walks = "b%b%b b";
const $await_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/1", "<span>shown</span>");
const $show = /*@__PURE__*/ _let("show/3", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $await_content = /*@__PURE__*/ _await_content("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$show($scope, false);
}));
function $setup($scope) {
	$await_content($scope);
	$show($scope, true);
	$await_promise($scope, resolveAfter(1, 1));
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

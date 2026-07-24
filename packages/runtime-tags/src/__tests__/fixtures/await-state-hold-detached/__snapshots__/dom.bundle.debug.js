// template.marko
const $template = "<button id=inc>inc</button><button id=toggle>toggle</button><div id=visible>visible <!></div><!><div id=hidden>hidden <!></div><!><!><!>";
const $walks = " b bDb%l%bDb%l%b%c";
_enable_hold();
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/6", "<div id=awaited>awaited <!></div>", "Db%l");
const $await_promise = /*@__PURE__*/ _await_promise("#text/6", $await_content__$params);
const $n = /*@__PURE__*/ _let("n/7", ($scope) => {
	_text($scope["#text/2"], $scope.n);
	_text($scope["#text/4"], $scope.n);
	$await_promise($scope, resolveAfter($scope.n));
});
const $show = /*@__PURE__*/ _show("#text/5", "#text/3");
const $shown = /*@__PURE__*/ _let("shown/8", ($scope) => $show($scope, $scope.shown));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$n($scope, $scope.n + 1);
	});
	_on($scope["#button/1"], "click", function() {
		$shown($scope, !$scope.shown);
	});
});
function $setup($scope) {
	$await_content($scope);
	$n($scope, 0);
	$shown($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// template.marko
const $template = "<pre id=log></pre><button class=inc> </button><button class=hide></button><!><!>";
const $walks = "b D l b%c";
const $await_content2__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content2__$params = ($scope, $params4) => $await_content2__v($scope, $params4[0]);
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content__setup = ($scope) => {
	$await_content2($scope);
	$try_content__await_promise($scope, rejectAfter(new Error("nope"), 1));
};
const $await_content__count__script = _script("__tests__/template.marko_3_count#0:4", ($scope) => document.getElementById("log").textContent += "[" + $scope._._._.count + "]");
const $await_content__count = /*@__PURE__*/ _closure_get("count/6", ($scope) => {
	_text($scope["#text/0"], $scope._._._.count);
	$await_content__count__script($scope);
}, ($scope) => $scope._._._, "__tests__/template.marko_3_count#0:4/subscribe");
const $await_content__setup = $await_content__count;
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<span> </span>", "D ", $await_content__setup);
const $catch_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $catch_content__setup = ($scope) => {
	$await_content($scope);
	$catch_content__await_promise($scope, resolveAfter("caught", 2));
};
const $catch_content = _content("__tests__/template.marko_2*content", "<!><!><!>", "b%", $catch_content__setup);
const $if_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, 0, $catch_content);
const $if_content__setup = ($scope) => $if_content__try($scope);
const $count__closure = /*@__PURE__*/ _closure($await_content__count);
const $count = /*@__PURE__*/ _let("count/4", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$count__closure($scope);
});
const $if = /*@__PURE__*/ _if("#text/3", "<!><!><!>", "b%", $if_content__setup);
const $show = /*@__PURE__*/ _let("show/5", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$count($scope, +$scope.count + 1);
	});
	_on($scope["#button/2"], "click", function() {
		$show($scope, false);
	});
});
function $setup($scope) {
	$count($scope, 0);
	$show($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

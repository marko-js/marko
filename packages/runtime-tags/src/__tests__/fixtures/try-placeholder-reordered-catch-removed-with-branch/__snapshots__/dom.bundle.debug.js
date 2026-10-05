// template.marko
const $template = "<pre id=log></pre><button class=inc> </button><button class=hide></button><!><!>";
const $walks = "b D l b%c";
const $placeholder_content2 = _content("__tests__/template.marko_8*content", "loading");
const $await_content2__v = /*@__PURE__*/ _closure_get("v/7", ($scope) => _text($scope["#text/0"], $scope._._.v), ($scope) => $scope._._);
const $await_content2__setup = $await_content2__v;
const $await_content2__x = ($scope, x) => _text($scope["#text/1"], x);
const $await_content2__$params = ($scope, $params4) => $await_content2__x($scope, $params4[0]);
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", "<!><!>", "%b%", $await_content2__setup);
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content2__setup = ($scope) => {
	$await_content2($scope);
	$try_content2__await_promise($scope, rejectAfter(new Error("nope"), 2));
};
const $await_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content2__setup, $placeholder_content2);
const $await_content__setup = ($scope) => $await_content__try($scope);
const $await_content__$params = ($scope, $params3) => $await_content__v($scope, $params3[0]);
const $await_content__v = /*@__PURE__*/ _const("v");
const $placeholder_content = _content("__tests__/template.marko_4*content", "outer loading");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "b%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter(1, 1));
};
const $catch_content__count__script = _script("__tests__/template.marko_2_count#0:4", ($scope) => document.getElementById("log").textContent += "[" + $scope._._.count + "]");
const $catch_content__count = /*@__PURE__*/ _closure_get("count/6", ($scope) => {
	_text($scope["#text/0"], $scope._._.count);
	$catch_content__count__script($scope);
}, ($scope) => $scope._._, "__tests__/template.marko_2_count#0:4/subscribe");
const $catch_content__setup = $catch_content__count;
const $catch_content = _content("__tests__/template.marko_2*content", "<span> </span>", "D ", $catch_content__setup);
const $if_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, $placeholder_content, $catch_content);
const $if_content__setup = ($scope) => $if_content__try($scope);
const $count__closure = /*@__PURE__*/ _closure($catch_content__count);
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

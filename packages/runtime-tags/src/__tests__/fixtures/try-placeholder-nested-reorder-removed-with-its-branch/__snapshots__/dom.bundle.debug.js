// template.marko
const $template = "<pre id=log></pre><button class=inc> </button><button class=hide></button><!><!>";
const $walks = "b D l b%c";
const $placeholder_content = _content("__tests__/template.marko_4*content", "loading");
const $await_content__count__script = _script("__tests__/template.marko_3_count#0:4", ($scope) => document.getElementById("log").textContent += "[" + $scope._._._.count + "]");
const $await_content__count = /*@__PURE__*/ _closure_get("count/6", ($scope) => {
	_text($scope["#text/0"], $scope._._._.count);
	$await_content__count__script($scope);
}, ($scope) => $scope._._._, "__tests__/template.marko_3_count#0:4/subscribe");
const $await_content__setup = $await_content__count;
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<span> </span>", "D ", $await_content__setup);
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $if_content__setup = ($scope) => {
	$await_content($scope);
	$if_content__await_promise($scope, resolveAfter(1, 1));
};
const $try_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $try_content__inner = /*@__PURE__*/ _closure_get("inner/7", ($scope) => $try_content__if($scope, $scope._.inner ? 0 : 1), 0, "__tests__/template.marko_1_inner#0:5/subscribe");
const $try_content__setup = $try_content__inner;
const $count__closure = /*@__PURE__*/ _closure($await_content__count);
const $count = /*@__PURE__*/ _let("count/4", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$count__closure($scope);
});
const $inner__closure = /*@__PURE__*/ _closure($try_content__inner);
const $inner = /*@__PURE__*/ _let("inner/5", $inner__closure);
const $try = /*@__PURE__*/ _try("#text/3", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$count($scope, +$scope.count + 1);
	});
	_on($scope["#button/2"], "click", function() {
		$inner($scope, false);
	});
});
function $setup($scope) {
	$count($scope, 0);
	$inner($scope, true);
	$try($scope);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// template.marko
const $template = "<pre id=log></pre><button class=inc> </button><button class=hide></button><!><!><!>";
const $walks = "b D l b%b%c";
const $placeholder_content = _content("__tests__/template.marko_5*content", "loading");
const $await_content2__count = /*@__PURE__*/ _closure_get("count/7", ($scope) => _text($scope["#text/0"], $scope._.count), 0, "__tests__/template.marko_4_count#0:5/subscribe");
const $await_content2__setup = $await_content2__count;
const $await_content__count = /*@__PURE__*/ _closure_get("count/7", ($scope) => _text($scope["#text/1"], $scope._._._.count), ($scope) => $scope._._._, "__tests__/template.marko_3_count#0:5/subscribe");
const $await_content__setup = $await_content__count;
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<span class=body><!><!></span>", "D%b%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter(1, 1));
};
const $if_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $if_content__setup = ($scope) => $if_content__try($scope);
const $count__closure = /*@__PURE__*/ _closure($await_content__count, $await_content2__count);
const $count = /*@__PURE__*/ _let("count/5", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$count__closure($scope);
});
const $if = /*@__PURE__*/ _if("#text/3", "<!><!><!>", "b%", $if_content__setup);
const $show = /*@__PURE__*/ _let("show/6", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $await_content2 = /*@__PURE__*/ _await_content("#text/4", "<span class=after> </span>", "D ", $await_content2__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/4");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$count($scope, +$scope.count + 1);
	});
	_on($scope["#button/2"], "click", function() {
		$show($scope, false);
	});
});
function $setup($scope) {
	$await_content2($scope);
	$count($scope, 0);
	$show($scope, true);
	$await_promise($scope, resolveAfter(1, 2));
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

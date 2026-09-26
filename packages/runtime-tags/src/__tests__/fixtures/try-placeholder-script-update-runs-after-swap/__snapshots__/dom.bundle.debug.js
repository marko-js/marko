// template.marko
const $template = "<button id=load>load</button><button id=inc>inc</button><!><!>";
const $walks = " b b%c";
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $placeholder_content = _content("__tests__/template.marko_2*content", "LOADING");
const $try_content__n__script = _script("__tests__/template.marko_1_n#3", ($scope) => console.log("script n=" + $scope._.n + " connected=" + _el_read($scope["#div/0"]).isConnected));
const $try_content__n = /*@__PURE__*/ _closure_get("n", ($scope) => {
	_text($scope["#text/1"], $scope._.n);
	$try_content__n__script($scope);
}, 0, "__tests__/template.marko_1_n#3/subscribe");
const $try_content__setup = ($scope) => {
	$try_content__n($scope);
	$try_content__m($scope);
	$await_content($scope);
};
const $await_content = /*@__PURE__*/ _await_content("#text/2", "value <!>", "b%");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/2", $await_content__$params);
const $try_content__m = /*@__PURE__*/ _closure_get("m", ($scope) => $try_content__await_promise($scope, $scope._.m ? resolveAfter($scope._.m) : 0), 0, "__tests__/template.marko_1_m#4/subscribe");
const $n__closure = /*@__PURE__*/ _closure($try_content__n);
const $n = /*@__PURE__*/ _let("n/3", $n__closure);
const $m__closure = /*@__PURE__*/ _closure($try_content__m);
const $m = /*@__PURE__*/ _let("m/4", $m__closure);
const $try = /*@__PURE__*/ _try("#text/2", "<div>n <!></div><!><!>", " Db%l%", $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$m($scope, +$scope.m + 1);
	});
	_on($scope["#button/1"], "click", function() {
		$n($scope, +$scope.n + 1);
	});
});
function $setup($scope) {
	$n($scope, 0);
	$m($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// template.marko
const $template = "<main><!><button> </button></main>";
const $walks = "D%b D m";
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $catch_content__tag = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko0", "tag", /*@__PURE__*/ _closure_get("tag", ($scope) => _text($scope["#text/0"], $scope._.tag)), 0);
const $catch_content__setup = $catch_content__tag;
const $catch_content = _content_resume("__tests__/template.marko_2*content", "<p> </p>", "D ", $catch_content__setup);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<em> </em>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_promise = /*@__PURE__*/ _closure_get("input_promise", ($scope) => $try_content__await_promise($scope, $scope._.input_promise));
const $try_content__setup = ($scope) => {
	$try_content__input_promise($scope);
	$await_content($scope);
};
const $tag__closure = /*@__PURE__*/ _closure($catch_content__tag);
const $tag = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "tag", $tag__closure);
const $global_brand = /*@__PURE__*/ _global_join("brand", "__tests__/template.marko_0_$global_brand#7/global", ($scope, $global_brand) => $tag($scope, `${$scope.$global.brand}!`));
const $n = /*@__PURE__*/ _let("n/8", ($scope) => _text($scope["#text/2"], $scope.n));
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
	$global_brand($scope, $scope.$global.brand);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_promise($scope, input.promise);
const $input_promise__closure = /*@__PURE__*/ _closure($try_content__input_promise);
const $input_promise = /*@__PURE__*/ _const("input_promise", $input_promise__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

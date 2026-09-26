// template.marko
const $template = "<button>start</button><!><!>";
const $walks = " b%c";
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $placeholder_content = _content("__tests__/template.marko_3*content", "LOADING");
const $await_content = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $if_content__promise = /*@__PURE__*/ _closure_get("promise", ($scope) => $if_content__await_promise($scope, $scope._._.promise || "idle"), ($scope) => $scope._._, "__tests__/template.marko_2_promise#3/subscribe");
const $if_content__setup = ($scope) => {
	$if_content__promise($scope);
	$await_content($scope);
};
const $try_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $try_content__show = /*@__PURE__*/ _closure_get("show", ($scope) => $try_content__if($scope, $scope._.show ? 0 : 1), 0, "__tests__/template.marko_1_show#2/subscribe");
const $try_content__setup = $try_content__show;
const $show__closure = /*@__PURE__*/ _closure($try_content__show);
const $show = /*@__PURE__*/ _let("show/2", $show__closure);
const $promise__closure = /*@__PURE__*/ _closure($if_content__promise);
const $promise__script = _script("__tests__/template.marko_0_promise#3", ($scope) => $scope.promise && $scope.promise.then(() => {
	$show($scope, false);
}));
const $promise = /*@__PURE__*/ _let("promise/3", ($scope) => {
	$promise__closure($scope);
	$promise__script($scope);
});
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><div>settled</div>", "b%", $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$promise($scope, resolveAfter("loaded", 1));
}));
function $setup($scope) {
	$show($scope, true);
	$promise($scope, null);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

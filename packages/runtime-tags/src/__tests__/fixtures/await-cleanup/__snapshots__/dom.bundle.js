// total: 9826 (min) 4171 (brotli)
// template.marko: 732 (min) 350 (brotli)
_enable_catch();
const $await_content2__setup__script = _script("a2", ($scope) => $signal($scope, 0).onabort = () => document.querySelector("#two").textContent = "Pass");
const $await_content2__setup = ($scope) => {
	$signalReset($scope, 0);
	$await_content2__setup__script($scope);
};
const $placeholder_content = _content_resume("a3", "loading...", "b");
const $await_content__show = /* @__PURE__ */ _closure_get(2, ($scope) => _text($scope.a, $scope._._._.c), ($scope) => $scope._._._, "a0");
const $await_content__setup__script = _script("a1", ($scope) => $signal($scope, 0).onabort = () => document.querySelector("#one").textContent = "Pass");
const $await_content__setup = ($scope) => {
	$await_content__show($scope);
	$signalReset($scope, 0);
	$await_content__setup__script($scope);
};
const $await_content = /* @__PURE__ */ _await_content(0, " ", " b", $await_content__setup);
const $try_content__await_promise = /* @__PURE__ */ _await_promise(0);
const $await_content2 = /* @__PURE__ */ _await_content(1, 0, 0, $await_content2__setup);
const $try_content__await_promise2 = /* @__PURE__ */ _await_promise(1);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$await_content2($scope);
	$try_content__await_promise($scope, resolveAfter(0, 1));
	$try_content__await_promise2($scope, resolveAfter(0, 1));
};
const $if_content__try = /* @__PURE__ */ _try(0, "<!><!><!><!>", "b%b%c", $try_content__setup);
const $if_content__setup = ($scope) => $if_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
const $if = /* @__PURE__ */ _if(1, "<!><!><!>", "b%c", $if_content__setup);
const $show__closure = /* @__PURE__ */ _closure($await_content__show);
const $show = /* @__PURE__ */ _let(2, ($scope) => {
	$if($scope, $scope.c ? 0 : 1);
	$show__closure($scope);
});
const $setup__script = _script("a5", ($scope) => _on($scope.a, "click", function() {
	$show($scope, 0);
}));

// total: 8401 (min) 3676 (brotli)
// template.marko: 364 (min) 215 (brotli)
_enable_catch();
const $await_content__setup = _script("a0", ($scope) => document.querySelector("#outside").textContent = "Fail");
const $placeholder_content = _content_resume("a1", "loading...", "b");
const $await_content = /* @__PURE__ */ _await_content(0, 0, 0, $await_content__setup);
const $try_content__await_promise = /* @__PURE__ */ _await_promise(0);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter(0, 1));
};
const $if_content__try = /* @__PURE__ */ _try(0, "<!><!><!>", "b%c", $try_content__setup);
const $if_content__setup = ($scope) => $if_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
const $if = /* @__PURE__ */ _if(0, "<!><!><!>", "b%c", $if_content__setup);
const $show = /* @__PURE__ */ _let(1, ($scope) => $if($scope, $scope.b ? 0 : 1));
const $setup__script = _script("a3", ($scope) => $show($scope, 0));

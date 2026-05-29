// total: 2358 (min) 1177 (brotli)
// tags/child.marko: 59 (min) 63 (brotli)
function $_return($scope) {
	return () => (html) => $scope.a.innerHTML = html;
}
_resume("b0", $_return);

// tags/thing.marko: 21 (min) 25 (brotli)
const $input_value__script = _script("c0", ($scope) => $scope.c);

// template.marko: 274 (min) 129 (brotli)
const $if_content5__setup = _script("a4", ($scope) => $setHtml3_getter($scope._)()("Hello world"));
const $setHtml3_getter = _hoist(2, "Ad");
const $if_content4__setHtml = _var_resume("a3", /* @__PURE__ */ _const(2));
const $setHtml2_getter = _hoist(2, "Ac");
const $if_content3__setHtml = _var_resume("a2", /* @__PURE__ */ _const(2));
const $setHtml_getter = _hoist_resume("a0", 2, "Aa", "Aa");
const $if_content2__setHtml = _var_resume("a1", /* @__PURE__ */ _const(2));
const $setup__script = _script("a5", ($scope) => {
	$setHtml_getter($scope)()("Hello world");
	$setHtml2_getter($scope)()("Hello world");
});

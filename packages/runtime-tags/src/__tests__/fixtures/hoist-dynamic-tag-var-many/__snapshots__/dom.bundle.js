// total: 2188 (min) 1122 (brotli)
// tags/child.marko: 59 (min) 63 (brotli)
function $_return($scope) {
	return () => (html) => $scope.a.innerHTML = html;
}
_resume("b0", $_return);

// template.marko: 277 (min) 154 (brotli)
const $setHtml3_getter = _hoist_resume("a0", 2, "Aa", "Ac");
const $for_content4__setHtml = _var_resume("a3", /* @__PURE__ */ _const(2));
const $setHtml2_getter = _hoist(2, "Ab");
const $for_content2__setHtml = _var_resume("a2", /* @__PURE__ */ _const(2));
const $setHtml_getter = _hoist(2, "Aa");
const $for_content__setHtml = _var_resume("a1", /* @__PURE__ */ _const(2));
const $setup__script = _script("a4", ($scope) => {
	$setHtml_getter($scope)()("First Only");
	$setHtml2_getter($scope)()("First Only");
	{
		let i = 0;
		for (const fn of $setHtml3_getter($scope)) fn(`All (${i++})`);
	}
});

// total: 2084 (min) 1082 (brotli)
// tags/child.marko: 59 (min) 63 (brotli)
function $_return($scope) {
	return () => (html) => $scope.a.innerHTML = html;
}
_resume("b0", $_return);

// template.marko: 127 (min) 108 (brotli)
const $setHtml_getter = _hoist_resume("a0", 2, "B1");
const $what_content__setHtml = _var_resume("a3", /* @__PURE__ */ _const(2));
const $setup__script = _script("a2", ($scope) => {
	for (const fn of $setHtml_getter($scope)) fn("Hoist from custom tag");
});

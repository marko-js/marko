// tags/child.marko
function $_return($scope) {
	return () => (html) => $scope.a.innerHTML = html;
}
_resume("b0", $_return);

// template.marko
const $setHtml_getter = _hoist_resume("a0", 2, "B1");
const $what_content__setHtml = _var_resume("a3", /* @__PURE__ */ _const(2));
const $setup__script = _script("a2", ($scope) => {
	for (const fn of $setHtml_getter($scope)) fn("Hoist from custom tag");
});

// tags/child.marko
const $_return = ($scope) => () => (html) => $scope.a.innerHTML = html;
_resumed.b0 = $_return;

// template.marko
const $setHtml3_getter = /*@__PURE__*/ _hoist(2, "B4");
const $inputshowsectionnull_content__setHtml = _var_resume("a6", /*@__PURE__*/ _const(2));
const $setHtml2_getter = /*@__PURE__*/ _hoist(2, "B3", "B2");
const $thing_content2__setHtml = _var_resume("a3", /*@__PURE__*/ _const(2));
const $setHtml_getter = _hoist_resume("a0", 2, "B1");
const $thing_content__setHtml = _var_resume("a1", /*@__PURE__*/ _const(2));
const $setup__script = _script("a8", ($scope) => {
	for (const fn of $setHtml_getter($scope)) fn("Hoist from custom tag");
	$setHtml2_getter($scope)()("Hoist from dynamic tag");
	$setHtml3_getter($scope)()("Hoist from dynamic tag");
});

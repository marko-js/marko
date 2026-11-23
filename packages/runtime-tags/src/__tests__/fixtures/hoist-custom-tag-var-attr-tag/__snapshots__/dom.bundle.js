// tags/child.marko
const $_return = ($scope) => () => (html) => $scope.a.innerHTML = html;
_resumed.b0 = $_return;

// template.marko
const $setHtml_getter = /*@__PURE__*/ _hoist(2, "B1");
const $setup__script = _script("a1", ($scope) => {
	for (const fn of $setHtml_getter($scope)) fn("Hoist from custom tag");
});

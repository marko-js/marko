// template.marko
const $el2_getter = /*@__PURE__*/ _hoist(0, "Ab", "B1");
const $el1_getter = /*@__PURE__*/ _hoist(0, "Aa", "B1");
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	for (const el of $el1_getter($scope)) el.textContent = "a";
	for (const el of $el2_getter($scope)) el.textContent = "b";
}));

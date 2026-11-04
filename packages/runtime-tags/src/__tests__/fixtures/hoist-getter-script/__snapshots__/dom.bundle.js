// template.marko
const $label_getter = /*@__PURE__*/ _hoist(4);
const $setup__script = _script("a1", ($scope) => document.querySelector("p").dataset.label = $label_getter($scope)());
function $label() {
	return "ready";
}
_resumed.a0 = $label;

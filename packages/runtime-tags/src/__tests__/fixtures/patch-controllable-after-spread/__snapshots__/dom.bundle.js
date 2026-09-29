// template.marko
const $setup__script = _script("a2", ($scope) => _attr_input_value_script($scope, "a"));
const $input_attrs__script = _script("a1", ($scope) => _attrs_script($scope, "a"));
function $valueChange(next) {
	document.body.dataset.v = next;
}
_resumed.a0 = $valueChange;

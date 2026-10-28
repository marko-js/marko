// tags/text-field.marko
const $setup__script = _script("b1", ($scope) => _attr_input_value_script($scope, "a"));
const $attrs__script = _script("b0", ($scope) => _attrs_script($scope, "a"));

// template.marko
function $valueChange(next) {
	document.title = next;
}
_resumed.a0 = $valueChange;

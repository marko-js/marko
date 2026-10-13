// template.marko
const $TextField_content__setup__script = _script("a3", ($scope) => _attr_input_value_script($scope, "a"));
const $TextField_content__attrs__script = _script("a2", ($scope) => _attrs_script($scope, "a"));
function $valueChange(next) {
	document.title = next;
}
_resumed.a0 = $valueChange;

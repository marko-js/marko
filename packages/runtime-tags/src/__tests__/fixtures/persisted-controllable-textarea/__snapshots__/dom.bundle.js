// template.marko
const $setup__script = _script("a1", ($scope) => _attr_input_value_script($scope, "b"));
function $valueChange(next) {
	document.querySelector("main").dataset.text = next;
}
_resume("a0", $valueChange);

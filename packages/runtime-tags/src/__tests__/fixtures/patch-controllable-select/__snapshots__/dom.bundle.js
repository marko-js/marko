// template.marko
const $setup__script = _script("a1", ($scope) => _attr_select_value_script($scope, "b"));
function $valueChange(next) {
	document.querySelector("main").dataset.choice = next;
}
_resume("a0", $valueChange);

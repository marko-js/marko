// template.marko
const $setup__script = _script("a1", ($scope) => _attr_input_checked_script($scope, "b"));
function $checkedChange(next) {
	document.querySelector("main").dataset.agree = String(next);
}
_resume("a0", $checkedChange);

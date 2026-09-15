// template.marko
const $setup__script = _script("a1", ($scope) => _attr_details_or_dialog_open_script($scope, "b"));
function $openChange(next) {
	document.querySelector("main").dataset.open = String(next);
}
_resume("a0", $openChange);

// template.marko
const $setup__script = _script("a2", ($scope) => _attr_input_value_script($scope, "b"));
function $plain(next) {
	document.querySelector("main").dataset.got = next;
}
function $loud(next) {
	document.querySelector("main").dataset.got = next.toUpperCase();
}
_resume("a0", $plain);
_resume("a1", $loud);

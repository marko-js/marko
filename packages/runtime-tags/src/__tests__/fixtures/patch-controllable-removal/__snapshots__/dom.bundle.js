// template.marko
const $setup__script = _script("a1", ($scope) => _attr_input_value_script($scope, "b"));
function $handler(next) {
	document.querySelector("main").dataset.got = next;
}
_resumed.a0 = $handler;

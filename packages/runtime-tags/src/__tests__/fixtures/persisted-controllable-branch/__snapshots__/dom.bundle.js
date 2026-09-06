// template.marko
const $if_content__setup__script = _script("a2", ($scope) => _attr_input_value_script($scope, "a"));
function $valueChange(next) {
	document.querySelector("main").dataset.got = next;
}
_resume("a0", $valueChange);

// tags/my-button.marko
const $input__script = _script("b0", ($scope) => _attrs_script($scope, "a"));

// template.marko
function $onClick() {
	console.log("foo");
}
_resume("a0", $onClick);

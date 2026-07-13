// template.marko
const $rest__script = _script("a1", ($scope) => _attrs_script($scope, "a"));
function $onClick(_, el) {
	el.textContent = "clicked";
}
_resume("a0", $onClick);

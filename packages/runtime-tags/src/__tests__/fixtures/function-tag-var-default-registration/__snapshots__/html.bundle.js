// template.marko
const updateText = $updateText;
function $updateText(ev) {
	ev.target.textContent = "after";
}
_resume("a0", $updateText);
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const { onClick: $onClick } = {};
	const onClick = void 0 !== $onClick ? $onClick : updateText;
	_html(`<button>before</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, { d: onClick });
}, 1);

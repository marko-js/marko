// template.marko
function updateText(ev) {
	ev.target.textContent = "after";
}
_resume(updateText, "a0");
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const sum = function(a, b) {
		return a + b;
	};
	const onClick = updateText;
	_html(`<div>${_escape(sum(1, 2))}</div><button>before</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, { d: onClick });
}, 1);

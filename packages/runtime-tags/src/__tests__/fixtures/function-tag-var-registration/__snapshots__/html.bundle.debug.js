// template.marko
function updateText(ev) {
	ev.target.textContent = "after";
}
_resume(updateText, "__tests__/template.marko_0/updateText");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const sum = function(a, b) {
		return a + b;
	};
	const onClick = updateText;
	_html(`<div>${_escape(sum(1, 2))}</div><button>before</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0_onClick");
	writeScope($scope0_id, { onClick }, "__tests__/template.marko", 0, { onClick: "10:7" });
}, 1);

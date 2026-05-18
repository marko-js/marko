// template.marko
function sum(a, b) {
	return a + b;
}
const add1 = (v) => (0, sum)(1, v);
function updateText(ev) {
	ev.target.textContent = "after";
}
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_escape(sum(1, 2))}</div><div>${_escape(add1(3))}</div><button>before</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);

// template.marko
function sum(a, b) {
	return a + b;
}
const add1 = (v) => sum(1, v);
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_escape(sum(1, 2))}</div><div>${_escape(add1(3))}</div><button>before</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {});
}, 1);

// template.marko
function createWrapper(a) {
	return { a };
}
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const { a, a: b } = createWrapper(count);
	_html(`<button>${_escape(a)}${_el_resume($scope0_id, "#text/1")} <!>${_escape(b)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_count");
	writeScope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "5:6" });
	_resume_branch($scope0_id);
}, 1);

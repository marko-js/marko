// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	const y = x + 1;
	const z = x + 2;
	const a = y + z;
	_html(`<button>${_text_resume($scope0_id, "#text/1", x)}</button>${_el_resume($scope0_id, "#button/0")}${_text_resume($scope0_id, "#text/2", y)} ${_text_resume($scope0_id, "#text/3", z, 2)} ${_text_resume($scope0_id, "#text/4", a, 2)}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { x }, "__tests__/template.marko", 0, { x: "1:6" });
	_resume_branch($scope0_id);
}, 1);

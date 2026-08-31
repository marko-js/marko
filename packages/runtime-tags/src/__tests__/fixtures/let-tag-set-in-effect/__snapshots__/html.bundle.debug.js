// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	let y = 0;
	_html(`<span>${_text_resume($scope0_id, "#text/0", x)}</span><span>${_text_resume($scope0_id, "#text/1", y)}</span>`);
	_script($scope0_id, "__tests__/template.marko_0_x#2");
	_scope($scope0_id, { x }, "__tests__/template.marko", 0, { x: "1:6" });
	_resume_branch($scope0_id);
}, 1);

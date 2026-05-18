// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let clickCount = 0;
	_html(`<button>${_escape(clickCount)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_clickCount");
	writeScope($scope0_id, { clickCount }, "__tests__/template.marko", 0, { clickCount: "1:6" });
	_resume_branch($scope0_id);
}, 1);

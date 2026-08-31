// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let mounted = undefined;
	_html(`<div>${_text_resume($scope0_id, "#text/0", mounted ? `${_to_text("A")}B${_to_text(mounted && "C")}D` : "")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);

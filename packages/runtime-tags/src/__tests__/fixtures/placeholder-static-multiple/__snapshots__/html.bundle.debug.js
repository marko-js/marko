// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let mounted = undefined;
	_html(`<div>${mounted ? `${_escape(`${_to_text("A")}`)}B${_escape(`${_to_text(mounted && "C")}`)}D` : ""}${_el_resume($scope0_id, "#text/0")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);

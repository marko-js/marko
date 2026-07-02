// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let toggle = false;
	_html(`<html><body${_attr("data-toggle", toggle)}><button>Toggle</button>${_el_resume($scope0_id, "#button/1")}</body>${_el_resume($scope0_id, "#body/0")}`), _trailers("</html>");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { toggle }, "__tests__/template.marko", 0, { toggle: "1:5" });
	_resume_branch($scope0_id);
}, 1);

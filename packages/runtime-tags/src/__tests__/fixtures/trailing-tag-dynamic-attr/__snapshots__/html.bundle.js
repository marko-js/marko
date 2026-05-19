// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let toggle = false;
	_html(`<html><body${_attr("data-toggle", toggle)}><button>Toggle</button>${_el_resume($scope0_id, "b")}</body>${_el_resume($scope0_id, "a")}`), _trailers("</html>");
	_script($scope0_id, "a0");
	writeScope($scope0_id, { c: toggle });
	_resume_branch($scope0_id);
}, 1);

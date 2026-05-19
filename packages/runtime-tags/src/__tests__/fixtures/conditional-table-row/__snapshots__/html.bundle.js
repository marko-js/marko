// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html("<table><tbody>");
	_if(() => {}, $scope0_id, "a", 1, 1, 1, "</tbody>", 1);
	_html(`</table><button>Toggle</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { c: show });
	_resume_branch($scope0_id);
}, 1);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html("<table><tbody>");
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_html("<tr><td>Hi</td></tr>");
			writeScope($scope1_id, {}, "__tests__/template.marko", "4:6");
			return 0;
		}
	}, $scope0_id, "#tbody/0", 1, 1, 1, "</tbody>", 1);
	_html(`</table><button>Toggle</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "1:6" });
	_resume_branch($scope0_id);
}, 1);

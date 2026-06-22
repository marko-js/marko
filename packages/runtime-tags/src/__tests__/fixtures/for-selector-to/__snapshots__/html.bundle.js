// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let selected = void 0;
	_html("<table><tbody>");
	_for_to(4, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_html(`<tr${selected === i ? " class=danger" : ""}><td><button class=select>${_escape(i)}</button>${_el_resume($scope1_id, "b")}</td></tr>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		writeScope($scope1_id, {
			M: i,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, 0, 0, 0, 1);
	_html("</tbody></table>");
	_resume_branch($scope0_id);
}, 1);

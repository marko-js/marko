// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div></div>${_el_resume($scope0_id, "a")}`);
	const $return = _resume(() => (html) => ((el) => el())(_el_read_error).innerHTML = html, "b0", $scope0_id);
	writeScope($scope0_id, {});
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_hoist($scope0_id, "a0");
	_for_to(5, 0, 1, () => {
		writeScope(_scope_id(), { c: child_default({}) });
	}, 0, $scope0_id, "a", 1, 0, 0, 0, 1);
	let to = 3;
	_html("<hr>");
	_for_to(to, 0, 1, () => {
		writeScope(_scope_id(), { c: child_default({}) });
	}, 0, $scope0_id, "b", 1, 0, 0, 0, 1);
	_html("<hr>");
	_for_to(3, 0, 1, (i) => {
		const $scope3_id = _scope_id();
		_html("<ul>");
		_for_to(3, 0, 1, (j) => {
			writeScope(_scope_id(), { c: child_default({}) });
		}, 0, $scope3_id, "a", 1, 0, 0, 0, 1);
		_html("</ul>");
		writeScope($scope3_id, {});
	}, 0, $scope0_id, "c", 1, 0, 0, 0, 1);
	_script($scope0_id, "a1");
	_resume_branch($scope0_id);
}, 1);

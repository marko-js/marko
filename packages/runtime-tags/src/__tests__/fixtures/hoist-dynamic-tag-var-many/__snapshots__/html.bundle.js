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
		const $scope1_id = _scope_id();
		const $Child_scope = _peek_scope_id();
		let setHtml = _dynamic_tag($scope1_id, "a", child_default, {});
		_var($scope1_id, "b", $Child_scope, "a1");
		writeScope($scope1_id, { c: setHtml });
	}, 0, $scope0_id, "a", 1, 0, 0, 0, 0, 1);
	let to = 3;
	_html("<hr>");
	_for_to(to, 0, 1, () => {
		const $scope2_id = _scope_id();
		const $Child_scope2 = _peek_scope_id();
		let setHtml2 = _dynamic_tag($scope2_id, "a", child_default, {});
		_var($scope2_id, "b", $Child_scope2, "a2");
		writeScope($scope2_id, { c: setHtml2 });
	}, 0, $scope0_id, "b", 1, 0, 0, 0, 0, 1);
	_html("<hr>");
	_for_to(3, 0, 1, (i) => {
		const $scope3_id = _scope_id();
		_html("<ul>");
		_for_to(3, 0, 1, (j) => {
			const $scope4_id = _scope_id();
			const $Child_scope3 = _peek_scope_id();
			let setHtml3 = _dynamic_tag($scope4_id, "a", child_default, {});
			_var($scope4_id, "b", $Child_scope3, "a3");
			writeScope($scope4_id, { c: setHtml3 });
		}, 0, $scope3_id, "a", 1, 0, 0, 0, 0, 1);
		_html("</ul>");
		writeScope($scope3_id, {});
	}, 0, $scope0_id, "c", 1, 0, 0, 0, 1, 1);
	_script($scope0_id, "a4");
	_resume_branch($scope0_id);
}, 1);

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_hoist($scope0_id, "a0");
	_for_to(5, 0, 1, () => {
		const $scope1_id = _scope_id();
		_html(`<div></div>${_el_resume($scope1_id, "a")}`);
		writeScope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, 0, 0, 0, 1);
	let to = 3;
	_html("<hr>");
	_for_to(to, 0, 1, () => {
		const $scope2_id = _scope_id();
		_html(`<div></div>${_el_resume($scope2_id, "a")}`);
		writeScope($scope2_id, {});
	}, 0, $scope0_id, "b", 1, 0, 0, 0, 1);
	_html("<hr>");
	_for_to(3, 0, 1, (i) => {
		const $scope3_id = _scope_id();
		_html("<ul>");
		_for_to(3, 0, 1, (j) => {
			const $scope4_id = _scope_id();
			_html(`<li${_attr("data-index", i * 4 + j)}></li>${_el_resume($scope4_id, "a")}`);
			writeScope($scope4_id, {});
		}, 0, $scope3_id, "a", 1, 0, 0, 0, 1);
		_html("</ul>");
		writeScope($scope3_id, {});
	}, 0, $scope0_id, "c", 1, 0, 0, 0, 1);
	_script($scope0_id, "a1");
	_resume_branch($scope0_id);
}, 1);

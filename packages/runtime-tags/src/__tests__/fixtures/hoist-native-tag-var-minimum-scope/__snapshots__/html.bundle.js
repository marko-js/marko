// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_hoist($scope0_id, "a0");
	_html(`<pre id=root></pre>${_el_resume($scope0_id, "a")}<pre id=outer></pre>${_el_resume($scope0_id, "b")}<pre id=inner></pre>${_el_resume($scope0_id, "c")}`);
	_for_to(2, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_hoist($scope1_id, "a1");
		_for_to(2, 0, 1, (j) => {
			const $scope2_id = _scope_id();
			_hoist($scope2_id, "a2");
			_html(`<div${_attr_class(`${i}, ${j}`)}></div>${_el_resume($scope2_id, "a")}`);
			_script($scope2_id, "a3");
			writeScope($scope2_id, { _: _scope_with_id($scope1_id) });
		}, 0, $scope1_id, "a", 1, 0, 0, 0, 1, 1);
		_script($scope1_id, "a4");
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "d", 1, 0, 0, 0, 0, 1);
	_script($scope0_id, "a5");
	writeScope($scope0_id, {});
}, 1);

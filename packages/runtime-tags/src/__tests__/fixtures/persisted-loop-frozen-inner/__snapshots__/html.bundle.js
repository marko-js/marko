// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let outer = ["a"];
	let inner = ["x"];
	_html("<main>");
	if ($scope0_reason) _for_of(outer, (o) => {
		const $scope1_id = _scope_id();
		if ($scope0_reason) _for_of(inner, (i) => {
			const $scope2_id = _scope_id();
			_html(`<div>${_escape(o)}${_el_resume($scope2_id, "a")}<!>${_escape(i)}${_el_resume($scope2_id, "b")}</div>`);
			writeScope($scope2_id, { _: _scope_with_id($scope1_id) });
		}, 0, $scope1_id, "a", 1, 0, 0, 0, 1);
		writeScope($scope1_id, {});
	}, 0, $scope0_id, "a");
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason && writeScope($scope0_id, {
		c: outer,
		d: inner
	});
	_resume_branch($scope0_id);
}, 1, 0);

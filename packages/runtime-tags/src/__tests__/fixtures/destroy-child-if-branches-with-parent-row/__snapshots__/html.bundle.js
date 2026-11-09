// tags/c2.marko
var c2_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_if(() => {
		if (input.on) {
			const $scope2_id = _scope_id();
			_script($scope2_id, "b0", 0);
			_write_if($scope0_reason, 0) && _scope($scope2_id, {});
			_resume_branch($scope2_id);
			return 0;
		}
	}, $scope0_id, "a", $wg__input_on, $wg__input_on);
	_if(() => {
		if (input.on) {
			const $scope1_id = _scope_id();
			_script($scope1_id, "b1", 0);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			_resume_branch($scope1_id);
			return 0;
		}
	}, $scope0_id, "b", 1, $wg__input_on);
	_html(`<button class=inc></button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "b2");
	_scope($scope0_id, { g: n });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_for_of([{ id: 1 }, { id: 2 }], (it) => {
		const $scope1_id = _scope_id();
		c2_default({ on: true });
		_scope($scope1_id, {});
	}, 0, $scope0_id, "a");
	_html(`<button id=clear></button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {});
}, 1);

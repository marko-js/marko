// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_hoist($scope0_id, "a1");
	_if(() => {
		if (input.a) {
			const $scope1_id = _scope_id();
			const getLabel = _resume(() => "a", "a0");
			_scope($scope1_id, { a: getLabel });
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html(`<button>${_text_resume($scope2_id, "b", "none")}</button>${_el_resume($scope2_id, "a")}`);
			_script($scope2_id, "a2");
			_scope($scope2_id, { _: _scope_with_id($scope0_id) });
			return 1;
		}
	}, $scope0_id, "a", 1, $wg__input_a);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);

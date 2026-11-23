// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.a) {
			const $scope1_id = _scope_id();
			const getLabel = _resume(() => "a", "a0");
			_scope($scope1_id, { a: getLabel });
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html(`<button>${_text_mark($scope2_id, "b", "none")}</button>${_el_mark($scope2_id, "a")}`);
			_script($scope2_id, "a1");
			_scope($scope2_id, { _: _scope_with_id($scope0_id) });
			return 1;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0));
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);

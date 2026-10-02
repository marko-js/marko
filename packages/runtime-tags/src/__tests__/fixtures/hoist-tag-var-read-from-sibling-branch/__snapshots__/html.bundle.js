// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $getLabel_getter = _hoist($scope0_id, "a1");
	_if(() => {
		if (input.a) {
			const $scope2_id = _scope_id();
			const getLabel = _resume(() => "a", "a0");
			_scope($scope2_id, { a: getLabel });
			return 0;
		} else {
			const $scope1_id = _scope_id();
			let count = 0;
			_html(`<button>${_text_resume($scope1_id, "b", count)}</button>${_el_resume($scope1_id, "a")}`);
			_dynamic_tag($scope1_id, "c", input.dyn, { count }, _content_resume("a2", () => {
				const $scope3_id = _scope_id();
				_scope_reason();
				if ($getLabel_getter) {
					_scope_id();
					_html("y");
				}
				_scope($scope3_id, { _: _scope_with_id($scope1_id) });
			}, $scope1_id));
			_script($scope1_id, "a3");
			_scope($scope1_id, {
				d: count,
				_: _scope_with_id($scope0_id)
			});
			return 1;
		}
	}, $scope0_id, "a", 1, $wg__input_a);
	_scope($scope0_id, { e: input.dyn });
}, 1);

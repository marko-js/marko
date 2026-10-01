// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Foo = { content: _content("a0", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__input_bar = _write_guard($scope1_reason, 1), $wg__input_message = _write_guard($scope1_reason, 2), $wi__input_bar = _write_if($scope1_reason, 1);
		_if(() => {
			if (input.bar) {
				const $scope2_id = _scope_id();
				_set_scope_reason($wg__input_bar << 1 | $wg__input_bar << 5);
				const $childScope = _peek_scope_id();
				Foo.content({ message: input.bar });
				$wi__input_bar && _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					a: _existing_scope($childScope)
				});
				return 0;
			} else {
				const $scope3_id = _scope_id();
				_html(_text_resume($scope3_id, "a", JSON.stringify(input.message), $wg__input_message));
				_write_if($scope1_reason, 0) && _scope($scope3_id, { _: _write_if($scope1_reason, 2) && _scope_with_id($scope1_id) });
				return 1;
			}
		}, $scope1_id, "a", _write_guard($scope1_reason, 0) || $wg__input_bar, $wg__input_bar, $wg__input_bar);
		$wi__input_bar && _scope($scope1_id, { e: input.message });
	}, $scope0_id) };
	Foo.content({ bar: "hi" });
}, 1);

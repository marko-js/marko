// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Foo = { content: _content_resume("a0", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__input_message = _write_guard($scope1_reason, 2), $wg__input_depth = _write_guard($scope1_reason, 1), $wi__input_depth = _write_if($scope1_reason, 1);
		_if(() => {
			if (input.depth) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "a", Foo, { message: "done" }, 0, 0, 0);
				$wi__input_depth && _scope($scope2_id, { _: _scope_with_id($scope1_id) });
				return 0;
			} else {
				const $scope3_id = _scope_id();
				_html(_text_resume($scope3_id, "a", input.message, $wg__input_message));
				_write_if($scope1_reason, 0) && _scope($scope3_id, { _: _write_if($scope1_reason, 2) && _scope_with_id($scope1_id) });
				return 1;
			}
		}, $scope1_id, "a", _write_guard($scope1_reason, 0) || $wg__input_depth, $wg__input_depth, $wg__input_depth);
		$wi__input_depth && _scope($scope1_id, {
			e: input?.message,
			_: _scope_with_id($scope0_id)
		});
	}, $scope0_id) };
	Foo.content({ depth: 1 });
	_scope($scope0_id, { b: Foo });
}, 1);

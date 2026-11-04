// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Foo = { content: _content_resume("a0", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__input_bar__OR__input_alt = _write_guard($scope1_reason, 0), $wg__input_message = _write_guard($scope1_reason, 4), $wg__input_bar = _write_guard($scope1_reason, 2), $wi__input_bar = _write_if($scope1_reason, 2), $wi__input_bar__OR__input_alt = _write_if($scope1_reason, 0);
		_if(() => {
			if (input.bar) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "a", input.alt ? Foo : 0, { message: input.bar }, 0, 0, $wg__input_bar__OR__input_alt);
				$wi__input_bar__OR__input_alt && _scope($scope2_id, { _: _scope_with_id($scope1_id) });
				return 0;
			} else {
				const $scope3_id = _scope_id();
				_html(_text_resume($scope3_id, "a", JSON.stringify(input.message), $wg__input_message));
				_write_if($scope1_reason, 1) && _scope($scope3_id, { _: _write_if($scope1_reason, 4) && _scope_with_id($scope1_id) });
				return 1;
			}
		}, $scope1_id, "a", $wg__input_bar__OR__input_alt || _write_guard($scope1_reason, 1), $wg__input_bar);
		$wi__input_bar__OR__input_alt && _scope($scope1_id, {
			d: _write_if($scope1_reason, 3) && input?.bar,
			e: $wi__input_bar && input?.alt,
			f: $wi__input_bar && input?.message,
			_: _scope_with_id($scope0_id)
		});
	}, $scope0_id) };
	Foo.content({ bar: "hi" });
	_scope($scope0_id, { b: Foo });
}, 1);

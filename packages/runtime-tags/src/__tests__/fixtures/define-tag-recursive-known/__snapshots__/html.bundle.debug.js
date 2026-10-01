// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Foo = { content: _content("__tests__/template.marko_1*content", (input) => {
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
					"#childScope/0": _existing_scope($childScope)
				}, "__tests__/template.marko", "2:3");
				return 0;
			} else {
				const $scope3_id = _scope_id();
				_html(_text_resume($scope3_id, "#text/0", JSON.stringify(input.message), $wg__input_message));
				_write_if($scope1_reason, 0) && _scope($scope3_id, { _: _write_if($scope1_reason, 2) && _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:3");
				return 1;
			}
		}, $scope1_id, "#text/0", _write_guard($scope1_reason, 0) || $wg__input_bar, $wg__input_bar, $wg__input_bar);
		$wi__input_bar && _scope($scope1_id, { input_message: input.message }, "__tests__/template.marko", "1:1", { input_message: ["input.message", "1:12"] });
	}, $scope0_id) };
	Foo.content({ bar: "hi" });
}, 1);

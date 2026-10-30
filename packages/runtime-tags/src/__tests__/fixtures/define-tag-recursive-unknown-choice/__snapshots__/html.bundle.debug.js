// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Foo = { content: _content_resume("__tests__/template.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__input_bar__OR__input_alt = _write_guard($scope1_reason, 0), $wg__input_message = _write_guard($scope1_reason, 4), $wg__input_bar = _write_guard($scope1_reason, 2), $wi__input_bar = _write_if($scope1_reason, 2), $wi__input_bar__OR__input_alt = _write_if($scope1_reason, 0);
		_if(() => {
			if (input.bar) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "#text/0", input.alt ? Foo : 0, { message: input.bar }, 0, 0, $wg__input_bar__OR__input_alt);
				$wi__input_bar__OR__input_alt && _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:3");
				return 0;
			} else {
				const $scope3_id = _scope_id();
				_html(_text_resume($scope3_id, "#text/0", JSON.stringify(input.message), $wg__input_message));
				_write_if($scope1_reason, 1) && _scope($scope3_id, { _: _write_if($scope1_reason, 4) && _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:3");
				return 1;
			}
		}, $scope1_id, "#text/0", $wg__input_bar__OR__input_alt || _write_guard($scope1_reason, 1), $wg__input_bar);
		$wi__input_bar__OR__input_alt && _scope($scope1_id, {
			input_bar: _write_if($scope1_reason, 3) && input?.bar,
			input_alt: $wi__input_bar && input?.alt,
			input_message: $wi__input_bar && input?.message,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "1:1", {
			input_bar: ["input.bar", "1:12"],
			input_alt: ["input.alt", "1:12"],
			input_message: ["input.message", "1:12"]
		});
	}, $scope0_id) };
	Foo.content({ bar: "hi" });
	_scope($scope0_id, { Foo }, "__tests__/template.marko", 0, { Foo: "1:8" });
}, 1);

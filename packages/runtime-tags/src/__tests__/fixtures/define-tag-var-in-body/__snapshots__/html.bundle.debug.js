// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Foo = { content: _content_resume("__tests__/template.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__input_message = _write_guard($scope1_reason, 2), $wg__input_depth = _write_guard($scope1_reason, 1), $wi__input_depth = _write_if($scope1_reason, 1);
		_if(() => {
			if (input.depth) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "#text/0", 0 || Foo, { message: "done" }, 0, 0, 0);
				$wi__input_depth && _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:4");
				return 0;
			} else {
				const $scope3_id = _scope_id();
				_html(_text_resume($scope3_id, "#text/0", input.message, $wg__input_message));
				_write_if($scope1_reason, 0) && _scope($scope3_id, { _: _write_if($scope1_reason, 2) && _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:4");
				return 1;
			}
		}, $scope1_id, "#text/0", _write_guard($scope1_reason, 0) || $wg__input_depth, $wg__input_depth);
		$wi__input_depth && _scope($scope1_id, {
			input_message: input?.message,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "1:2", { input_message: ["input.message", "1:13"] });
	}, $scope0_id) };
	Foo.content({ depth: 1 });
	_scope($scope0_id, { Foo }, "__tests__/template.marko", 0, { Foo: "1:9" });
}, 1);

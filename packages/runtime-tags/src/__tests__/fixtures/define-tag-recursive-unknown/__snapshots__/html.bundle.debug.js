// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Foo = { content: _content_resume("__tests__/template.marko_1_content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__input_bar = _serialize_guard($scope1_reason, 1), $si__input_bar = _serialize_if($scope1_reason, 1);
		_if(() => {
			if (input.bar) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "#text/0", 0 || Foo, { message: input.bar }, 0, 0, $sg__input_bar);
				$si__input_bar && writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:3");
				return 0;
			} else {
				const $scope3_id = _scope_id();
				_html(`${_escape(JSON.stringify(input.message))}${_el_resume($scope3_id, "#text/0", _serialize_guard($scope1_reason, 2))}`);
				_serialize_if($scope1_reason, 0) && writeScope($scope3_id, { _: _serialize_if($scope1_reason, 2) && _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:3");
				return 1;
			}
		}, $scope1_id, "#text/0", _serialize_guard($scope1_reason, 0) || $sg__input_bar, $sg__input_bar, $sg__input_bar);
		$si__input_bar && writeScope($scope1_id, {
			input_bar: input?.bar,
			input_message: input?.message,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "1:1", {
			input_bar: ["input.bar", "1:12"],
			input_message: ["input.message", "1:12"]
		});
	}, $scope0_id) };
	Foo.content({ bar: "hi" });
	writeScope($scope0_id, { Foo }, "__tests__/template.marko", 0, { Foo: "1:8" });
}, 1);

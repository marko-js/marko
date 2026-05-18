// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	const Foo = { content: _content("a0", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__input_bar = _serialize_guard($scope1_reason, 1), $si__input_bar = _serialize_if($scope1_reason, 1);
		_if(() => {
			if (input.bar) {
				const $scope2_id = _scope_id();
				const $childScope = _peek_scope_id();
				_set_serialize_reason({
					0: $sg__input_bar,
					2: $sg__input_bar
				});
				Foo.content({ message: input.bar });
				$si__input_bar && writeScope($scope2_id, {
					_: _scope_with_id($scope1_id),
					a: _existing_scope($childScope)
				});
				return 0;
			} else {
				const $scope3_id = _scope_id();
				_html(`${_escape(JSON.stringify(input.message))}${_el_resume($scope3_id, "a", _serialize_guard($scope1_reason, 2))}`);
				_serialize_if($scope1_reason, 0) && writeScope($scope3_id, { _: _serialize_if($scope1_reason, 2) && _scope_with_id($scope1_id) });
				return 1;
			}
		}, $scope1_id, "a", _serialize_guard($scope1_reason, 0) || $sg__input_bar, $sg__input_bar, $sg__input_bar);
		$si__input_bar && writeScope($scope1_id, {
			d: input.bar,
			e: input.message
		});
	}) };
	Foo.content({ bar: "hi" });
}, 1);

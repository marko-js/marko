// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const a = "abc";
	const Foo = { content: _content("a0", (input) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__input_content__OR__input_value = _write_guard($scope3_reason, 0);
		_dynamic_tag($scope3_id, "a", input.content, [input.value], 0, 1, $wg__input_content__OR__input_value);
		_write_if($scope3_reason, 0) && _scope($scope3_id, {
			d: _write_if($scope3_reason, 2) && input.content,
			e: _write_if($scope3_reason, 1) && input.value
		});
	}, $scope0_id) };
	_html(`<button>Increment</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(34);
	const $childScope = _peek_scope_id();
	Foo.content({
		value: count,
		content: _content_resume("a1", (v) => {
			const $scope1_reason = _scope_reason(), $wg__v = _write_guard($scope1_reason, 0);
			const $scope1_id = _scope_id();
			_if(() => {
				if (v) {
					const $scope2_id = _scope_id();
					_html(_escape(a));
					_scope($scope2_id, { _: _scope_with_id($scope1_id) });
					return 0;
				}
			}, $scope1_id, "a", $wg__v, $wg__v);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
		}, $scope0_id)
	});
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		c: count,
		d: a,
		b: _existing_scope($childScope)
	});
}, 1);

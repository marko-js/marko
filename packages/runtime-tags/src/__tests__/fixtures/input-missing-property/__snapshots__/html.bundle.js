// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	const Child = { content: _content("a0", (input) => {
		const $scope1_id = _scope_id();
		const $Child_content__input_name__closures = /* @__PURE__ */ new Set();
		const $scope1_reason = _scope_reason(), $sg__input_name = _serialize_guard($scope1_reason, 2), $si__input_count__OR__input_name = _serialize_if($scope1_reason, 0), $sg__input_count = _serialize_guard($scope1_reason, 1), $si__input_name = _serialize_if($scope1_reason, 2);
		_if(() => {
			if (input.count) {
				const $scope2_id = _scope_id();
				{
					const $scope3_id = _scope_id();
					_html(`<div>${_text_resume($scope3_id, "a", input.name || "Fallback", $sg__input_name)}</div>`);
					$si__input_count__OR__input_name && _subscribe($si__input_name && $Child_content__input_name__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }));
				}
				$si__input_count__OR__input_name && _scope($scope2_id, { _: _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", $sg__input_count, $sg__input_count, $sg__input_count);
		$si__input_count__OR__input_name && _scope($scope1_id, {
			e: _serialize_if($scope1_reason, 1) && input.name,
			f: $si__input_name && $Child_content__input_name__closures
		});
	}, $scope0_id) };
	_set_serialize_reason(6);
	const $childScope = _peek_scope_id();
	Child.content({ count });
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		d: count,
		c: _existing_scope($childScope)
	});
}, 1);

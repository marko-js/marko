// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	const Child = { content: _content("__tests__/template.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		const $Child_content__input_name__closures = new Set();
		const $scope1_reason = _scope_reason(), $sg__input_name = _serialize_guard($scope1_reason, 2), $si__input_count__OR__input_name = _serialize_if($scope1_reason, 0), $sg__input_count = _serialize_guard($scope1_reason, 1), $si__input_name = _serialize_if($scope1_reason, 2);
		_if(() => {
			if (input.count) {
				const $scope2_id = _scope_id();
				if (true) {
					const $scope3_id = _scope_id();
					_html(`<div>${_text_resume($scope3_id, "#text/0", input.name || "Fallback", $sg__input_name)}</div>`);
					$si__input_count__OR__input_name && _subscribe($si__input_name && $Child_content__input_name__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "8:6"));
				}
				$si__input_count__OR__input_name && _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "7:4");
				return 0;
			}
		}, $scope1_id, "#text/0", $sg__input_count, $sg__input_count, $sg__input_count);
		$si__input_count__OR__input_name && _scope($scope1_id, {
			input_name: _serialize_if($scope1_reason, 1) && input.name,
			"ClosureScopes:input_name": $si__input_name && $Child_content__input_name__closures
		}, "__tests__/template.marko", "6:2", { input_name: ["input.name", "6:15"] });
	}, $scope0_id) };
	_set_serialize_reason(6);
	const $childScope = _peek_scope_id();
	Child.content({ count });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);

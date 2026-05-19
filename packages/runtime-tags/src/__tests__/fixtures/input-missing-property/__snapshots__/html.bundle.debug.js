// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const Child = { content: _content("__tests__/template.marko_1_content", (input) => {
		const $scope1_id = _scope_id();
		const $Child_content__input_name__closures = new Set();
		const $scope1_reason = _scope_reason(), $si__input_count__OR__input_name = _serialize_if($scope1_reason, 0), $sg__input_count = _serialize_guard($scope1_reason, 1);
		_if(() => {
			if (input.count) {
				const $scope2_id = _scope_id();
				if (true) {
					const $scope3_id = _scope_id();
					_html(`<div>${_escape(input.name || "Fallback")}${_el_resume($scope3_id, "#text/0", _serialize_guard($scope1_reason, 2))}</div>`);
					$si__input_count__OR__input_name && _subscribe($Child_content__input_name__closures, writeScope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "8:6"));
				}
				$si__input_count__OR__input_name && writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "7:4");
				return 0;
			}
		}, $scope1_id, "#text/0", $sg__input_count, $sg__input_count, $sg__input_count);
		$si__input_count__OR__input_name && writeScope($scope1_id, {
			input_name: _serialize_if($scope1_reason, 1) && input.name,
			"ClosureScopes:input_name": _serialize_if($scope1_reason, 2) && $Child_content__input_name__closures
		}, "__tests__/template.marko", "6:2", { input_name: ["input.name", "6:15"] });
	}) };
	const $childScope = _peek_scope_id();
	_set_serialize_reason({
		0: 1,
		1: 1
	});
	Child.content({ count });
	_script($scope0_id, "__tests__/template.marko_0_count");
	writeScope($scope0_id, {
		count,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);

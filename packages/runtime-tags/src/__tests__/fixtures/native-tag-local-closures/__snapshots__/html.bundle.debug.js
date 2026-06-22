// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let size = 1;
	const Child = { content: _content("__tests__/template.marko_1_content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope1_reason, 0);
		_for_of(input.item, (item) => {
			const $scope2_id = _scope_id();
			_html("<div");
			_attrs_content(item, "#div/0", $scope2_id, "div");
			_html(`</div>${_el_resume($scope2_id, "#div/0")}`);
			_script($scope2_id, "__tests__/template.marko_2_item");
			writeScope($scope2_id, {}, "__tests__/template.marko", "4:4");
		}, 0, $scope1_id, "#text/0", $sg__input_item, $sg__input_item, $sg__input_item, 0, 1, 1);
		_serialize_if($scope1_reason, 0) && writeScope($scope1_id, {}, "__tests__/template.marko", "3:2");
	}) };
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	let $item;
	forUntil(size, 0, 1, (i) => {
		$item = attrTags($item, { content: _content_resume("__tests__/template.marko_3_content", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_html(`${_escape(i)}${_el_resume($scope3_id, "#text/0")}`);
			writeScope($scope3_id, {}, "__tests__/template.marko", "11:6");
		}, $scope0_id) });
	});
	Child.content({ item: $item });
	_html(`<button>Add</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0_size");
	writeScope($scope0_id, {
		size,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { size: "1:6" });
	_resume_branch($scope0_id);
}, 1);

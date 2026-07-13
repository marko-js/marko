// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let size = 1;
	const Child = { content: _content("a1", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope1_reason, 0);
		_for_of(input.item, (item) => {
			const $scope2_id = _scope_id();
			_html("<div");
			_attrs_content(item, "a", $scope2_id, "div");
			_html(`</div>${_el_resume($scope2_id, "a")}`);
			_script($scope2_id, "a0");
			writeScope($scope2_id, {});
		}, 0, $scope1_id, "a", $sg__input_item, $sg__input_item, $sg__input_item, 0, 1);
		_serialize_if($scope1_reason, 0) && writeScope($scope1_id, {});
	}) };
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	let $item;
	forUntil(size, 0, 1, (i) => {
		$item = attrTags($item, { content: _content_resume("a2", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_html(`${_escape(i)}${_el_resume($scope3_id, "a")}`);
			writeScope($scope3_id, {});
		}, $scope0_id) });
	});
	Child.content({ item: $item });
	_html(`<button>Add</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	writeScope($scope0_id, {
		c: size,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);

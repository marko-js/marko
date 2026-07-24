// tags/my-menu/index.marko
var my_menu_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_html("<button");
		_attrs_content(item, "a", $scope1_id, "button");
		_html(`</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "b0");
		writeScope($scope1_id, {});
	}, 0, $scope0_id, "a", $sg__input_item, $sg__input_item, $sg__input_item, 0, 1);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let clicked = "";
	_set_serialize_reason(1);
	let $item;
	forOf(["a", "b"], (foo) => {
		$item = attrTags($item, {
			onClick: _resume_locals(function() {
				clicked += foo;
			}, "a0", { e: foo }, $scope0_id),
			content: _content_resume("a1", () => {
				_scope_reason();
				const $scope1_id = _scope_id();
				_html(`Click <!>${_escape(foo)}${_el_resume($scope1_id, "a")}`);
				writeScope($scope1_id, {});
			}, $scope0_id)
		});
	});
	const $childScope = _peek_scope_id();
	my_menu_default({ item: $item });
	_html(`<div>${_escape(clicked)}${_el_resume($scope0_id, "b")}</div>`);
	writeScope($scope0_id, {
		c: clicked,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);

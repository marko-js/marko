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
	let foo = "outer";
	let $item;
	forOf(["a", "b"], ($foo) => {
		$item = attrTags($item, {
			onClick: _resume_locals(function(ev) {
				ev.target.textContent = $foo;
			}, "a0", { e: $foo }),
			content: _content_resume("a1", () => {
				_scope_reason();
				const $scope1_id = _scope_id();
				_html(`${_escape($foo)}${_el_resume($scope1_id, "a")}`);
				writeScope($scope1_id, {});
			}, $scope0_id)
		});
	});
	my_menu_default({ item: $item });
	_html(`<div>${_escape(foo)}</div>`);
}, 1);

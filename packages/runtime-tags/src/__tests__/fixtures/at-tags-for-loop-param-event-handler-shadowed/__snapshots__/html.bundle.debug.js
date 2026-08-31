// tags/my-menu/index.marko
var my_menu_default = _template("__tests__/tags/my-menu/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_html("<button");
		_attrs_content(item, "#button/0", $scope1_id, "button");
		_html(`</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/tags/my-menu/index.marko_1_item#2");
		writeScope($scope1_id, {}, "__tests__/tags/my-menu/index.marko", "1:2", { "EventAttributes:#button/0": ["...item", "2:14"] });
	}, 0, $scope0_id, "#text/0", $sg__input_item, $sg__input_item, $sg__input_item, 0, 1);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/my-menu/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let foo = "outer";
	let $item;
	forOf(["a", "b"], ($foo) => {
		$item = attrTags($item, {
			onClick: _resume_locals(function(ev) {
				ev.target.textContent = $foo;
			}, "__tests__/template.marko_0/onClick", { "$foo/4": $foo }),
			content: _content_resume("__tests__/template.marko_1*content", () => {
				_scope_reason();
				const $scope1_id = _scope_id();
				_html(`${_escape($foo) || "<!>"}${_el_resume($scope1_id, "#text/0")}`);
				writeScope($scope1_id, {}, "__tests__/template.marko", "4:6");
			}, $scope0_id)
		});
	});
	my_menu_default({ item: $item });
	_html(`<div>${_escape(foo)}</div>`);
}, 1);

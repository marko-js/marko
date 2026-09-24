// tags/list.marko
var list_default = _template("b", (input) => {
	const $sg__input_item = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	let show = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_if(() => {
			{
				const $scope2_id = _scope_id();
				_html("<div");
				_attrs_content(item, "a", $scope2_id, "div");
				_html(`</div>${_el_resume($scope2_id, "a")}`);
				_script($scope2_id, "b0");
				_scope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "a", 1, 1, 1, 0, 1);
		_scope($scope1_id, {
			c: item,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "b", 1, $sg__input_item, $sg__input_item);
	_script($scope0_id, "b1");
	_scope($scope0_id, { f: show });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	list_default({ item: attrTag({
		class: "a",
		content: _content_resume("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`One ${_text_resume($scope1_id, "a", count, 2)}`);
			_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0");
		}, $scope0_id)
	}) });
	_html(`<button class=inc>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		c: count,
		d: $count__closures
	});
}, 1);

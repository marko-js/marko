// tags/btn.marko
var btn_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<button");
	_attrs_content(input, "a", $scope0_id, "button");
	_html(`</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// tags/child.marko
var child_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope0_reason, 0), $si__input_item = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		const $childScope = _peek_scope_id();
		btn_default({
			...item,
			class: "item"
		});
		$si__input_item && _scope($scope1_id, { a: _existing_scope($childScope) });
	}, 0, $scope0_id, "a", $sg__input_item, $sg__input_item, $sg__input_item, 0, 1);
	$si__input_item && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_set_serialize_reason(2);
	const $childScope = _peek_scope_id();
	child_default({ item: attrTags(attrTag({
		onClick: _resume(function() {
			count++;
		}, "a0", $scope0_id),
		content: _content("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`One ${_text_resume($scope1_id, "a", count, 2)}`);
			_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		}, $scope0_id)
	}), { content: _content("a2", () => {
		_scope_reason();
		_scope_id();
		_html("Two");
	}, $scope0_id) }) });
	_scope($scope0_id, {
		b: count,
		c: $count__closures,
		a: _existing_scope($childScope)
	});
}, 1);

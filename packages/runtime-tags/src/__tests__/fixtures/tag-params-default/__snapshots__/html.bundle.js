// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, [void 0], 0, 1, $sg__input_content);
	_dynamic_tag($scope0_id, "b", input.content, ["given"], 0, 1, $sg__input_content);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $fallback__closures = /* @__PURE__ */ new Set();
	let fallback = "default";
	_html(`<button id=change>change</button>${_el_resume($scope0_id, "a")}`);
	child_default({ content: _content("a0", ($y) => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", void 0 !== $y ? $y : fallback)}</p>`);
		_subscribe($fallback__closures, _scope($scope1_id, {
			c: $y,
			_: _scope_with_id($scope0_id)
		}));
	}, $scope0_id) });
	child_default({});
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		d: fallback,
		e: $fallback__closures
	});
}, 1);
